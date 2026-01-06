import React, { useEffect, useRef } from 'react';
import { rotate3D, perspectiveProject, FOV, depthAlpha } from '../utils/canvas';
import type { Point3D } from '../utils/canvas';

// Constants
const ROTATION_SPEED_X = 0.005;
const ROTATION_SPEED_Y = 0.008;

const DotBolt: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        const points: Point3D[] = [];

        // Bolt Dimensions - scale based on canvas dimensions
        const scaleFactor = Math.min(width, height) / 800;
        const headRadius = 120 * scaleFactor;
        const headDepth = 60 * scaleFactor;
        const shaftRadius = 60 * scaleFactor;
        const shaftLength = 200 * scaleFactor;

        // Helper to add point
        const addPoint = (x: number, y: number, z: number) => {
            points.push({ x, y, z });
        };

        // Hexagon vertex helper
        const getHexPoint = (angleDeg: number, radius: number) => {
            const angleRad = (angleDeg * Math.PI) / 180;
            return {
                x: radius * Math.cos(angleRad),
                y: radius * Math.sin(angleRad)
            };
        };

        // 1. Hexagonal Head - Create faces
        for (let z = -headDepth / 2; z <= headDepth / 2; z += headDepth / 4) {
            // Perimeter
            for (let i = 0; i < 6; i++) {
                const startAngle = i * 60;
                const endAngle = (i + 1) * 60;
                const steps = 10;

                for (let j = 0; j < steps; j++) {
                    const t = j / steps;
                    const p1 = getHexPoint(startAngle, headRadius);
                    const p2 = getHexPoint(endAngle, headRadius);
                    const x = p1.x + (p2.x - p1.x) * t;
                    const y = p1.y + (p2.y - p1.y) * t;
                    addPoint(x, y, z);
                }
            }

            // Fill with concentric hexagons
            if (z === -headDepth / 2 || z === headDepth / 2) {
                for (let r = headRadius - (20 * scaleFactor); r > 0; r -= (20 * scaleFactor)) {
                    for (let i = 0; i < 6; i++) {
                        const startAngle = i * 60;
                        const endAngle = (i + 1) * 60;
                        const steps = Math.floor(r / (10 * scaleFactor));

                        for (let j = 0; j < steps; j++) {
                            const t = j / steps;
                            const p1 = getHexPoint(startAngle, r);
                            const p2 = getHexPoint(endAngle, r);
                            const x = p1.x + (p2.x - p1.x) * t;
                            const y = p1.y + (p2.y - p1.y) * t;
                            addPoint(x, y, z);
                        }
                    }
                }
            }
        }

        // 2. Shaft (Cylinder with spiral thread)
        const startZ = headDepth / 2;
        const endZ = startZ + shaftLength;
        const spiralRevolutions = 8;
        const pointsPerRev = 40;

        // Shaft core
        for (let z = startZ; z <= endZ; z += (15 * scaleFactor)) {
            for (let angle = 0; angle < 360; angle += 20) {
                const rad = (angle * Math.PI) / 180;
                addPoint(
                    shaftRadius * Math.cos(rad),
                    shaftRadius * Math.sin(rad),
                    z
                );
            }
        }

        // Spiral threads
        for (let i = 0; i < spiralRevolutions * pointsPerRev; i++) {
            const progress = i / (spiralRevolutions * pointsPerRev);
            const z = startZ + progress * shaftLength;
            const angle = i * (360 / pointsPerRev);
            const rad = (angle * Math.PI) / 180;
            const threadRadius = shaftRadius + (10 * scaleFactor);

            addPoint(
                threadRadius * Math.cos(rad),
                threadRadius * Math.sin(rad),
                z
            );
        }

        // Rotation state
        let rotationX = 0.5;
        let rotationY = 0.5;

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            rotationX += ROTATION_SPEED_X;
            rotationY += ROTATION_SPEED_Y;

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

            points.forEach(point => {
                // Use shared rotation utility
                const rotated = rotate3D(point.x, point.y, point.z, rotationX, rotationY);

                // Use shared projection utility
                const { screenX, screenY, scale } = perspectiveProject(
                    rotated.x, rotated.y, rotated.z,
                    centerX, centerY, FOV
                );

                // Depth-based alpha
                const alpha = depthAlpha(rotated.z, -200, 200);
                ctx.globalAlpha = Math.min(1, alpha + 0.3);

                ctx.beginPath();
                ctx.arc(screenX, screenY, 1.5 * scale, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', handleResize);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full absolute inset-0 pointer-events-none"
        />
    );
};

export default DotBolt;
