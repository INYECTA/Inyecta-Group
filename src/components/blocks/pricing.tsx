"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

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
              `rounded-[2.5rem] border-[1px] p-8 bg-background relative flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`,
              plan.isPopular 
                ? "border-blue-600 border-2 shadow-2xl shadow-blue-600/10 bg-blue-50/30" 
                : "border-slate-200 shadow-sm hover:border-blue-200",
              index === 0 || index === 2 ? "z-0" : "z-10"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 py-1.5 px-4 rounded-full flex items-center shadow-lg shadow-blue-600/30">
                <Star className="text-white h-3.5 w-3.5 fill-current" />
                <span className="text-white ml-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Más Recomendado
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col items-center text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {plan.name}
              </p>
              <div className="mb-8 flex items-baseline justify-center gap-x-2">
                <span className="text-6xl font-bold tracking-tighter text-slate-900">
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
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 mb-8 font-medium max-w-[250px]">
                {plan.description}
              </p>

              <div className="mb-4 w-full">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Incluye:</p>
                <ul className="space-y-4 flex-1 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.result && (
                <div className="mt-auto pt-6 w-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Resultado:</p>
                  <p className="text-sm font-bold text-slate-900 leading-tight mb-6">{plan.result}</p>
                </div>
              )}

              <hr className="w-full mb-8 border-slate-100" />

              <a
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: plan.isPopular ? "default" : "outline",
                  }),
                  "w-full py-6 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center justify-center text-center px-4",
                  plan.isPopular 
                    ? "bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 scale-105" 
                    : "hover:bg-slate-50 border-slate-200"
                )}
              >
                <span className="truncate">{plan.buttonText}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
