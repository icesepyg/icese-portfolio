import React, { useEffect, useRef } from 'react';

const DesignConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const points = [
      [.12, .22], [.27, .64], [.44, .3], [.58, .72], [.72, .18], [.87, .55], [.78, .84], [.2, .86],
    ];
    let width = 0;
    let height = 0;
    let frame = 0;
    let time = 0;
    const pointer = { x: .5, y: .5, active: false };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width;
      pointer.y = (event.clientY - bounds.top) / bounds.height;
      pointer.active = true;
    };
    const leave = () => { pointer.active = false; };
    const draw = () => {
      time += .008;
      context.clearRect(0, 0, width, height);
      const rendered = points.map(([x, y], index) => ({
        x: x * width + Math.sin(time * (1.2 + index * .08) + index) * 12,
        y: y * height + Math.cos(time * (1.4 + index * .06) + index) * 9,
      }));
      rendered.forEach((point, index) => {
        rendered.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < Math.min(width, 420)) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(117,167,199,${Math.max(0, .16 - distance / 3200)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        });
        if (pointer.active) {
          const px = pointer.x * width;
          const py = pointer.y * height;
          const distance = Math.hypot(point.x - px, point.y - py);
          if (distance < 240) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(px, py);
            context.strokeStyle = `rgba(232,180,196,${.55 - distance / 500})`;
            context.stroke();
          }
        }
        context.beginPath();
        context.arc(point.x, point.y, index % 3 === 0 ? 5 : 3, 0, Math.PI * 2);
        context.fillStyle = index % 2 ? '#e8b4c4' : '#75a7c7';
        context.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-[6] h-full w-full opacity-80" aria-hidden="true" />;
};

export default DesignConstellation;
