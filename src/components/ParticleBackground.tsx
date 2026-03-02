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
const TRANSITION_DURATION = 3000; // 3 seconds

interface ParticleBackgroundProps {
    color?: string;
    transitioning?: boolean;
    onTransitionComplete?: () => void;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ color = '#ffffff', transitioning = false, onTransitionComplete }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const transitionStartTime = useRef<number | null>(null);
    const hasCalledComplete = useRef(false);

    // Start transition timing when transitioning becomes true
    useEffect(() => {
        if (transitioning) {
            transitionStartTime.current = performance.now();
            hasCalledComplete.current = false;
        } else {
            transitionStartTime.current = null;
            hasCalledComplete.current = false;
        }
    }, [transitioning]);

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
            // Frame throttling for performance — skip throttle during transition
            if (transitionStartTime.current === null && currentTime - lastFrameTime < FRAME_TIME) {
                animationFrameId = requestAnimationFrame(render);
                return;
            }
            lastFrameTime = currentTime;

            // Compute transition progress
            let t = 0;
            if (transitionStartTime.current !== null) {
                const elapsed = currentTime - transitionStartTime.current;
                t = Math.min(elapsed / TRANSITION_DURATION, 1.0);
            }

            // Derive per-phase multipliers
            let rotSpeedMultiplier = 1;
            let radiusMultiplier = 1;
            let sizeMultiplier = 1;
            let ditherThreshold = DITHER_THRESHOLD;
            let zCullThreshold = Z_CULL_THRESHOLD;
            let extraFill = 0;

            if (t > 0) {
                if (t <= 0.33) {
                    // Phase 1: spin accelerates 1x → 5x (quadratic ease-in)
                    const p = t / 0.33;
                    rotSpeedMultiplier = 1 + 4 * p * p;
                } else if (t <= 0.75) {
                    // Phase 2: speed 5→8, radius 1→4, size 1→5, dither 0.3→0.03, zCull 300→800
                    const p = (t - 0.33) / 0.42;
                    rotSpeedMultiplier = 5 + 3 * p;
                    radiusMultiplier = 1 + 3 * p;
                    sizeMultiplier = 1 + 4 * p;
                    ditherThreshold = 0.3 - 0.27 * p;
                    zCullThreshold = 300 + 500 * p;
                } else {
                    // Phase 3: radius 4→6, size 5→13, overlay 0→1
                    const p = (t - 0.75) / 0.25;
                    rotSpeedMultiplier = 8;
                    radiusMultiplier = 4 + 2 * p;
                    sizeMultiplier = 5 + 8 * p;
                    ditherThreshold = 0.03;
                    zCullThreshold = 800;
                    extraFill = p;
                }
            }

            time += 0.005 * rotSpeedMultiplier;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            const rotX = time * ROTATION_SPEED_X;
            const rotY = time * ROTATION_SPEED_Y;

            // Set fill style once outside the loop
            ctx.fillStyle = color;

            particles.forEach(p => {
                const rotated = rotate3D(
                    p.x * radiusMultiplier,
                    p.y * radiusMultiplier,
                    p.z * radiusMultiplier,
                    rotX, rotY
                );
                const { screenX, screenY, scale } = perspectiveProject(
                    rotated.x, rotated.y, rotated.z,
                    centerX, centerY, FOV
                );

                // Draw only if in front
                if (rotated.z < zCullThreshold) {
                    // Dithered effect: Randomly skip some pixels
                    if (Math.random() > ditherThreshold) {
                        const size = (scale * 1.5 * sizeMultiplier) * (Math.random() * 0.5 + 0.5);
                        ctx.fillRect(screenX, screenY, size, size);
                    }
                }
            });

            // Black overlay during phase 3
            if (extraFill > 0) {
                ctx.fillStyle = `rgba(0, 0, 0, ${extraFill})`;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Fire completion callback once
            if (t >= 1.0 && !hasCalledComplete.current) {
                hasCalledComplete.current = true;
                onTransitionComplete?.();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, onTransitionComplete]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: transitioning ? 60 : 0 }}
        />
    );
};

export default ParticleBackground;
