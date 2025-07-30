'use client';

import React, { useState } from 'react';

const FeaturesCard = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "১০০% ন্যাচারাল",
      description: "নিজস্ব আমের বাগান থেকে আম সরবরাহ করি"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "নিরাপদ পেমেন্ট",
      description: "বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7m-7 0L17 18m0 0a2 2 0 104 0 2 2 0 00-4 0zm-8 0a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
      ),
      title: "দ্রুত ডেলিভারি",
      description: "২-৫ দিনের মধ্যে আপনার পণ্য পৌঁছে যাবে"
    }
  ];

  const handleCardTouch = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="container mx-auto px-10 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            কেন আমাদের বেছে নেবেন?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative text-center transform transition-all duration-500 ease-out pt-4 cursor-pointer
                ${activeCard === feature.id ? 'scale-105' : 'hover:scale-105'}
                md:hover:scale-105 active:scale-95`}
              onClick={() => handleCardTouch(feature.id)}
              onTouchStart={() => handleCardTouch(feature.id)}
            >
              {/* Number Badge */}
              <div className={`absolute top-0 right-3 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-red-500 text-white font-bold text-lg md:text-xl rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 z-20
                ${activeCard === feature.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {feature.id}
              </div>

              {/* Background Card */}
              <div className={`relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl md:rounded-3xl p-4 md:p-10 pt-8 md:pt-12 shadow-lg transition-all duration-500 border border-orange-100 overflow-hidden
                ${activeCard === feature.id ? 'shadow-2xl bg-gradient-to-br from-orange-100 to-yellow-100' : 'hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-100 hover:to-yellow-100'}`}>
                
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 transition-opacity duration-500
                  ${activeCard === feature.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                {/* Icon */}
                <div className="relative z-10 mb-4 md:mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 md:w-24 md:h-24 bg-gradient-to-br from-orange-200 to-yellow-200 text-orange-600 rounded-full mb-3 md:mb-4 shadow-md transition-all duration-500
                    ${activeCard === feature.id ? 'from-orange-300 to-yellow-300 text-orange-700' : 'group-hover:from-orange-300 group-hover:to-yellow-300 group-hover:text-orange-700'}`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 transition-colors duration-300
                    ${activeCard === feature.id ? 'text-orange-700' : 'group-hover:text-orange-700'}`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-gray-600 text-sm md:text-lg leading-relaxed transition-colors duration-300
                    ${activeCard === feature.id ? 'text-gray-700' : 'group-hover:text-gray-700'}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 w-10 md:w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-opacity duration-500
                  ${activeCard === feature.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                
                {/* Floating Dots */}
                <div className={`absolute top-4 md:top-6 left-4 md:left-6 w-2 h-2 bg-orange-300 rounded-full opacity-50 transition-all duration-500
                  ${activeCard === feature.id ? 'animate-ping' : 'group-hover:animate-ping'}`}></div>
                <div className={`absolute bottom-6 md:bottom-8 right-6 md:right-8 w-3 h-3 bg-yellow-300 rounded-full opacity-50 transition-all duration-500
                  ${activeCard === feature.id ? 'animate-pulse' : 'group-hover:animate-pulse'}`}></div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-2xl md:rounded-3xl blur-xl transition-opacity duration-500 -z-10
                ${activeCard === feature.id ? 'opacity-20' : 'opacity-0 group-hover:opacity-20'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-2 text-orange-600 mb-4">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200"></div>
          </div>
          <p className="text-gray-600 text-base md:text-lg font-medium px-4">
            আমাদের নিজস্ব ১১৭ বিঘা আমের বাগানে চাষ হয় দেশি-বিদেশি বিভিন্ন জাতের আম। বাগান থেকে সরাসরি আপনার ঘরে। কোনো মধ্যস্বত্বভোগী নেই, তাই দাম কম অথচ মান সেরা। আচার। 
            ১০০% প্রাকৃতিক উপাদান ও পারিবারিক রেসিপি দিয়ে তৈরি আমাদের আচার
          </p>
        </div>
      </div>

      {/* Custom CSS for additional effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .group:hover .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        /* Touch-specific styles */
        @media (hover: none) and (pointer: coarse) {
          .group {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesCard;