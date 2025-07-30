'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileBottomNavbar = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Auto-hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Set active tab based on current route
  useEffect(() => {
    if (pathname === '/') {
      setActiveTab('home');
    } else if (pathname.startsWith('/products')) {
      setActiveTab('products');
    } else if (pathname === '/activities') {
      setActiveTab('activities');
    } else if (pathname === '/reviews') {
      setActiveTab('reviews');
    } else {
      setActiveTab('');
    }
  }, [pathname]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '8801324115617';
    const message = 'Hello! I would like to know more about Mango Park products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    // Haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  };

  const navItems = [
    {
      id: 'home',
      name: 'Home',
      nameBn: 'হোম',
      href: '/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      activeIcon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    {
      id: 'products',
      name: 'Products',
      nameBn: 'পণ্য',
      href: '/products',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      activeIcon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
        </svg>
      )
    },
    {
      id: 'activities',
      name: 'Activities',
      nameBn: 'কার্যক্রম',
      href: '/activities',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      activeIcon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 'reviews',
      name: 'Reviews',
      nameBn: 'রিভিউ',
      href: '/reviews',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      activeIcon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Only show on mobile devices */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full' 
      }`}>
        
        {/* Main Navigation Bar */}
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg" >
          <div className="grid grid-cols-5 h-16">
            
            {/* Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 active:scale-95 active:bg-orange-50 ${
                  activeTab === item.id
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                }`}
                onClick={() => handleTabPress(item.id)}
              >
                {/* Icon */}
                <div className={`transition-transform duration-200 ${
                  activeTab === item.id ? 'scale-110' : ''
                }`}>
                  {activeTab === item.id ? item.activeIcon : item.icon}
                </div>
                
                {/* Label */}
                <span className={`text-xs font-medium leading-none ${
                  activeTab === item.id ? 'font-semibold' : ''
                }`}>
                  {item.nameBn}
                </span>
                
                {/* Active Indicator */}
                {activeTab === item.id && (
                  <div className="absolute bottom-0 w-6 h-1 bg-orange-600 rounded-t-full"></div>
                )}
              </Link>
            ))}
            
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="flex flex-col items-center justify-center space-y-1 text-green-600 transition-all duration-200 active:scale-95 active:bg-green-50 hover:bg-green-50 relative"
            >
              {/* WhatsApp Icon with Pulse Effect */}
              <div className="relative">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                
                {/* Pulse Animation */}
                <div className="absolute -inset-2 bg-green-400 rounded-full opacity-20 animate-ping"></div>
              </div>
              
              {/* Label */}
              <span className="text-xs font-semibold leading-none">যোগাযোগ</span>
            </button>
          </div>
        </div>
        
        {/* Safe Area for devices with home indicator */}
        <div className="bg-white/95 backdrop-blur-md h-safe-bottom"></div>
      </div>

      {/* Custom CSS for additional effects */}
      <style jsx>{`
        /* Enhanced positioning */
        .fixed {
          position: fixed !important;
        }
        
        /* Safe area handling for modern devices */
        .h-safe-bottom {
          height: env(safe-area-inset-bottom, 0px);
        }
        
        /* Enhanced touch feedback */
        @media (hover: none) and (pointer: coarse) {
          .active\\:scale-95:active {
            transform: scale(0.95);
          }
          
          .active\\:bg-orange-50:active {
            background-color: rgba(255, 237, 213, 0.5);
          }
          
          .active\\:bg-green-50:active {
            background-color: rgba(240, 253, 244, 0.5);
          }
        }
        
        /* Smooth animations */
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        /* Backdrop blur fallback */
        @supports not (backdrop-filter: blur(12px)) {
          .backdrop-blur-md {
            background-color: rgba(255, 255, 255, 0.95);
          }
        }
        
        /* Ensure navbar stays on top */
        .z-50 {
          z-index: 50 !important;
        }
      `}</style>
    </>
  );
};

export default MobileBottomNavbar;