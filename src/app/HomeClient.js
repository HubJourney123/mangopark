'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import MangoCard from './components/MangoCard';
import PickleCard from './components/PickleCard';
import FeaturesCard from './components/FeaturesCard';
import Footer from './components/Footer';
import MangoFestival from './components/MangoFestival';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import OrganicProduct from './components/OrganicProduct';

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <Carousel />

      {/* SEO h1 and intro paragraph */}
      <section className="px-4 py-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Mango Park - প্রাকৃতিক হিমসাগর ও আম্রপালি আম, আচার এবং জৈব পণ্য | নওগাঁ, বাংলাদেশ | mangoparkbd.com
        </h1>
        <p className="text-lg text-gray-700">
          ১১৭ বিঘা বাগান থেকে সরাসরি সংগৃহীত হিমসাগর, আম্রপালি আম, ঐতিহ্যবাহী আচার ও প্রাকৃতিক খাদ্যপণ্য। সারা বাংলাদেশে দ্রুত ডেলিভারি। ১০০% প্রাকৃতিক উপাদানে প্রস্তুত।
        </p>
      </section>

      <FeaturesCard />
      <MangoCard />
      <PickleCard />
      <OrganicProduct />
      <MangoFestival />
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
