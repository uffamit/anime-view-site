'use client';

import React from 'react';
import AnimeCard from './AnimeCard';

const MainContent: React.FC = () => {
  const animeList = [
    {
      id: 1,
      title: 'Fullmetal Alchemist:',
      description: 'Two brothers seek the Philosopher\'s Stone to restore their bodies.',
      image: '/res/anime ke 14 img.jpg',
      borderColor: '#3291b8',
      bgColor: '#061e26',
      buttonLabel: 'Open',
      status: 'watched',
    },
    {
      id: 2,
      title: 'Zom 100:',
      description: 'A young man navigates a zombie apocalypse with humor and heart.',
      image: '/res/anime img/zom-100.jpeg',
      borderColor: '#c75deb',
      bgColor: '#3a3375',
      buttonLabel: 'wishlist',
      status: 'available',
    },
    {
      id: 3,
      title: 'Naruto:',
      description: 'A ninja\'s journey from outcast to hero of his village.',
      image: '/res/anime ke 14 img.jpg',
      borderColor: '#c75deb',
      bgColor: '#3a3375',
      buttonLabel: 'Open',
      status: 'watched',
    },
  ];

  const featuredAnime = [
    {
      id: 1,
      title: 'Attack on Titan:',
      description: 'A story of humanity\'s fight against Titans, giant humanoid creatures who devour humans without reason.',
      image: '/res/anime img/Aot_1677677992610_1677677997559_1677677997559.webp',
      borderColor: '#a059a9',
      bgColor: '#210027',
    },
    {
      id: 2,
      title: 'One Piece:',
      description: 'A story of a young pirate and his crew\'s journey to find the ultimate treasure, One Piece.',
      image: '/res/anime img/one piece.png',
      borderColor: '#c1316d',
      bgColor: '#2f0015',
    },
    {
      id: 3,
      title: 'Death Note:',
      description: 'A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it.',
      image: '/res/anime img/death note.jpg',
      borderColor: '#c75deb',
      bgColor: '#3a3375',
    },
  ];

  return (
    <main className="flex flex-col grow">
      {/* Main Header */}
      <div className="flex items-center border-b border-[rgba(113,119,144,0.25)] h-[58px] shrink-0">
        <a href="#" className="text-[var(--theme-color)] px-[30px] no-underline max-lg:hidden">
          All Apps
        </a>
        <nav className="flex items-center ml-[150px] max-lg:ml-auto">
          <a href="#" className="px-[24px] py-[20px] text-[var(--theme-color)] border-b-2 border-[var(--theme-color)] no-underline">
            Desktop
          </a>
          <a href="#" className="px-[24px] py-[20px] text-[var(--inactive-color)] border-b-2 border-transparent no-underline">
            Mobile
          </a>
          <a href="#" className="px-[24px] py-[20px] text-[var(--inactive-color)] border-b-2 border-transparent no-underline">
            Web
          </a>
        </nav>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col text-[var(--theme-color)] p-[40px] h-full overflow-auto bg-[var(--theme-bg-color)] max-sm:p-[20px]">
        {/* Featured Section */}
        <div className="flex items-center w-full justify-between bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-[14px] p-[40px] max-sm:p-[20px]">
          <div className="max-w-[350px]">
            <h3 className="font-medium text-[17px] flex items-center m-0 text-white">
              anime ke 14
            </h3>
            <div className="font-normal text-[14px] mt-[16px] leading-[1.7em] text-gray-100 line-clamp-4">
              Grab yourself free access of content from anime ke 14 in a 30-day free trial.
            </div>
            <button className="bg-[#3a6df0] border-none px-[26px] py-[8px] text-white rounded-[20px] mt-[16px] cursor-pointer transition-colors hover:bg-[#1e59f1]">
              Start free trial
            </button>
          </div>
          <img src="https://assets.codepen.io/3364143/glass.png" alt="Glass" className="w-[186px] object-cover -mt-[25px] max-sm:w-[110px]" />
        </div>

        {/* Recent Section */}
        <div className="mt-[30px] flex flex-col">
          <h2 className="text-[var(--content-title-color)] mb-[14px]">recent</h2>
          <ul className="flex flex-col w-full bg-[var(--content-bg)] p-0 m-0 rounded-[14px] border border-[var(--theme-bg-color)] cursor-pointer space-y-0">
            {animeList.map((anime, index) => (
              <li key={anime.id} className={`list-none p-[18px] flex items-center text-[16px] w-full whitespace-nowrap transition-colors hover:bg-[var(--theme-bg-color)] ${index !== animeList.length - 1 ? 'border-b border-[var(--border-color)]' : ''}`}>
                <div className="flex items-center w-[150px] max-sm:w-[120px]">
                  <svg viewBox="0 0 52 52" style={{ border: `1px solid ${anime.borderColor}` }} className="w-[28px] rounded-[6px] mr-[16px] shrink-0">
                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill={anime.bgColor} />
                  </svg>
                  <span>{anime.title}</span>
                </div>
                <div className="ml-auto w-[140px] text-[15px] max-md:hidden flex items-center gap-2">
                  <span className={`w-[6px] h-[6px] rounded-full ${anime.status === 'watched' ? 'bg-[#3bf083]' : 'bg-[#396df0]'}`}></span>
                  {anime.status === 'watched' ? 'watched' : 'Available'}
                </div>
                <div className="flex items-center justify-end w-[187px] ml-auto max-sm:w-auto">
                  <button className={`text-[15px] px-[24px] py-[6px] rounded-[20px] cursor-pointer max-sm:px-[14px] ${anime.status === 'watched' ? 'bg-none text-[var(--button-inactive)] border border-[var(--button-inactive)]' : 'bg-[#3a6df0] text-white'}`}>
                    {anime.buttonLabel}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Anime Section */}
        <div className="mt-[30px] flex flex-col">
          <h2 className="text-[var(--content-title-color)] mb-[14px]">anime in your plan</h2>
          <div className="flex flex-wrap w-[calc(100%+20px)] gap-0">
            {featuredAnime.map((anime) => (
              <div key={anime.id} className="w-[calc(33.3%-20px)] mr-[20px] last:mr-0">
                <AnimeCard
                  title={anime.title}
                  description={anime.description}
                  image={anime.image}
                  borderColor={anime.borderColor}
                  bgColor={anime.bgColor}
                  buttonLabel="watch"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
