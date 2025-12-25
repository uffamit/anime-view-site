'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-[50px] right-[30px] bg-[var(--dropdown-bg)] px-[8px] py-[8px] rounded-full z-[3] cursor-pointer shadow-[-1px_3px_8px_-1px_rgba(0,0,0,0.2)] transition-colors hover:bg-[var(--dropdown-hover)]"
      aria-label="Toggle dark/light mode"
    >
      <svg className="w-[24px] h-[24px]" fill={isDarkMode ? '#ffce45' : 'currentColor'} stroke={isDarkMode ? '#ffce45' : 'currentColor'} viewBox="0 0 24 24">
        {isDarkMode ? (
          <circle cx="12" cy="12" r="5" />
        ) : (
          <circle cx="12" cy="12" r="5" opacity="0.3" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
