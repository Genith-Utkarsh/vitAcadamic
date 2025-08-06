import React, { useEffect, useRef } from 'react';

const Animation = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'jay Deshmukh',
      handle: '@Deshmukh',
      date: 'April 20, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Vedant polawar',
      handle: '@averywrites',
      date: 'May 10, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Ganesh Rayphale',
      handle: '@jordantalks',
      date: 'June 5, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'karan Thombre',
      handle: '@averywrites',
      date: 'May 10, 2025',
    },
  ];

  // Duplicate cards for infinite scroll
  const doubledCards = [...cardsData, ...cardsData];

  return (
    <div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* First Row */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        <div ref={row1Ref} className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {doubledCards.map((card, index) => (
            <div
              key={`row1-${index}`}
              className="p-4 rounded-lg mx-4 shadow hover:shadow-lg border-2 border-[#0e8168] transition-all duration-200 w-72 shrink-0 bg-white"
            >
              <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <p>{card.name}</p>
                    <svg
                      className="mt-0.5"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                        fill="#2196F3"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
              </div>
              <p className="text-sm pt-4 text-gray-800">
                Radiant made undercutting all of our competitors an absolute breeze.
              </p>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* Second Row (Reverse) */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        <div ref={row2Ref} className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-5 pb-10">
          {doubledCards.map((card, index) => (
            <div
              key={`row2-${index}`}
              className="p-4 rounded-lg mx-4 shadow hover:shadow-lg border-1 border-[#0c8168] transition-all duration-200 w-72 shrink-0 bg-white"
            >
              {/* Same content as above */}
              {/* ... */}
              {/* You can extract this into a separate Card component if needed */}
              <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <p>{card.name}</p>
                  </div>
                  <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
              </div>
              <p className="text-sm pt-4 text-gray-800">
                Radiant made undercutting all of our competitors an absolute breeze.
              </p>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Animation;
