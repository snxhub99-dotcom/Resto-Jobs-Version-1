import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Shield Main Shape */}
      <path
        d="M100 20 L160 50 V100 C160 145 100 180 100 180 C100 180 40 145 40 100 V50 L100 20 Z"
        fill="#05060A"
        stroke="url(#goldGradient)"
        strokeWidth="4"
      />
      
      {/* Inner Decorative Border */}
      <path
        d="M100 30 L150 55 V100 C150 138 100 168 100 168 C100 168 50 138 50 100 V55 L100 30 Z"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Sunburst Rays (Simplified) */}
      <g stroke="url(#goldGradient)" strokeWidth="1" opacity="0.3">
        <line x1="100" y1="100" x2="100" y2="40" />
        <line x1="100" y1="100" x2="140" y2="60" />
        <line x1="100" y1="100" x2="150" y2="100" />
        <line x1="100" y1="100" x2="140" y2="140" />
        <line x1="100" y1="100" x2="60" y2="140" />
        <line x1="100" y1="100" x2="50" y2="100" />
        <line x1="100" y1="100" x2="60" y2="60" />
      </g>

      {/* The Letter R */}
      <text
        x="100"
        y="130"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="80"
        fontWeight="bold"
        fill="url(#goldGradient)"
      >
        R
      </text>

      {/* Crown (Simplified) */}
      <path
        d="M80 15 L90 5 L100 15 L110 5 L120 15 L100 20 Z"
        fill="url(#goldGradient)"
      />
      
      {/* Left Flourish */}
      <path
        d="M35 60 C 10 60, 10 100, 35 120"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Right Flourish */}
      <path
        d="M165 60 C 190 60, 190 100, 165 120"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;