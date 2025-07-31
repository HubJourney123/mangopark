'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReviewsPage = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      image: '/reviews/wa1.jpeg',
      alt: 'গ্রাহকের হোয়াটসঅ্যাপ পর্যালোচনা ১',
      rating: 5
    },
    {
      id: 2,
      image: '/reviews/wa2.jpeg',
      alt: 'গ্রাহকের হোয়াটসঅ্যাপ পর্যালোচনা ২',
      rating: 5
    },
    {
      id: 3,
      image: '/reviews/wa3.jpeg',
      alt: 'গ্রাহকের হোয়াটসঅ্যাপ পর্যালোচনা ৩',
      rating: 5
    },
    {
      id: 4,
      image: '/reviews/wa4.jpeg',
      alt: 'গ্রাহকের হোয়াটসঅ্যাপ পর্যালোচনা ৪',
      rating: 5
    },
    {
      id: 5,
      image: '/reviews/wa5.jpeg',
      alt: 'গ্রাহকের হোয়াটসঅ্যাপ পর্যালোচনা ৫',
      rating: 5
    }
  ];

  const openReview = (review) => {
    setSelectedReview(review);
  };

  const closeReview = () => {
    setSelectedReview(null);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '8801324115617';
    const message = 'Hello! I would like to share my experience with Mango Park products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>Customer Reviews - Mango Park</title>
        <meta name="description" content="Positive reviews from our valuable customers about Mango Park's natural mangoes and pickles." />
      </Head>
      <Navbar/>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-orange-600/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                <div className="mx-4">
                  <span className="text-5xl">⭐</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Customer Reviews
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Positive reviews from our valuable customers. 
                Their words are our greatest testament.
              </p>
              
              {/* Customer Satisfaction Summary */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-orange-200 inline-block">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-3xl">😊</span>
                  <span className="text-3xl">👍</span>
                  <span className="text-3xl">❤️</span>
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  Satisfied Customers
                </p>
                <p className="text-gray-600">
                  100+ Happy Reviews
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                WhatsApp Reviews
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Positive reviews from our valuable customers shared via WhatsApp
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-4"></div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-green-100"
                  onClick={() => openReview(review)}
                >
                  {/* WhatsApp Header */}
                  <div className="flex items-center space-x-3 mb-4 p-3 bg-green-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Customer Review</p>
                      <p className="text-sm text-gray-500">From WhatsApp</p>
                    </div>
                    <div className="flex ml-auto">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="text-sm text-gray-500 ml-1">Positive</span>
                    </div>
                  </div>

                  {/* Review Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-4">
                    <Image
                      src={review.image}
                      alt={review.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* View Full Button */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        📱 সম্পূর্ণ দেখুন
                      </button>
                    </div>
                  </div>

                  {/* Review Number */}
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Review #{review.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Share Your Experience
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Have you tried our products? Share your experience and help 
              others make the right choice for quality natural mangoes and pickles.
            </p>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="mr-2">📱</span>
              Share Review on WhatsApp
            </button>
          </div>
        </section>

        {/* Why Reviews Matter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Authentic Feedback</h3>
                <p className="text-gray-600">Our customers share their genuine experiences with our products</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Trustworthy</h3>
                <p className="text-gray-600">Every review is proof of our commitment to quality</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">We continuously improve our service based on feedback</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for Full Review View */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full max-h-[90vh]">
            <button
              onClick={closeReview}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            >
              ✕
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedReview.image}
                  alt={selectedReview.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-6 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  Customer Review #{selectedReview.id}
                </p>
                <div className="flex justify-center mt-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-600 ml-2">Positive Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        <Footer/>
    </>
  );
};

export default ReviewsPage;
