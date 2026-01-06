/**
 * Shared canvas utilities for 3D rendering
 */

// Constants
export const FOV = 800;

export interface Point3D {
    x: number;
    y: number;
    z: number;
}

/**
 * Rotate a point around Y axis then X axis
 */
export function rotate3D(
    x: number,
    y: number,
    z: number,
    rotX: number,
    rotY: number
): Point3D {
    // Rotate around Y
    const rotatedX = x * Math.cos(rotY) - z * Math.sin(rotY);
    const rotatedZ = x * Math.sin(rotY) + z * Math.cos(rotY);

    // Rotate around X
    const finalY = y * Math.cos(rotX) - rotatedZ * Math.sin(rotX);
    const finalZ = y * Math.sin(rotX) + rotatedZ * Math.cos(rotX);

    return { x: rotatedX, y: finalY, z: finalZ };
}

/**
 * Project 3D point to 2D screen coordinates using perspective
 */
export function perspectiveProject(
    x: number,
    y: number,
    z: number,
    centerX: number,
    centerY: number,
    fov: number = FOV
): { screenX: number; screenY: number; scale: number } {
    const scale = fov / (fov + z);
    return {
        screenX: centerX + x * scale,
        screenY: centerY + y * scale,
        scale
    };
}

/**
 * Calculate depth-based alpha for a point
 */
export function depthAlpha(z: number, minZ: number, maxZ: number): number {
    const alpha = (z - minZ) / (maxZ - minZ);
    return Math.max(0.1, Math.min(1, alpha));
}

/**
 * Generate points on a sphere surface using spherical coordinates
 */
export function generateSpherePoints(count: number, radius: number): Point3D[] {
    const points: Point3D[] = [];
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        points.push({
            x: radius * Math.sin(phi) * Math.cos(theta),
            y: radius * Math.sin(phi) * Math.sin(theta),
            z: radius * Math.cos(phi)
        });
    }
    return points;
}
