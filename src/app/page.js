// src/app/page.js
'use client'
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

export const metadata = {
  title: "Mango Park - প্রাকৃতিক আম ও আচার | mangoparkbd.com",
  description: "১১৭ বিঘা আমের বাগান থেকে সরাসরি সংগ্রহ করা সেরা মানের আম ও ঐতিহ্যবাহী আচার। ১০০% প্রাকৃতিক উপাদান ও পারিবারিক রেসিপি।",
  keywords: "mangoparkbd, mangoparkbd.com, আম, আচার, প্রাকৃতিক, হিমসাগর, আম্রপালি, বাংলাদেশ, নওগাঁ",
  openGraph: {
    title: "Mango Park - প্রাকৃতিক আম ও আচার",
    description: "সেরা মানের প্রাকৃতিক আম এবং ঘরোয়া রেসিপিতে বানানো আচার।",
    url: "https://mangoparkbd.com",
    type: "website",
    locale: "bn_BD",
    siteName: "Mango Park",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango Park - প্রাকৃতিক আম ও আচার",
    description: "১১৭ বিঘা আমের বাগান থেকে সরাসরি প্রাকৃতিক আম ও ঘরোয়া রেসিপিতে আচার।",
  },
  alternates: {
    canonical: "https://mangoparkbd.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <Carousel />
      <FeaturesCard />
      <MangoCard />
      <PickleCard />
      <OrganicProduct />
      <MangoFestival />
      <Footer />
    </div>
  );
}
