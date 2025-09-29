import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Bar = () => {
  const location = useLocation();

  // Determine current page context
  const getCurrentPageName = () => {
    if (location.pathname === '/') return 'Home';
    if (location.pathname === '/shop') return 'Shop';
    if (location.pathname.startsWith('/product/')) return 'Asgaard sofa';
    return 'Page';
  };

  const isProductPage = location.pathname.startsWith('/product/');

  return (
    <div className=" w-full bg-[#F9F1E7] min-h-[100px] flex items-center justify-center">
      <div className="flex flex-wrap  items-center max-w-[1440px] w-full justify-start px-4 sm:px-8 md:px-12 lg:px-[99px] py-4">
        
        {/* Home Navigation */}
        <div className="flex flex-wrap items-center gap-[14px] mr-[24px] mb-2">
          <Link 
            to="/"
            className={`text-[16px] font-normal text-wrap transition-colors duration-200 hover:text-[#B88E2F] no-underline ${
              location.pathname === '/' ? 'text-[#B88E2F]' : 'text-[#9F9F9F]'
            }`}
          >
            Home
          </Link>
          <div className="flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
            </svg>
          </div>
        </div>
        
        {/* Shop Navigation */}
        <div className="flex flex-wrap items-center gap-[21px] mr-[25px] mb-2">
          <Link 
            to="/shop"
            className={`text-[16px] font-normal text-wrap transition-colors duration-200 hover:text-[#B88E2F] no-underline ${
              location.pathname === '/shop' || isProductPage ? 'text-[#B88E2F]' : 'text-[#9F9F9F]'
            }`}
          >
            Shop
          </Link>
          
          {/* Show arrow only if we're on product page */}
          {isProductPage && (
            <div className="flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
              </svg>
            </div>
          )}
        </div>
        
        {/* Current Page Indicator */}
        <div className="flex flex-wrap items-center gap-[20px] sm:gap-[34px] mb-2">
          <svg width="2" className="hidden sm:block flex-shrink-0" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" x2="1" y2="37" stroke="#9F9F9F" strokeWidth="2"/>
          </svg>
          <span className="text-[16px] font-normal text-[#000000] text-wrap break-words">
            {getCurrentPageName()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Bar
