"use client";

import { useRef, useEffect } from "react";

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
}

const Silk: React.FC<SilkProps> = ({
  speed = 0.10,
  scale = 0.70,
  color = "#2f2447",
  noiseIntensity = 3.3, 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);
    
    let time = 0;
    let animationFrameId: number;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalCompositeOperation = "screen"; 

      const lines = 50; 
      
      for (let j = 0; j < lines; j++) {
        ctx.beginPath();
        for (let i = 0; i < width; i += 5) { 
          const x = i;
          const y = (height / 2) + 
            Math.sin((i * scale * 0.003) + time + (j * 0.05)) * Math.cos((i * scale * 0.001) + (time * 0.5)) * (height * 0.1 * noiseIntensity); 

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += speed * 0.05; 
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, scale, color, noiseIntensity]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
};

export default Silk;