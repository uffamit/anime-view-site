'use client';

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className={`flex items-center shrink-0 h-[58px] w-full border-b border-[rgba(113,119,144,0.25)] px-[30px] whitespace-nowrap transition-all ${isSearchFocused ? 'wide' : ''}`}>
      {/* Menu circles */}
      <div className="flex gap-6 mr-[195px] shrink-0 max-md:hidden">
        <div className="w-[15px] h-[15px] bg-[#f96057] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-[#f8ce52] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-[#5fcf65] rounded-full"></div>
      </div>

      {/* Navigation Menu */}
      <nav className={`flex items-center ${isSearchFocused ? 'hidden' : ''}`}>
        <a href="#" className="px-[30px] py-[20px] text-[var(--theme-color)] border-b-2 border-[var(--theme-color)] no-underline">
          home
        </a>
        <a href="#" className="px-[30px] py-[20px] text-[var(--inactive-color)] border-b-2 border-transparent no-underline relative after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:bg-[#3a6df0] after:rounded-full after:right-[20px] after:top-[16px]">
          explore
        </a>
        <a href="#" className="px-[30px] py-[20px] text-[var(--inactive-color)] border-b-2 border-transparent no-underline">
          wishlist
        </a>
        <a href="#" className="px-[30px] py-[20px] text-[var(--inactive-color)] border-b-2 border-transparent no-underline relative after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:bg-[#3a6df0] after:rounded-full after:right-[20px] after:top-[16px]">
          Market
        </a>
      </nav>

      {/* Search Bar */}
      <div className={`h-[40px] flex w-full max-w-[400px] pl-[16px] rounded-[4px] transition-all ${isSearchFocused ? 'max-w-[600px] mx-auto' : ''}`}>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full border-none bg-[var(--search-bg)] rounded-[4px] font-poppins text-[15px] font-medium px-[40px] py-0"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>

      {/* Profile Section */}
      <div className={`flex items-center py-0 px-[40px] ml-auto shrink-0 gap-[22px] ${isSearchFocused ? 'hidden' : ''}`}>
        <div className="relative">
          <span className="absolute w-[16px] h-[16px] bg-[#3a6df0] rounded-full flex items-center justify-center text-[10px] text-white right-[-6px] top-[-6px]">
            3
          </span>
          <svg
            viewBox="0 0 24 24"
            className="w-[22px] text-[#f9fafb]"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </div>
        <svg viewBox="0 0 512 512" className="w-[22px] text-[#f9fafb]" fill="currentColor">
          <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
        </svg>
        <img src="/res/pfp.png" alt="Profile" className="w-[32px] h-[32px] rounded-full object-cover border-2 border-[var(--theme-color)] ml-[22px]" />
      </div>
    </header>
  );
};

export default Header;
