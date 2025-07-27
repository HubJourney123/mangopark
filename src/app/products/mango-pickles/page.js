'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MangoPicklePage = () => {
  // Pickle data - add new pickles here with their image names
  const pickles = [
    { name: 'আমের ঘাটি আচার', image: '/pickle/amer-ghati-achar.png' },
    { name: 'আমের ঝিরি আচার', image: '/pickle/amer-jhiri.png' },
    { name: 'টক মিষ্টি ঝিরি আচার', image: '/pickle/tok-misti-jhiri.png' },
    { name: 'আম পিয়াজি আচার', image: '/pickle/am-piyaji.png' },
    { name: 'টক মিষ্টি আম পিয়াজী আচার', image: '/pickle/tok-mishti-aam-piyaji-achar.png' }
  ];

  const handleWhatsAppOrder = () => {
    const phoneNumber = '8801324115617';
    const message = 'Hello! I would like to order mango pickles from Mango Park. Please let me know about availability and pricing.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>ঐতিহ্যবাহী আম আচার - Mango Park</title>
        <meta name="description" content="পারিবারিক রেসিপি দিয়ে তৈরি ঐতিহ্যবাহী আম আচার। ১০০% প্রাকৃতিক উপাদান ও খাঁটি মসলা দিয়ে প্রস্তুতকৃত ৫ ধরনের সুস্বাদু আচার।" />
      </Head>

      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                <div className="mx-4">
                  <span className="text-5xl">🥒</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                আমাদের আচারসমূহ
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                ঐতিহ্যবাহী স্বাদের খাঁটি আচার, প্রাকৃতিক উপাদান ও পারিবারিক রেসিপি দিয়ে তৈরি
              </p>
              
              <div className="flex justify-center">
                <div className="bg-white rounded-full px-8 py-4 shadow-lg border border-red-200">
                  <span className="text-lg font-semibold text-gray-700">হোমমেইড কোয়ালিটি ১০০% প্রাকৃতিক</span>
                  <span className="text-red-600 ml-2">🌶️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pickle Cards Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
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
                ঐতিহ্যবাহী পারিবারিক রেসিপি
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-bold mb-2">পারিবারিক রেসিপি</h3>
                <p className="opacity-90">ঐতিহ্যবাহী পারিবারিক রেসিপি</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold mb-2">প্রাকৃতিক উপাদান</h3>
                <p className="opacity-90">শুধুমাত্র খাঁটি মসলা ও প্রাকৃতিক উপাদান ব্যবহার</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏺</span>
                </div>
                <h3 className="text-xl font-bold mb-2">দীর্ঘস্থায়ী</h3>
                <p className="opacity-90">বিশেষ প্রক্রিয়ায় তৈরি, দীর্ঘদিন সংরক্ষণযোগ্য</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Our Pickles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                আমাদের আচার সম্পর্কে
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    আমাদের নিজস্ব বাগানের তাজা আম দিয়ে ঐতিহ্যবাহী পদ্ধতিতে আচার তৈরি করা হয়। 
                    প্রতিটি আচার তৈরিতে ব্যবহার করা হয় খাঁটি মসলা ও প্রাকৃতিক উপাদান।
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    কোনো কৃত্রিম রং, স্বাদ বা সংরক্ষণকারী ব্যবহার করা হয় না। 
                    দাদি-নানির পুরাতন রেসিপি অনুসরণ করে হাতে তৈরি করা হয় প্রতিটি আচার।
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    আমাদের আচারে রয়েছে অনন্য স্বাদ ও সুগন্ধ। টক-ঝাল-মিষ্টির 
                    সুন্দর সমন্বয় যা আপনার খাবারে এনে দেবে নতুন মাত্রা।
                  </p>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 shadow-lg">
                    <div className="text-center space-y-6">
                      <div>
                        <span className="text-4xl font-bold text-red-600">৫</span>
                        <p className="text-gray-700 font-medium">ধরনের আচার</p>
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-red-600">১০০%</span>
                        <p className="text-gray-700 font-medium">প্রাকৃতিক</p>
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-red-600">ঐতিহ্যবাহী</span>
                        <p className="text-gray-700 font-medium">প্রেসিপি</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pickle Types Details */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                আচারের বিশেষত্ব
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <span className="text-4xl">🌶️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">ঝাল আচার</h3>
                <p className="text-gray-600 text-center">তীব্র ঝালের সাথে আমের মিষ্টি স্বাদের অপূর্ব মেলবন্ধন</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <span className="text-4xl">🍯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">মিষ্টি আচার</h3>
                <p className="text-gray-600 text-center">প্রাকৃতিক মিষ্টতার সাথে হালকা টক ও ঝালের স্বাদ</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <span className="text-4xl">🧄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">পিয়াজি আচার</h3>
                <p className="text-gray-600 text-center">আম ও পিয়াজের অনন্য কম্বিনেশন, বিশেষ মসলার সাথে</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              আজই অর্ডার করুন
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              ঐতিহ্যবাহী স্বাদের খাঁটি আচার পেতে আজই অর্ডার করুন। 
              হোয়াটসঅ্যাপে মেসেজ করে জানিয়ে দিন কোন ধরনের আচার চান।
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
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

export default MangoPicklePage;