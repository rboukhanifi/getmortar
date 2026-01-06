import React, { useEffect, useRef } from 'react';

const WhiteHoleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 500;

        class Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            angle: number;
            radius: number;
            speed: number;
            jitter: number;

            constructor(w: number, h: number) {
                this.angle = Math.random() * Math.PI * 2;
                // Distribute particles around the center (hole)
                // Density higher near the center now
                const random = Math.random();
                if (random < 0.4) {
                    // 40% of particles close to orb (20px - 100px)
                    this.radius = Math.random() * 80 + 20;
                } else {
                    // 60% spread out (80px - 450px)
                    this.radius = Math.random() * 370 + 80;
                }

                this.baseX = w / 2 + Math.cos(this.angle) * this.radius;
                this.baseY = h / 2 + Math.sin(this.angle) * this.radius;
                this.x = this.baseX;
                this.y = this.baseY;

                // Varied sizes, slightly smaller on average for "star" look
                this.size = Math.random() * 1.5 + 0.5;
                this.speed = Math.random() * 0.002 + 0.001;
                this.jitter = 0;
            }

            update(w: number, h: number) {
                // Orbit logic
                this.angle += this.speed;

                // Normal orbit position
                this.x = w / 2 + Math.cos(this.angle) * this.radius;
                this.y = h / 2 + Math.sin(this.angle) * this.radius;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update(canvas.width, canvas.height);
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Central Interaction Point */}
            <div
                className="relative z-10 flex items-center justify-center cursor-pointer group"
                style={{ width: '10vw', height: '10vw' }} // ~10% of width
            >
                {/* Glassmorphism Hexagon */}


                {/* Central White Glowing Point */}
                <div className="w-[20%] h-[20%] bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse"></div>
            </div>
        </div>
    );
};

export default WhiteHoleBackground;
