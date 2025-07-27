
// src/app/page.js
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




export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar/>
      <Carousel />
      <FeaturesCard/>
      <MangoCard/>
      <PickleCard/>
      <MangoFestival/>
      <FloatingWhatsAppButton/>
      <Footer/>
      
    </div>
  );
}