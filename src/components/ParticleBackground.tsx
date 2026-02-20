import React, { useEffect, useRef } from 'react';
import { rotate3D, perspectiveProject, generateSpherePoints, FOV } from '../utils/canvas';
import type { Point3D } from '../utils/canvas';

// More nodes + wider connection radius for a dense, organic neural-net look
const PARTICLE_COUNT_DESKTOP = 300;
const PARTICLE_COUNT_MOBILE = 150;
const BASE_RADIUS = 380;
const REFERENCE_SIZE = 800;
const ROTATION_SPEED_X = 0.12;
const ROTATION_SPEED_Y = 0.06;
const Z_CULL_THRESHOLD = 350;
const TARGET_FPS = 30;
const FRAME_TIME = 1000 / TARGET_FPS;
const CONNECTION_DISTANCE_BASE = 120;
const MAX_CONNECTIONS_PER_NODE = 6;

interface ParticleBackgroundProps {
    color?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ color = '#ffffff' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;
        let lastFrameTime = 0;
        let particles: Point3D[] = [];

        const getResponsiveRadius = (width: number, height: number): number => {
            const viewportScale = Math.min(width, height) / REFERENCE_SIZE;
            return BASE_RADIUS * viewportScale;
        };

        const initParticles = (width: number, height: number) => {
            const isMobile = width < 768;
            const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
            const radius = getResponsiveRadius(width, height);
            particles = generateSpherePoints(count, radius);
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles(canvas.width, canvas.height);
        };

        window.addEventListener('resize', resize);
        resize();

        const render = (currentTime: number) => {
            if (currentTime - lastFrameTime < FRAME_TIME) {
                animationFrameId = requestAnimationFrame(render);
                return;
            }
            lastFrameTime = currentTime;

            time += 0.004;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            const rotX = time * ROTATION_SPEED_X;
            const rotY = time * ROTATION_SPEED_Y;

            // Scale connection distance with viewport
            const viewportScale = Math.min(canvas.width, canvas.height) / REFERENCE_SIZE;
            const connectionDist = CONNECTION_DISTANCE_BASE * viewportScale;
            const connectionDistSq = connectionDist * connectionDist;

            // Project all visible particles
            const projected: { x: number; y: number; depth: number; alpha: number }[] = [];

            particles.forEach(p => {
                const rotated = rotate3D(p.x, p.y, p.z, rotX, rotY);
                const { screenX, screenY, scale } = perspectiveProject(
                    rotated.x, rotated.y, rotated.z,
                    centerX, centerY, FOV
                );

                if (rotated.z < Z_CULL_THRESHOLD) {
                    const depthAlpha = Math.max(0.15, 1 - (rotated.z + 380) / 760);
                    projected.push({ x: screenX, y: screenY, depth: rotated.z, alpha: depthAlpha });

                    // Draw node — small crisp circles
                    const size = Math.max(1, scale * 2);
                    ctx.globalAlpha = depthAlpha * 0.9;
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // Draw connections — batch into a single path per alpha band for performance
            // Sort by depth so back-to-front lines layer naturally
            ctx.lineCap = 'round';

            const connectionCounts = new Uint8Array(projected.length);

            for (let i = 0; i < projected.length; i++) {
                if (connectionCounts[i] >= MAX_CONNECTIONS_PER_NODE) continue;

                for (let j = i + 1; j < projected.length; j++) {
                    if (connectionCounts[j] >= MAX_CONNECTIONS_PER_NODE) continue;

                    const dx = projected[i].x - projected[j].x;
                    const dy = projected[i].y - projected[j].y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < connectionDistSq) {
                        const dist = Math.sqrt(distSq);
                        const proximity = 1 - dist / connectionDist;
                        const pairAlpha = Math.min(projected[i].alpha, projected[j].alpha);
                        const lineAlpha = proximity * proximity * pairAlpha * 0.35;

                        ctx.globalAlpha = lineAlpha;
                        ctx.strokeStyle = color;
                        ctx.lineWidth = proximity * 1.2 + 0.2;
                        ctx.beginPath();
                        ctx.moveTo(projected[i].x, projected[i].y);
                        ctx.lineTo(projected[j].x, projected[j].y);
                        ctx.stroke();

                        connectionCounts[i]++;
                        connectionCounts[j]++;
                    }
                }
            }

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
};

export default ParticleBackground;
