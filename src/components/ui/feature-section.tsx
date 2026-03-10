"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center tracking-tighter">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8 cursor-pointer"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500",
                    index === currentFeature
                      ? "bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-600/20"
                      : "bg-slate-50 border-slate-200 text-slate-400",
                  )}
                >
                  {index < currentFeature ? (
                    <span className="text-xl font-bold">✓</span>
                  ) : (
                    <span className="text-xl font-bold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-bold mb-2 transition-colors duration-500",
                    index === currentFeature ? "text-slate-900" : "text-slate-400"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-lg leading-relaxed transition-colors duration-500",
                    index === currentFeature ? "text-slate-600" : "text-slate-400"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-600/10 border border-slate-100",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
