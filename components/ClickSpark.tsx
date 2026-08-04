import React, { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  start: number;
}

const ClickSpark: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const click = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('button, a, [data-spark]')) return;
      const now = performance.now();
      for (let index = 0; index < 8; index += 1) {
        sparksRef.current.push({
          x: event.clientX,
          y: event.clientY,
          angle: (Math.PI * 2 * index) / 8,
          start: now,
        });
      }
    };

    let animation = 0;
    const draw = (time: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      sparksRef.current = sparksRef.current.filter((spark) => {
        const progress = (time - spark.start) / 420;
        if (progress >= 1) return false;
        const eased = progress * (2 - progress);
        const distance = eased * 32;
        const length = 10 * (1 - eased);
        const x = spark.x + Math.cos(spark.angle) * distance;
        const y = spark.y + Math.sin(spark.angle) * distance;
        context.beginPath();
        context.strokeStyle = '#3a1f1a';
        context.lineWidth = 1.7;
        context.moveTo(x, y);
        context.lineTo(x + Math.cos(spark.angle) * length, y + Math.sin(spark.angle) * length);
        context.stroke();
        return true;
      });
      animation = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('click', click);
    animation = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', click);
    };
  }, []);

  return <canvas ref={canvasRef} className="click-spark-canvas" aria-hidden="true" />;
};

export default ClickSpark;
