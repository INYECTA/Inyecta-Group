import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GodRays } from "@paper-design/shaders-react";

export const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX - innerWidth / 2) / 40,
        y: (clientY - innerHeight / 2) / 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Layer - Soft Clinical Cream/White */}
      <div className="absolute inset-0 bg-[#FDFCFB]"></div>
      
      {/* Soft Blue Gradients */}
      <motion.div 
        style={{ y: y1, x: mousePos.x * 0.5 }}
        className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-[120px]"
      />
      <motion.div 
        style={{ y: y2, x: mousePos.x * -0.5 }}
        className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-bl from-blue-50/30 to-transparent blur-[100px]"
      />
      
      {/* Texture & Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>

      {/* GodRays - Very subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <GodRays
          colorBack="#00000000"
          colors={["#0052CC20", "#38BDF820", "#FFFFFF20"]}
          intensity={0.3}
          density={0.2}
          speed={0.3}
          scale={1.2}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};
