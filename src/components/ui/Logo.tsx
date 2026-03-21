import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const colorClass = variant === 'light' ? 'text-white' : 'text-slate-900';
  const borderColorClass = variant === 'light' ? 'border-white' : 'border-blue-600';

  return (
    <div className={`flex items-center gap-2 group/logo ${className}`}>
      <div className="relative inline-block py-1 pr-4">
        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${colorClass}`}>
          Inyecta Group
        </span>
        <svg 
          className={`absolute -top-1 -right-0 w-6 h-6 transition-transform duration-500 group-hover/logo:translate-x-1 group-hover/logo:-translate-y-1 ${variant === 'light' ? 'text-white' : 'text-blue-600'}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3.5" 
          strokeLinecap="square"
        >
          <path d="M12 4h8v8" />
        </svg>
      </div>
    </div>
  );
};
