'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MangoCard = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Mango data - add new mangoes here with their image names
  const mangoes = [
    { name: 'হিমসাগর', image: '/mango/himsagor.png' },
    { name: 'আম্রপালি', image: '/mango/amropali.png' },
    { name: 'হাড়িভাঙ্গা', image: '/mango/harivanga.png' },
    { name: 'কাটিমন', image: '/mango/katimon.png' },
    { name: 'গৌড়মতি', image: '/mango/gourmoti.png' },
    { name: 'নাক ফজলি', image: '/mango/nak-fazli.png' },
    { name: 'ব্যানানা ম্যাংগো', image: '/mango/banana-mango.png' },
    { name: 'বারি-4', image: '/mango/bari-4.png' },
    { name: 'গোপালভোগ', image: '/mango/gopalvog.png' }
  ];

  const handleCardTouch = (cardIndex) => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>
            <div className="mx-4">
              <span className="text-4xl">🥭</span>
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            আমাদের আমসমূহ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            প্রকৃতির সেরা স্বাদের আম, সরাসরি বাগান থেকে আপনার কাছে
          </p>
        </div>

        {/* Mango Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {mangoes.map((mango, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl md:rounded-3xl shadow-lg transition-all duration-500 ease-out overflow-hidden cursor-pointer
                ${activeCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-2xl'}
                md:hover:scale-105 active:scale-95`}
              onClick={() => handleCardTouch(index)}
              onTouchStart={() => handleCardTouch(index)}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 transition-opacity duration-500
                ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 transition-opacity duration-500
                  ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                
                <Image
                  src={mango.image}
                  alt={mango.name}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out
                    ${activeCard === index ? 'scale-110' : 'group-hover:scale-110'}`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                />
                
                {/* Floating Icon */}
                <div className={`absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 delay-100 z-20
                  ${activeCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                  <span className="text-lg md:text-xl">🌟</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-4 md:p-6 z-20">
                <h3 className={`text-base md:text-lg lg:text-xl font-bold text-gray-800 text-center leading-tight transition-colors duration-300
                  ${activeCard === index ? 'text-orange-700' : 'group-hover:text-orange-700'}`}>
                  {mango.name}
                </h3>
                
                {/* Decorative underline */}
                <div className={`h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mt-2 transition-all duration-500 delay-200
                  ${activeCard === index ? 'w-12' : 'w-0 group-hover:w-12'}`}></div>
              </div>

              {/* Hover Overlay Effect */}
              <div className={`absolute inset-0 border-2 rounded-2xl md:rounded-3xl transition-all duration-500
                ${activeCard === index ? 'border-orange-300' : 'border-transparent group-hover:border-orange-300'}`}></div>
              
              {/* Subtle shine effect */}
              <div className={`absolute -top-2 -left-2 w-4 h-4 bg-white/40 rounded-full blur-sm transition-opacity duration-500
                ${activeCard === index ? 'opacity-100 animate-ping' : 'opacity-0 group-hover:opacity-100 group-hover:animate-ping'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-2 text-orange-500">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200"></div>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-medium">
            স্বাদের নিশ্চয়তা ১০০% খাঁটি
          </p>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .floating-icon {
          animation: float 2s ease-in-out infinite;
        }
        
        /* Touch-specific styles */
        @media (hover: none) and (pointer: coarse) {
          .group {
            -webkit-tap-highlight-color: transparent;
          }
        }
        
        @media (max-width: 768px) {
          .group:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </section>
  );
};

export default MangoCard;
