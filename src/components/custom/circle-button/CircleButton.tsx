// CircleButton.tsx
"use client";

import React from 'react';

interface CircleButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
  className?: string; // Añadir className como una propiedad opcional
  style?: React.CSSProperties; // Añadir style como una propiedad opcional
}

const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  onClick,
  label,
  className = '',
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-10 h-10 bg-orange-300 text-orange-800/50 rounded-full shadow-md mb-4 hover:bg-orange-300 backdrop-blur-2xl transition-colors ${className}`}
      style={style}
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default CircleButton;
