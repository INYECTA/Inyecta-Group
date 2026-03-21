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
      
      {/* Dynamic Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-200/30 to-transparent blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -120, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -60, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-blue-100/20 to-transparent blur-[140px]"
      />
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 150, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-blue-50/40 to-transparent blur-[100px]"
      />
      
      {/* Texture & Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.04]"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>

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
