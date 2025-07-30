'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const OrganicProduct = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Organic product data - add new products here with their image names
  const organicProducts = [
    { name: 'আমসত্ত্ব', image: '/organic/amsotto.png' },
    { name: 'প্রাকৃতিক চাকের মধু', image: '/organic/modhu.jpeg' },
    { name: 'খেজুরের গুড়', image: '/organic/gur.jpeg' }
  ];

  const handleCardTouch = (cardIndex) => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
            <div className="mx-4">
              <span className="text-4xl">🌿</span>
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            অন্যান্য পণ্যসমূহ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ১০০% প্রাকৃতিক ও জৈব উপাদান দিয়ে তৈরি স্বাস্থ্যকর পণ্য
          </p>
        </div>

        {/* Organic Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {organicProducts.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl md:rounded-3xl shadow-lg transition-all duration-500 ease-out overflow-hidden cursor-pointer
                ${activeCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-2xl'}
                md:hover:scale-105 active:scale-95`}
              onClick={() => handleCardTouch(index)}
              onTouchStart={() => handleCardTouch(index)}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-orange-100 transition-opacity duration-500
                ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 transition-opacity duration-500
                  ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out
                    ${activeCard === index ? 'scale-110' : 'group-hover:scale-110'}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Floating Icon */}
                <div className={`absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 delay-100 z-20
                  ${activeCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                  <span className="text-lg md:text-xl">
                    {index === 0 ? '🥭' : index === 1 ? '🍯' : '🍯'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-4 md:p-6 z-20">
                <h3 className={`text-base md:text-lg lg:text-xl font-bold text-gray-800 text-center leading-tight transition-colors duration-300 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center
                  ${activeCard === index ? 'text-green-700' : 'group-hover:text-green-700'}`}>
                  {product.name}
                </h3>
                
                {/* Decorative underline */}
                <div className={`h-0.5 bg-gradient-to-r from-green-400 to-yellow-500 mx-auto mt-2 transition-all duration-500 delay-200
                  ${activeCard === index ? 'w-12' : 'w-0 group-hover:w-12'}`}></div>
              </div>

              {/* Hover Overlay Effect */}
              <div className={`absolute inset-0 border-2 rounded-2xl md:rounded-3xl transition-all duration-500
                ${activeCard === index ? 'border-green-300' : 'border-transparent group-hover:border-green-300'}`}></div>
              
              {/* Subtle shine effect */}
              <div className={`absolute -top-2 -left-2 w-4 h-4 bg-white/40 rounded-full blur-sm transition-opacity duration-500
                ${activeCard === index ? 'opacity-100 animate-ping' : 'opacity-0 group-hover:opacity-100 group-hover:animate-ping'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-2 text-green-500">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-medium">
            প্রকৃতির বিশুদ্ধতা ১০০% নিশ্চিত
          </p>
        </div>

        {/* Product Features Section */}
        <div className="mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">১০০% জৈব</h3>
                <p className="opacity-90">কোনো কৃত্রিম সংরক্ষণকারী নেই</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">ঘরোয়া পদ্ধতি</h3>
                <p className="opacity-90">ঐতিহ্যবাহী ও স্বাস্থ্যকর প্রক্রিয়ায় তৈরি</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">পুষ্টিগুণ সমৃদ্ধ</h3>
                <p className="opacity-90">প্রাকৃতিক পুষ্টি উপাদান সংরক্ষিত</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="text-center mb-4">
                <span className="text-4xl">🥭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">আমসত্ত্ব</h3>
              <p className="text-gray-600 text-center">খাঁটি আম থেকে তৈরি পুষ্টিকর ও সুস্বাদু আমসত্ত্ব</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-100">
              <div className="text-center mb-4">
                <span className="text-4xl">🍯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">প্রাকৃতিক মধু</h3>
              <p className="text-gray-600 text-center">চাকের মধু - সম্পূর্ণ প্রাকৃতিক ও অপরিশোধিত</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
              <div className="text-center mb-4">
                <span className="text-4xl">🍯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">খেজুরের গুড়</h3>
              <p className="text-gray-600 text-center">খাঁটি খেজুরের রস থেকে তৈরি প্রাকৃতিক মিষ্টি</p>
            </div>
          </div>
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

export default OrganicProduct;