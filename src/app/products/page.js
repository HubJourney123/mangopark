'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MangoCard from '../components/MangoCard';
import PickleCard from '../components/PickleCard';
import OrganicProduct from '../components/OrganicProduct';

const ProductsPage = () => {
  const handleWhatsAppOrder = () => {
    const phoneNumber = '8801324115617';
    const message = 'Hello! I would like to order products from Mango Park. Please let me know about availability and pricing.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>আমাদের পণ্যসমূহ - Mango Park</title>
        <meta name="description" content="ম্যাঙ্গো পার্কের সব ধরনের প্রাকৃতিক পণ্য - আম, আচার এবং জৈব পণ্য। ১১৭ বিঘা বাগান থেকে সরাসরি সংগ্রহ।" />
        <meta name="keywords" content="আম, আচার, প্রাকৃতিক পণ্য, জৈব খাবার, আমসত্ত্ব, মধু, খেজুরের গুড়" />
      </Head>

      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-orange-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                <div className="mx-4">
                  <span className="text-5xl">🛒</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                আমাদের পণ্যসমূহ
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                ১১৭ বিঘা বাগান থেকে সরাসরি সংগ্রহ করা প্রাকৃতিক আম, ঐতিহ্যবাহী আচার এবং জৈব পণ্য
              </p>
              
              
            </div>
          </div>
        </section>

        

        {/* Mango Section */}
        <div id="mangoes">
          <MangoCard />
        </div>

        {/* Pickles Section */}
        <div id="pickles">
          <PickleCard />
        </div>

        {/* Organic Products Section */}
        <div id="organic">
          <OrganicProduct />
        </div>

        {/* Product Statistics */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের পণ্যের পরিসংখ্যান</h2>
              <p className="text-xl opacity-90">গুণমান ও বৈচিত্র্যে এগিয়ে</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">৯</div>
                <div className="text-lg md:text-xl opacity-90">জাতের আম</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">৫</div>
                <div className="text-lg md:text-xl opacity-90">ধরনের আচার</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">৩</div>
                <div className="text-lg md:text-xl opacity-90">অর্গানিক পণ্য</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">১০০%</div>
                <div className="text-lg md:text-xl opacity-90">প্রাকৃতিক</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                মানের নিশ্চয়তা
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">পুরস্কার প্রাপ্ত</h3>
                  <p className="text-gray-600">ম্যাঙ্গো ফেস্টিভাল ২০২৫ এ সম্মাননা প্রাপ্ত</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-100">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">পারিবারিক ব্যবসা</h3>
                  <p className="text-gray-600">পারিবারিক ঐতিহ্য</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              আজই অর্ডার করুন
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              সব ধরনের প্রাকৃতিক পণ্য একসাথে পেতে আজই যোগাযোগ করুন। 
              বিশেষ ছাড় ও অফারের জন্য হোয়াটসঅ্যাপে মেসেজ করুন।
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
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">📞</span>
                ফোন করুন
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Spacing for Mobile Nav */}
        <div className="h-20 md:h-0"></div>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;