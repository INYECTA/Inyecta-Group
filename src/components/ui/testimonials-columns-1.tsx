"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border border-potion-border bg-white/50 backdrop-blur-sm shadow-lg shadow-potion-accent/5 max-w-xs w-full" key={i}>
                  <div className="text-potion-text/80 leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-potion-border bg-slate-100 shrink-0">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-potion-text">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-potion-muted text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
