import React, { useEffect, useRef } from 'react';
import { rotate3D, perspectiveProject, generateSpherePoints, FOV } from '../utils/canvas';
import type { Point3D } from '../utils/canvas';

// Constants
const PARTICLE_COUNT_DESKTOP = 6000;
const PARTICLE_COUNT_MOBILE = 3000;
const BASE_RADIUS = 350;
const REFERENCE_SIZE = 800; // Reference viewport size for scaling
const ROTATION_SPEED_X = 0.2;
const ROTATION_SPEED_Y = 0.1;
const Z_CULL_THRESHOLD = 300;
const DITHER_THRESHOLD = 0.3;
const TARGET_FPS = 30;
const FRAME_TIME = 1000 / TARGET_FPS;

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

        // Calculate responsive radius based on viewport
        const getResponsiveRadius = (width: number, height: number): number => {
            const viewportScale = Math.min(width, height) / REFERENCE_SIZE;
            return BASE_RADIUS * viewportScale;
        };

        // Initialize or reinitialize particles
        const initParticles = (width: number, height: number) => {
            const isMobile = width < 768;
            const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
            const radius = getResponsiveRadius(width, height);
            particles = generateSpherePoints(count, radius);
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Regenerate particles with new radius to maintain centering and circular form
            initParticles(canvas.width, canvas.height);
        };

        window.addEventListener('resize', resize);
        resize();

        const render = (currentTime: number) => {
            // Frame throttling for performance
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

            // Set fill style once outside the loop
            ctx.fillStyle = color;

            particles.forEach(p => {
                const rotated = rotate3D(p.x, p.y, p.z, rotX, rotY);
                const { screenX, screenY, scale } = perspectiveProject(
                    rotated.x, rotated.y, rotated.z,
                    centerX, centerY, FOV
                );

                // Draw only if in front
                if (rotated.z < Z_CULL_THRESHOLD) {
                    // Dithered effect: Randomly skip some pixels
                    if (Math.random() > DITHER_THRESHOLD) {
                        const size = (scale * 1.5) * (Math.random() * 0.5 + 0.5);
                        ctx.fillRect(screenX, screenY, size, size);
                    }
                }
            });

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
