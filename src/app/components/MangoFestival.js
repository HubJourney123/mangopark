'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MangoFestival = () => {
  const [activeImage, setActiveImage] = useState(0);

  const festivalImages = [
    { id: 1, src: '/activities/festival1.png', alt: 'ম্যাংগো ফেস্টিভাল ২০২৫ - আমাদের আমের স্টল', title: 'আমাদের আমের স্টল', description: 'বিভিন্ন জাতের আম নিয়ে সাজানো আমাদের স্টল' },
    { id: 2, src: '/activities/festival2.png', alt: 'জেলা প্রশাসক মহোদয়ের স্টল পরিদর্শন', title: 'জেলা প্রশাসকের পরিদর্শন', description: 'মাননীয় জেলা প্রশাসক আমাদের স্টল পরিদর্শন করছেন' },
    { id: 3, src: '/activities/festival3.png', alt: 'ম্যাংগো পার্ক সম্মাননা ক্রেস্ট প্রদান', title: 'সম্মাননা ক্রেস্ট প্রাপ্তি', description: 'গর্বের সাথে সম্মাননা ক্রেস্ট গ্রহণের মুহূর্ত' }
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % festivalImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + festivalImages.length) % festivalImages.length);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-400 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
            <div className="mx-4">
              <span className="text-5xl animate-bounce">🏆</span>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            সম্মান আমাদের প্রেরণা!
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 md:p-8 border border-orange-200 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 font-semibold mb-2">
                ম্যাংগো ফেস্টিভাল ২০২৫
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-4"></div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                <span className="font-bold text-orange-700">Mango Park</span> কে সম্মাননা (ক্রেস্ট) প্রদান করা হয়েছে
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-orange-100">
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  এটি আমাদের জন্য <span className="font-bold text-yellow-600">গর্বের</span>, 
                  <span className="font-bold text-orange-600"> আনন্দের</span> এবং 
                  <span className="font-bold text-red-600"> ভালোবাসার</span> একটি মুহূর্ত।
                </p>
                
                <div className="border-l-4 border-orange-400 pl-4 md:pl-6 bg-orange-50 py-4 rounded-r-2xl">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
                    "এই স্বীকৃতি শুধু একটি প্রতিষ্ঠানের নয় — এটা সেই প্রতিটি মানুষকে উৎসর্গ করা, 
                    যারা আমাদের ওপর বিশ্বাস রেখে পাশে থেকেছেন।"
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    আমরা <span className="text-green-600">কৃতজ্ঞ</span>, 
                    আমরা <span className="text-yellow-600">গর্বিত</span> — 
                    এবং আমরা আরও অনেক দূর যেতে <span className="text-orange-600">প্রতিজ্ঞাবদ্ধ</span>।
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 md:p-6">
                    <p className="text-lg md:text-xl font-bold">
                      Mango Park — স্বাদে, ঘ্রাণে, সম্পর্কেও সেরা হতেই চাই!
                    </p>
                    <div className="flex justify-center mt-3">
                      <span className="text-2xl">🥭❤️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl">
              
              {/* Main Image Display */}
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl mb-4">
                <Image
                  src={festivalImages[activeImage].src}
                  alt={festivalImages[activeImage].alt}
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white text-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white text-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Title and Description */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {festivalImages[activeImage].title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    {festivalImages[activeImage].description}
                  </p>
                </div>

                {/* Award Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                  {activeImage === 0 ? '🥭 আমের স্টল' : activeImage === 1 ? '👨‍💼 DC পরিদর্শন' : '🏆 ক্রেস্ট প্রাপ্তি'}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center space-x-2 md:space-x-4">
                {festivalImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-16 h-12 md:w-20 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === index 
                        ? 'ring-4 ring-orange-500 scale-110' 
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>

              {/* Image Counter & Current Image Info */}
              <div className="text-center mt-4 space-y-2">
                <span className="text-sm md:text-base text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {activeImage + 1} / {festivalImages.length}
                </span>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  {festivalImages[activeImage].title}
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 opacity-20 animate-bounce delay-500">
        <span className="text-4xl md:text-6xl">🎉</span>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 animate-bounce delay-1000">
        <span className="text-3xl md:text-5xl">✨</span>
      </div>
    </section>
  );
};

export default MangoFestival;