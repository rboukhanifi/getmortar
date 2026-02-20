import React, { useEffect, useRef } from 'react';
import { rotate3D, perspectiveProject, generateSpherePoints, FOV } from '../utils/canvas';
import type { Point3D } from '../utils/canvas';

// Constants — fewer particles for visible neural-net connections
const PARTICLE_COUNT_DESKTOP = 180;
const PARTICLE_COUNT_MOBILE = 100;
const BASE_RADIUS = 350;
const REFERENCE_SIZE = 800;
const ROTATION_SPEED_X = 0.15;
const ROTATION_SPEED_Y = 0.08;
const Z_CULL_THRESHOLD = 300;
const TARGET_FPS = 30;
const FRAME_TIME = 1000 / TARGET_FPS;
const CONNECTION_DISTANCE_BASE = 140; // px threshold at reference size

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

            time += 0.005;
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
            const projected: { x: number; y: number; depth: number }[] = [];

            particles.forEach(p => {
                const rotated = rotate3D(p.x, p.y, p.z, rotX, rotY);
                const { screenX, screenY, scale } = perspectiveProject(
                    rotated.x, rotated.y, rotated.z,
                    centerX, centerY, FOV
                );

                if (rotated.z < Z_CULL_THRESHOLD) {
                    projected.push({ x: screenX, y: screenY, depth: rotated.z });

                    // Draw node dot
                    const size = scale * 2.5;
                    const depthAlpha = Math.max(0.2, 1 - (rotated.z + 350) / 700);
                    ctx.globalAlpha = depthAlpha;
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // Draw connections between nearby projected particles
            ctx.lineWidth = 0.6;

            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const dx = projected[i].x - projected[j].x;
                    const dy = projected[i].y - projected[j].y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < connectionDistSq) {
                        const dist = Math.sqrt(distSq);
                        const proximity = 1 - dist / connectionDist;
                        // Factor in depth of both particles
                        const avgDepth = (projected[i].depth + projected[j].depth) / 2;
                        const depthFade = Math.max(0.05, 1 - (avgDepth + 350) / 700);
                        ctx.globalAlpha = proximity * depthFade * 0.25;
                        ctx.strokeStyle = color;
                        ctx.beginPath();
                        ctx.moveTo(projected[i].x, projected[i].y);
                        ctx.lineTo(projected[j].x, projected[j].y);
                        ctx.stroke();
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
