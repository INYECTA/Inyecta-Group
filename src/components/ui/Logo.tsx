import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  return (
    <div className={`flex items-center gap-2 group/logo ${className}`}>
      <div className="relative flex items-center transition-all duration-500 group-hover/logo:translate-x-1">
        <span 
          className="text-blue-600 text-base md:text-lg font-black tracking-tight"
          translate="no"
        >
          Inyecta Group
        </span>
        <div className="ml-1.5 flex items-start -mt-1.5">
          <div className="w-2.5 h-2.5 border-t-[2.5px] border-r-[2.5px] border-blue-600 rounded-tr-[1.5px]" />
        </div>
      </div>
    </div>
  );
};
