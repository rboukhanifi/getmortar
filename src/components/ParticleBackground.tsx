import React, { useEffect, useRef } from 'react';
import { rotate3D, perspectiveProject, generateSpherePoints, FOV } from '../utils/canvas';
import type { Point3D } from '../utils/canvas';

const PARTICLE_COUNT_DESKTOP = 300;
const PARTICLE_COUNT_MOBILE = 150;
const ROBOT_COUNT_DESKTOP = 8;
const ROBOT_COUNT_MOBILE = 4;
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

// Draw a minimal robot silhouette centered at (0,0) at given scale
function drawRobot(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, alpha: number, color: string) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const s = size;

    // Antenna
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.95);
    ctx.lineTo(0, -s * 0.7);
    ctx.stroke();
    // Antenna tip
    ctx.beginPath();
    ctx.arc(0, -s * 1.0, s * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // Head (rounded rect)
    const hw = s * 0.45;
    const hh = s * 0.35;
    const hy = -s * 0.7 + hh / 2 + s * 0.05;
    const r = s * 0.1;
    ctx.beginPath();
    ctx.moveTo(-hw + r, hy - hh / 2);
    ctx.lineTo(hw - r, hy - hh / 2);
    ctx.quadraticCurveTo(hw, hy - hh / 2, hw, hy - hh / 2 + r);
    ctx.lineTo(hw, hy + hh / 2 - r);
    ctx.quadraticCurveTo(hw, hy + hh / 2, hw - r, hy + hh / 2);
    ctx.lineTo(-hw + r, hy + hh / 2);
    ctx.quadraticCurveTo(-hw, hy + hh / 2, -hw, hy + hh / 2 - r);
    ctx.lineTo(-hw, hy - hh / 2 + r);
    ctx.quadraticCurveTo(-hw, hy - hh / 2, -hw + r, hy - hh / 2);
    ctx.closePath();
    ctx.stroke();

    // Eyes
    const eyeY = hy - s * 0.02;
    const eyeR = s * 0.07;
    ctx.beginPath();
    ctx.arc(-s * 0.18, eyeY, eyeR, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(s * 0.18, eyeY, eyeR, 0, Math.PI * 2);
    ctx.fill();

    // Body
    const bw = s * 0.5;
    const bh = s * 0.45;
    const by = hy + hh / 2 + s * 0.08;
    const br = s * 0.08;
    ctx.beginPath();
    ctx.moveTo(-bw + br, by);
    ctx.lineTo(bw - br, by);
    ctx.quadraticCurveTo(bw, by, bw, by + br);
    ctx.lineTo(bw, by + bh - br);
    ctx.quadraticCurveTo(bw, by + bh, bw - br, by + bh);
    ctx.lineTo(-bw + br, by + bh);
    ctx.quadraticCurveTo(-bw, by + bh, -bw, by + bh - br);
    ctx.lineTo(-bw, by + br);
    ctx.quadraticCurveTo(-bw, by, -bw + br, by);
    ctx.closePath();
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(-bw, by + s * 0.1);
    ctx.lineTo(-bw - s * 0.2, by + s * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(bw, by + s * 0.1);
    ctx.lineTo(bw + s * 0.2, by + s * 0.3);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(-s * 0.2, by + bh);
    ctx.lineTo(-s * 0.2, by + bh + s * 0.25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s * 0.2, by + bh);
    ctx.lineTo(s * 0.2, by + bh + s * 0.25);
    ctx.stroke();

    ctx.restore();
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
        let robotIndices: Set<number> = new Set();

        const getResponsiveRadius = (width: number, height: number): number => {
            const viewportScale = Math.min(width, height) / REFERENCE_SIZE;
            return BASE_RADIUS * viewportScale;
        };

        const initParticles = (width: number, height: number) => {
            const isMobile = width < 768;
            const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
            const robotCount = isMobile ? ROBOT_COUNT_MOBILE : ROBOT_COUNT_DESKTOP;
            const radius = getResponsiveRadius(width, height);
            particles = generateSpherePoints(count, radius);

            // Pick random particles to be robots
            robotIndices = new Set();
            while (robotIndices.size < robotCount) {
                robotIndices.add(Math.floor(Math.random() * count));
            }
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

            const viewportScale = Math.min(canvas.width, canvas.height) / REFERENCE_SIZE;
            const connectionDist = CONNECTION_DISTANCE_BASE * viewportScale;
            const connectionDistSq = connectionDist * connectionDist;

            const projected: { x: number; y: number; depth: number; alpha: number; isRobot: boolean }[] = [];

            particles.forEach((p, idx) => {
                const rotated = rotate3D(p.x, p.y, p.z, rotX, rotY);
                const { screenX, screenY, scale } = perspectiveProject(
                    rotated.x, rotated.y, rotated.z,
                    centerX, centerY, FOV
                );

                if (rotated.z < Z_CULL_THRESHOLD) {
                    const depthAlpha = Math.max(0.15, 1 - (rotated.z + 380) / 760);
                    const isRobot = robotIndices.has(idx);
                    projected.push({ x: screenX, y: screenY, depth: rotated.z, alpha: depthAlpha, isRobot });

                    if (isRobot) {
                        // Draw robot silhouette as a node
                        const robotSize = Math.max(6, scale * 12);
                        drawRobot(ctx, screenX, screenY, robotSize, depthAlpha * 0.6, color);
                    } else {
                        // Draw regular node dot
                        const size = Math.max(1, scale * 2);
                        ctx.globalAlpha = depthAlpha * 0.9;
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            });

            // Draw connections
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
