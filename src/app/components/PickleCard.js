import React from 'react';
import Image from 'next/image';

const PickleCard = () => {
  // Pickle data - add new pickles here with their image names
  const pickles = [
    { name: 'আমের ঘাটি আচার', image: '/pickle/amer-ghati-achar.png' },
    { name: 'আমের ঝিরি আচার', image: '/pickle/amer-jhiri.png' },
    { name: 'টক মিষ্টি ঝিরি আচার', image: '/pickle/tok-misti-jhiri.png' },
    { name: 'আম পিয়াজি আচার', image: '/pickle/am-piyaji.png' },
    { name: 'টক মিষ্টি আম পিয়াজী আচার', image: '/pickle/tok-mishti-aam-piyaji-achar.png' }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-full"></div>
            <div className="mx-4">
              <span className="text-4xl">🥒</span>
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-400 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            আমাদের আচারসমূহ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ঐতিহ্যবাহী স্বাদের খাঁটি আচার, প্রাকৃতিক উপাদান দিয়ে তৈরি
          </p>
        </div>

        {/* Pickle Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pickles.map((pickle, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out overflow-hidden cursor-pointer"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <Image
                  src={pickle.image}
                  alt={pickle.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
                
                {/* Floating Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
                  <span className="text-lg md:text-xl">🌶️</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-4 md:p-6 z-20">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-800 text-center leading-tight group-hover:text-red-700 transition-colors duration-300 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                  {pickle.name}
                </h3>
                
                {/* Decorative underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mt-2 group-hover:w-12 transition-all duration-500 delay-200"></div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-300 rounded-2xl md:rounded-3xl transition-all duration-500"></div>
              
              {/* Subtle shine effect */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-2 text-red-500">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-medium">
            হোমমেইড কোয়ালিটি ১০০% প্রাকৃতিক
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
        
        @media (max-width: 768px) {
          .group:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </section>
  );
};

export default PickleCard;