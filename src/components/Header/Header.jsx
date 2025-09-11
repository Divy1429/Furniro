import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="header relative mx-auto w-full max-w-[1440px] pt-[29px] px-4 sm:px-6 lg:px-[54px] pb-[30px]">
      <div className="h-[41px] w-full max-w-[1286px] flex items-center">
        
       {/* Logo */}
        <Link to="/" className="logo-name w-auto h-auto flex items-center justify-between gap-[5px]">
          <div className="logo h-[24px] w-[38px] sm:h-[26px] sm:w-[41px] md:h-[28px] md:w-[44px] lg:h-[30px] lg:w-[47px] mdl:h-[32px] mdl:w-[50px]  flex items-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="furniro w-auto h-auto mdl:w-full mdl:max-w-[130px] leading-none flex items-center">
            <p className="font-['Montserrat'] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] mdl:text-[34px] font-bold">Furniro</p>
          </div>
        </Link>

        {/* Routes */}
        <div className="route lg:ml-auto xl:ml-[266px] flex items-center">
          <ul className="hidden lg:flex items-center justify-between gap-[40px] xl:gap-[75px] text-[16px]">
            <li>
              <Link 
                to="/" 
                className={`transition hover:underline cursor-pointer ${isActive('/') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/shop" 
                className={`transition hover:underline cursor-pointer ${isActive('/shop') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`transition hover:underline cursor-pointer ${isActive('/about') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`transition hover:underline cursor-pointer ${isActive('/contact') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="route hidden md:flex ml-auto mdl:ml-[145px] 2xl:ml-[158px] items-center">
          <ul className="hidden lg:flex items-center justify-between gap-[30px] mdl:gap-[45px] h-[28px]">
            <li className="h-full max-h-[28px] w-full max-w-[28px]">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[28px] transition-colors duration-200 hover:stroke-[#B88E2F] cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>
            </li>
            <li className="h-full max-h-[28px] w-full max-w-[28px]">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[28px] transition-colors duration-200 hover:stroke-[#B88E2F] cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </li>
            <li className="h-full max-h-[28px] w-full max-w-[28px]">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[28px] transition-colors duration-200 hover:stroke-[#B88E2F] cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </li>
            <li className="h-full max-h-[28px] w-auto max-w-[28px]">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[28px] transition-colors duration-200 hover:stroke-[#B88E2F] cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        {/* Toggle Button (Hamburger / Cancel) */}
        <button
          className="lg:hidden ml-auto mr-[15px] flex flex-col items-center gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Cancel Icon (X)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[90px] left-0 w-full bg-white shadow-lg border-t border-gray-200 rounded-b-2xl flex flex-col items-center gap-4 py-4 lg:hidden z-50 shadow-md">
            <Link 
              to="/" 
              className={`hover:underline ${isActive('/') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`hover:underline ${isActive('/shop') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`hover:underline ${isActive('/about') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:underline ${isActive('/contact') ? 'text-[#B88E2F] font-semibold underline' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* Icons (Mobile) */}
            <div className="flex items-center justify-center max-sm:gap-1 gap-6 mt-4">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:stroke-[#B88E2F] transition-colors duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:stroke-[#B88E2F] transition-colors duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:stroke-[#B88E2F] transition-colors duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:stroke-[#B88E2F] transition-colors duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
