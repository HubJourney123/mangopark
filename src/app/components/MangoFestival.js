'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MangoFestival = () => {
  const [activeImage, setActiveImage] = useState(0);

  const festivalImages = [
    { id: 1, src: '/activities/festival1.png', alt: 'ম্যাংগো ফেস্টিভাল ২০২৫ - আমাদের আমের স্টল', title: 'আমাদের আমের স্টল', description: 'বিভিন্ন জাতের আম নিয়ে সাজানো আমাদের স্টল' },
    { id: 2, src: '/activities/festival2.png', alt: 'জেলা প্রশাসক মহোদয়ের স্টল পরিদর্শন', title: 'জেলা প্রশাসকের পরিদর্শন', description: 'মাননীয় জেলা প্রশাসক আমাদের স্টল পরিদর্শন করছেন' },
    { id: 3, src: '/activities/festival3.png', alt: 'ম্যাংগো পার্ক সম্মাননা ক্রেস্ট প্রদান', title: 'সম্মাননা ক্রেস্ট প্রাপ্তি', description: 'গর্বের সাথে সম্মাননা ক্রেস্ট গ্রহণের মুহূর্ত' },
    { id: 4, src: '/activities/festival4.jpeg', alt: 'ম্যাংগো পার্ক সম্মাননা ক্রেস্ট প্রদান', title: 'স্টলে আনন্দ উদযাপন ', description: 'দলের সাথে আনন্দ উৎসব' }

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

          {/* Right Side - Image Grid */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl">
              
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {festivalImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-48 md:h-48 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Badge */}
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {index === 0 ? '🥭 স্টল' : index === 1 ? '👨‍💼 পরিদর্শন' : index === 2 ? '🏆 ক্রেস্ট' : '🎉 উদযাপন'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 md:p-4">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1 group-hover:text-orange-600 transition-colors duration-300">
                        {image.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Grid Title */}
              <div className="text-center mt-4">
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  ম্যাঙ্গো ফেস্টিভাল ২০২৫ এর স্মৃতিচিহ্ন
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Section */}
        <div className="mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-6 md:p-8 text-white text-center shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-3xl md:text-4xl">🥭</span>
                <span className="text-xl md:text-2xl font-bold">Mango Park</span>
              </div>
              
              <div className="hidden md:block w-1 h-12 bg-white/30 rounded-full"></div>
              
              <div className="text-center">
                <p className="text-lg md:text-xl font-semibold">ম্যাংগো ফেস্টিভাল ২০২৫</p>
                <p className="text-base md:text-lg opacity-90">সম্মাননা প্রাপ্ত প্রতিষ্ঠান</p>
              </div>
              
              <div className="hidden md:block w-1 h-12 bg-white/30 rounded-full"></div>
              
              <div className="flex items-center space-x-2">
                <span className="text-3xl md:text-4xl">🏆</span>
                <span className="text-xl md:text-2xl font-bold">২০২৫</span>
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