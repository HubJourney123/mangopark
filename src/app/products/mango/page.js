'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MangoPage = () => {
  // Mango data - add new mangoes here with their image names
  const mangoes = [
    { name: 'হিমসাগর', image: '/mango/himsagor.png' },
    { name: 'আম্রপালি', image: '/mango/amropali.png' },
    { name: 'হাড়িভাঙ্গা', image: '/mango/harivanga.png' },
    { name: 'কাটিমন', image: '/mango/katimon.png' },
    { name: 'গৌড়মতি', image: '/mango/gourmoti.png' },
    { name: 'ব্যানানা ম্যাংগো', image: '/mango/banana-mango.png' }
  ];

  const handleWhatsAppOrder = () => {
    const phoneNumber = '8801324115617';
    const message = 'Hello! I would like to order mangoes from Mango Park. Please let me know about availability and pricing.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>প্রাকৃতিক আম - Mango Park</title>
        <meta name="description" content="১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা বিভিন্ন জাতের প্রাকৃতিক আম। হিমসাগর, আম্রপালি, হাড়িভাঙ্গা সহ ৬ জাতের সেরা মানের আম।" />
      </Head>

      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                <div className="mx-4">
                  <span className="text-5xl">🥭</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                আমাদের আমসমূহ
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                প্রকৃতির সেরা স্বাদের আম, সরাসরি ১১৭ বিঘা বাগান থেকে আপনার কাছে
              </p>
              
              <div className="flex justify-center">
                <div className="bg-white rounded-full px-8 py-4 shadow-lg border border-orange-200">
                  <span className="text-lg font-semibold text-gray-700">১০০% প্রাকৃতিক ও খাঁটি</span>
                  <span className="text-orange-600 ml-2">🌱</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mango Cards Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Mango Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {mangoes.map((mango, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out overflow-hidden cursor-pointer"
                >
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <Image
                      src={mango.image}
                      alt={mango.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                    />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
                      <span className="text-lg md:text-xl">🌟</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-4 md:p-6 z-20">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 text-center leading-tight group-hover:text-orange-700 transition-colors duration-300">
                      {mango.name}
                    </h3>
                    
                    {/* Decorative underline */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mt-2 group-hover:w-12 transition-all duration-500 delay-200"></div>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-300 rounded-2xl md:rounded-3xl transition-all duration-500"></div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
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
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">১০০% জৈব</h3>
                <p className="opacity-90">কোনো রাসায়নিক সার বা কীটনাশক ব্যবহার করা হয় না</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">দ্রুত ডেলিভারি</h3>
                <p className="opacity-90">বাগান থেকে সরাসরি ২-৫ দিনের মধ্যে আপনার ঘরে</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">সেরা মান</h3>
                <p className="opacity-90">অভিজ্ঞতায় উৎপাদিত সর্বোচ্চ মানের আম</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Our Mangoes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                আমাদের আম সম্পর্কে
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    আমাদের নিজস্ব ১১৭ বিঘা আমের বাগানে চাষ হয় দেশি-বিদেশি বিভিন্ন জাতের আম। 
                    প্রতিটি গাছের যত্ন নেওয়া হয় পরিবারের সদস্যের মতো।
                  </p>
                  
                  
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 shadow-lg">
                    <div className="text-center space-y-6">
                      <div>
                        <span className="text-4xl font-bold text-orange-600">৯+</span>
                        <p className="text-gray-700 font-medium">জাতের আম</p>
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-orange-600">১১৭</span>
                        <p className="text-gray-700 font-medium">বিঘা বাগান</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              আজই অর্ডার করুন
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              তাজা, প্রাকৃতিক আমের স্বাদ নিতে আজই অর্ডার করুন। 
              হোয়াটসঅ্যাপে মেসেজ করে জানিয়ে দিন কোন জাতের আম চান।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">📱</span>
                হোয়াটসঅ্যাপে অর্ডার করুন
              </button>
              
              <button 
                onClick={() => window.location.href = 'tel:+8801324115617'}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">📞</span>
                ফোন করুন
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MangoPage;