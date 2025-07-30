import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProductsOpen(false);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '8801324115617'; // WhatsApp number from the business card
    const message = 'Hello! I would like to know more about Mango Park products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+8801324115617';
  };

  return (
    <nav className="bg-white shadow-lg top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Mobile Menu Button (Left) */}
          <div className="md:hidden mobile-menu-container">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-72 bg-white shadow-xl rounded-r-lg border-r border-b border-gray-200 py-2 z-50">
                {/* Products Section */}
                <div className="border-b border-gray-100 pb-2 mb-2">
                  <button
                    onClick={toggleProducts}
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    <span className="font-medium text-base">Products</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        isProductsOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Products Submenu */}
                  {isProductsOpen && (
                    <div className="bg-orange-25 border-l-2 border-orange-200 ml-4">
                      <Link 
                        href="/products/mango" 
                        className="block px-6 py-3 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        🥭 Mango
                      </Link>
                      <Link 
                        href="/products/mango-pickles" 
                        className="block px-6 py-3 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        🥒 Mango Pickles
                      </Link>
                    </div>
                  )}
                </div>

                {/* Other Menu Items */}
                <Link 
                  href="/reviews" 
                  className="block px-4 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  ⭐ Customer Reviews
                </Link>
                <Link 
                  href="/activities" 
                  className="block px-4 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  🎯 Activities
                </Link>
              </div>
            )}
          </div>

          {/* Logo (Center on mobile, Left on desktop) */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-16 md:h-16">
                {/* Mango Park Logo */}
                <Image
                  src="/logo.svg"
                  alt="Mango Park Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl md:text-3xl font-bold text-gray-800">MANGO</span>
                <br className="hidden md:block" />
                <span className="text-xl md:text-2xl font-bold text-orange-600">PARK</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-600 font-medium text-lg transition-colors duration-200 flex items-center space-x-1">
                <span>Products</span>
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Desktop Products Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/products/mango" className="block px-4 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                    🥭 Mango
                  </Link>
                  <Link href="/products/mango-pickles" className="block px-4 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                    🥒 Mango Pickles
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/reviews" className="text-gray-700 hover:text-orange-600 font-medium text-lg transition-colors duration-200">
              Customer Reviews
            </Link>
            <Link href="/activities" className="text-gray-700 hover:text-orange-600 font-medium text-lg transition-colors duration-200">
              Activities
            </Link>
          </div>

          {/* Contact Icons (Right) */}
          <div className="flex items-center space-x-3">
            {/* Phone Button */}
            <button
              onClick={handleCallClick}
              className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-200"
              title="Call us"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay 
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}*/}

      <style jsx>{`
        .bg-orange-25 {
          background-color: rgba(255, 237, 213, 0.5);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;