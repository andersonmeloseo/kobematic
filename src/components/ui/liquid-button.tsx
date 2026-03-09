import React from "react";
import { cn } from "../../lib/utils";

interface LiquidButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export const LiquidButton = ({ children, className, variant = "primary", ...props }: LiquidButtonProps) => {
  return (
    <a
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 group",
        className
      )}
      {...props}
    >
      {/* Solid Background Fallback */}
      <div 
        className={cn(
          "absolute inset-0 z-0",
          variant === "primary" ? "bg-purple-600" : "bg-indigo-600"
        )} 
      />

      {/* Liquid Gradient Animation */}
      <div 
        className={cn(
          "absolute inset-0 z-10 animate-liquid",
          variant === "primary" 
            ? "bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700" 
            : "bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700"
        )}
        style={{ backgroundSize: "200% 100%" }}
      />
      
      {/* Glow Effect */}
      <div 
        className={cn(
          "absolute inset-0 z-20 animate-pulse opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500",
          variant === "primary" ? "bg-purple-400" : "bg-indigo-400"
        )} 
      />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border Effect */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none rounded-md border-2 border-transparent animate-liquid opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: variant === "primary" 
            ? "linear-gradient(90deg, #d8b4fe, #a855f7, #d8b4fe) border-box"
            : "linear-gradient(90deg, #bfdbfe, #6366f1, #bfdbfe) border-box",
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          backgroundSize: "200% 100%",
        }}
      />

      <span className="relative z-40 drop-shadow-md">{children}</span>
    </a>
  );
};
