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
      <div className="relative flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover/logo:rotate-12 transition-transform duration-500">
          <svg 
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4h8v8" />
            <path d="M4 20l16-16" />
          </svg>
        </div>
        <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${colorClass}`}>
          Inyecta Group
        </span>
      </div>
    </div>
  );
};
