'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '8801324115617';
    const message = 'Hello! I would like to know more about Mango Park products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+8801324115617';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:mangopark143@gmail.com';
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-orange-200 via-orange-300 to-orange-100 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-orange-300 rounded-full blur-xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src="/logo.svg"
                    alt="Mango Park Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">MANGO</h3>
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-100 drop-shadow-lg">PARK</h3>
                </div>
              </div>
              
              <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 max-w-md font-medium drop-shadow-sm">
                আমাদের নিজস্ব ১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার। 
                ১০০% প্রাকৃতিক উপাদান ও পারিবারিক রেসিপি দিয়ে তৈরি। 
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/1F2PGdDf1v/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                  </svg>
                </button>

                <button 
                  onClick={handleEmailClick}
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2">🔗</span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-800 hover:text-white transition-colors duration-300 flex items-center group font-medium">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">🏠</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products/mango" className="text-gray-800 hover:text-white transition-colors duration-300 flex items-center group font-medium">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">🥭</span>
                    Mango
                  </Link>
                </li>
                <li>
                  <Link href="/products/mango-pickles" className="text-gray-800 hover:text-white transition-colors duration-300 flex items-center group font-medium">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">🥒</span>
                    Mango Pickles
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-gray-800 hover:text-white transition-colors duration-300 flex items-center group font-medium">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">⭐</span>
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/activities" className="text-gray-800 hover:text-white transition-colors duration-300 flex items-center group font-medium">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">🎯</span>
                    Activities
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center drop-shadow-lg">
                <span className="mr-2">📞</span>
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">📍</span>
                  <div>
                    <p className="text-gray-800 text-sm md:text-base font-medium">
                      Sapahar, Naogaon,<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">📱</span>
                  <div>
                    <button 
                      onClick={handleCallClick}
                      className="text-gray-800 hover:text-white transition-colors duration-300 text-sm md:text-base font-medium"
                    >
                      +88 01324 115617
                    </button>
                    <br />
                    <button 
                      onClick={handleCallClick}
                      className="text-gray-800 hover:text-white transition-colors duration-300 text-sm md:text-base font-medium"
                    >
                      +88 01755 856892
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-red-500">✉️</span>
                  <div>
                    <button 
                      onClick={handleEmailClick}
                      className="text-gray-800 hover:text-white transition-colors duration-300 text-sm md:text-base font-medium"
                    >
                      mangopark143@gmail.com
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-400">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-700 text-sm md:text-base font-medium">
                  © {currentYear} <span className="text-white font-semibold drop-shadow-md">Mango Park</span>. 
                  All rights reserved. 
                </p>
              </div>

              {/* Bottom Links */}
              
            </div>
            
            {/* Quality Badge */}
            <div className="text-center mt-6 pt-4 border-t border-orange-400">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-orange-600 px-4 py-2 rounded-full shadow-lg">
                <span className="text-white font-semibold text-sm md:text-base">১০০% প্রাকৃতিক পণ্যের নিশ্চয়তা</span>
                <span className="text-yellow-300">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;