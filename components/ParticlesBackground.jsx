'use client';
import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    const particles = [];
    // Calculate node amount based on screen width so it isn't too cluttered
    const particleCount = Math.floor(window.innerWidth / 25); 
    
    // Choose particles color depending on active theme
    const colors = theme === 'dark' 
      ? ['rgba(194,24,91,0.5)', 'rgba(124,58,237,0.5)'] 
      : ['rgba(194,24,91,0.3)', 'rgba(124,58,237,0.3)'];
      
    // Init particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 0.5,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    let rafId;
    let mouse = { x: null, y: null, radius: 100 };

    const handleMouseMove = (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const render = () => {
        ctx.clearRect(0, 0, w, h);
        
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            
            // Keep particles inside canvas
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            
            // Mouse interaction
            if (mouse.x !== null) {
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let dist = Math.hypot(dx, dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    p.x -= dx * force * 0.02;
                    p.y -= dy * force * 0.02;
                }
            }
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            // Draw constellation lines
            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    const opacity = theme === 'dark' 
                        ? 0.12 - (dist/110 * 0.12)
                        : 0.06 - (dist/110 * 0.06);
                    ctx.strokeStyle = `rgba(194,24,91,${opacity})`;
                    ctx.stroke();
                }
            }
        }
        
        rafId = requestAnimationFrame(render);
    };
    
    render();
    
    const handleResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(rafId);
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
