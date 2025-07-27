'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';  // Adjust path as needed
import Footer from '../components/Footer';  // Adjust path as needed
import Head from 'next/head';

const ActivitiesPage = () => {
  return (
    <>
      <Navbar />
      
      <Head>
        <title>আমাদের কার্যক্রম - Mango Park</title>
        <meta name="description" content="ম্যাঙ্গো পার্কের বিভিন্ন কৃষি কার্যক্রম সম্পর্কে জানুন। ১১৭ বিঘা আমের বাগানে আমাদের দৈনন্দিন কাজকর্ম।" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
        
        {/* Hero Section */}
        <section className="pt-24 pb-8 md:pt-32 md:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-orange-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                <div className="mx-4">
                  <span className="text-5xl">🎯</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                আমাদের কার্যক্রম
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              🥭 Mango Park – আপনার বিশ্বস্ত আমের ঠিকানা


              </p>
              <p className="text-xl md:text-xl text-gray-600 leading-relaxed mb-8">
              সাপাহারের নিজস্ব বাগান থেকে প্রিমিয়াম কোয়ালিটির পরিপক্ব ও কেমিকেলমুক্ত আম, যত্নে প্যাক করা হয় প্রতিদিন।
              বিশ্বাসই আমাদের পরিচয়। ১১৭ বিঘা আমের বাগানে আমাদের দৈনন্দিন কাজকর্ম থেকে শুরু করে 
                আম প্রক্রিয়াজাতকরণ পর্যন্ত সব কার্যক্রম
              </p>
              
              
              
            </div>
          </div>
        </section>

        {/* Section 1: Amader Bagan */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                আমাদের বাগান
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                ১১৭ বিঘা আমাদের আমের বাগান। যেখানে প্রতিটি গাছের যত্ন নেওয়া হয় পরিবারের সদস্যের মতো।
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-4"></div>
            </div>

            {/* 2x2 Grid for Bagan Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
                >
                  <div className="relative h-72 md:h-80 overflow-hidden rounded-2xl">
                    <Image
                      src={`/activities/bagan${num}.png`}
                      alt={`আমাদের বাগান ${num}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Aam Prokria ebong Packaging */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                আম প্রক্রিয়া এবং প্যাকেজিং
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                পাকা আম সংগ্রহ থেকে শুরু করে বাছাই, গ্রেডিং এবং প্যাকেজিং পর্যন্ত সম্পূর্ণ প্রক্রিয়া।
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4"></div>
            </div>

            {/* 1x3 Grid for Prokria Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                { num: 1, title: "আম সংগ্রহ", desc: "বাগান থেকে পাকা আম সংগ্রহের প্রক্রিয়া" },
                { num: 2, title: "বাছাই ও গ্রেডিং", desc: "মানভেদে আম বাছাই ও শ্রেণীবিভাগ" },
                { num: 3, title: "প্যাকেজিং", desc: "নিরাপদ ও আকর্ষণীয় প্যাকেজিং" }
              ].map((item) => (
                <div
                  key={item.num}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={`/activities/prokria${item.num}.png`}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl">🥭</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="w-0 h-1 bg-gradient-to-r from-orange-400 to-red-400 mt-4 group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Aam Bishoyok Karjokrom */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                আম বিষয়ক কার্যক্রম
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-4"></div>
            </div>

            {/* 1x3 Grid for Karjokrom Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden rounded-2xl">
                    <Image
                      src={`/activities/karjokrom${num}.png`}
                      alt={`আম বিষয়ক কার্যক্রম ${num}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">১১৭</div>
                <div className="text-lg md:text-xl opacity-90">বিঘা বাগান</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">৫</div>
                <div className="text-lg md:text-xl opacity-90">পদের আচার</div>
              </div>
              
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">৮+</div>
                <div className="text-lg md:text-xl opacity-90">জাতের আম</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                আমাদের সাথে যুক্ত হন
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                আমাদের বাগান পরিদর্শন করতে চান? আমাদের কার্যক্রম সম্পর্কে আরও জানতে 
                আজই যোগাযোগ করুন।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const phoneNumber = '8801324115617';
                    const message = 'Hello! I would like to know more about your activities and visit your farm.';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">📱</span>
                  WhatsApp করুন
                </button>
                
                <button 
                  onClick={() => window.location.href = 'tel:+8801324115617'}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">📞</span>
                  ফোন করুন
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default ActivitiesPage;