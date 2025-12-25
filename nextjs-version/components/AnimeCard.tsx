'use client';

import React, { useState } from 'react';

interface AnimeCardProps {
  title: string;
  description: string;
  image: string;
  borderColor: string;
  bgColor: string;
  buttonLabel: string;
  buttonType?: 'watch' | 'wishlist';
}

const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  description,
  image,
  borderColor,
  bgColor,
  buttonLabel,
  buttonType = 'watch',
}) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <div className="flex flex-col w-[calc(33.3%-20px)] text-[16px] bg-[var(--content-bg)] rounded-[14px] border border-[var(--theme-bg-color)] p-[20px] cursor-pointer transition-transform hover:scale-[1.02] hover:bg-[var(--theme-bg-color)]">
      <div className="flex items-center">
        <svg viewBox="0 0 52 52" style={{ border: `1px solid ${borderColor}` }} className="w-[28px] rounded-[6px] mr-[12px] shrink-0">
          <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill={bgColor} />
        </svg>
        <span className="text-[var(--theme-color)]">{title}</span>
      </div>

      <p className="text-[14px] font-normal leading-[1.6em] mt-[20px] border-b border-[var(--border-color)] pb-[20px]">
        {description}
      </p>

      <div className="flex items-center ml-auto mt-[16px]">
        <button className="bg-[#3a6df0] border-none px-[24px] py-[6px] text-white rounded-[20px] cursor-pointer transition-colors hover:bg-[#1e59f1]">
          {buttonLabel}
        </button>
        <div className="w-[5px] h-[5px] bg-[var(--button-inactive)] rounded-full box-shadow mx-[12px]"></div>
      </div>

      {/* Wishlist Popup Modal */}
      {isWishlistOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--popup-bg)] p-[40px] rounded-[6px] z-10 shadow-lg w-[500px] max-sm:w-full">
          <div className="flex justify-between items-center pb-[20px] border-b border-[var(--border-color)]">
            <h2 className="text-[var(--theme-color)]">wishlist</h2>
            <button onClick={() => setIsWishlistOpen(false)} className="w-[24px] h-[24px] text-[var(--theme-color)] bg-none border-none cursor-pointer">
              ✕
            </button>
          </div>
          <div className="mt-[20px] text-[14px] font-normal">
            Adjust your selections for advanced options as desired before continuing.
          </div>
          <div className="mt-[40px] flex gap-[8px]">
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="bg-none text-[var(--button-inactive)] border border-[var(--button-inactive)] px-[24px] py-[6px] rounded-[20px] cursor-pointer"
            >
              Cancel
            </button>
            <button className="bg-[#3a6df0] text-white px-[24px] py-[6px] rounded-[20px] cursor-pointer transition-colors hover:bg-[#1e59f1]">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeCard;
