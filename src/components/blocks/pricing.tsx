"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { CALENDAR_LINK } from "../../constants";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice?: string;
  period?: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  result?: string;
  icon?: React.ReactNode;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
  showToggle?: boolean;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
  showToggle = true,
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20 mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      {showToggle && (
        <div className="flex justify-center items-center mb-10 gap-4">
          <span className={cn("text-sm font-medium", isMonthly ? "text-foreground" : "text-muted-foreground")}>Mensual</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <Label>
              <Switch
                ref={switchRef as any}
                checked={!isMonthly}
                onCheckedChange={handleToggle}
                className="relative"
              />
            </Label>
          </label>
          <span className={cn("text-sm font-medium", !isMonthly ? "text-foreground" : "text-muted-foreground")}>
            Pago anual <span className="text-primary">(Ahorra 20%)</span>
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            className={cn(
              `rounded-[3rem] border-[1px] p-10 md:p-12 bg-white relative flex flex-col transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] group`,
              plan.isPopular 
                ? "border-blue-600 border-2 shadow-2xl shadow-blue-600/10" 
                : "border-slate-100 shadow-sm hover:border-blue-200",
              index === 0 || index === 2 ? "z-0" : "z-10"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 py-2.5 px-6 rounded-full flex items-center shadow-xl shadow-blue-600/40">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-2 text-[11px] font-black uppercase tracking-[0.2em]">
                  Más Recomendado
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col items-center text-center">
              {plan.icon && (
                <div className={cn(
                  "w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                  plan.isPopular ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/30" : "bg-blue-50 text-blue-600"
                )}>
                  {plan.icon}
                </div>
              )}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                {plan.name}
              </p>
              <div className="mb-8 flex items-baseline justify-center gap-x-2">
                <span className="text-6xl md:text-7xl font-black tracking-tighter text-black leading-none">
                  <NumberFlow
                    value={
                      (!showToggle || isMonthly) ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    formatter={(value) => `${value}€`}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period && (
                  <span className="text-xl font-bold text-slate-400">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-lg text-slate-500 font-bold tracking-tight mb-12 leading-tight">
                {plan.description}
              </p>

              <div className="mb-12 w-full">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Incluye:</p>
                <ul className="space-y-6 flex-1 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-lg font-bold text-slate-600 tracking-tight">
                      <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.result && (
                <div className="mt-auto pt-6 w-full">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Resultado:</p>
                  <p className="text-xl font-black text-black leading-tight mb-8 tracking-tighter">{plan.result}</p>
                </div>
              )}

              <hr className="w-full mb-8 border-slate-100" />

              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-6 rounded-2xl font-black text-xl transition-all duration-500 flex items-center justify-center gap-3 active:scale-95",
                  plan.isPopular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/30"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                )}
              >
                {plan.buttonText}
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
