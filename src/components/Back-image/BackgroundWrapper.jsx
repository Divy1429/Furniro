import React from 'react'
import shop from "../../assets/Shop/shop.png";
import greater from "../../assets/Shop/greater.png";
import logo from "../../assets/logo.png";
import { useLocation, Link } from 'react-router-dom';

const BackgroundWrapper = () => {
  const location = useLocation();

  // Simple function to get cart count from localStorage
  const getCartCount = () => {
    try {
      const cartItems = localStorage.getItem('cart');
      if (cartItems) {
        const items = JSON.parse(cartItems);
        return items.reduce((total, item) => total + (item.quantity || 0), 0);
      }
    } catch (error) {
      console.warn('Error reading cart from localStorage:', error);
    }
    return 0;
  };

  // Define page configurations
  const getPageConfig = () => {
    const pathname = location.pathname;
    const cartCount = getCartCount();
    
    // Handle different routes
    switch (true) {
      case pathname === '/':
        return {
          title: 'Home',
          breadcrumbs: [{ name: 'Home', path: '/', isActive: true }]
        };
        
      case pathname === '/shop':
        return {
          title: 'Shop',
          breadcrumbs: [
            { name: 'Home', path: '/', isActive: false },
            { name: 'Shop', path: '/shop', isActive: true }
          ]
        };
        
      case pathname === '/compare':
        return {
          title: 'Product Comparison',
          breadcrumbs: [
            { name: 'Home', path: '/', isActive: false },
            { name: 'Compare', path: '/compare', isActive: true }
          ]
        };
        
      case pathname.startsWith('/product/'):
        return {
          title: 'Product Details',
          breadcrumbs: [
            { name: 'Home', path: '/', isActive: false },
            { name: 'Shop', path: '/shop', isActive: false },
            { name: 'Product', path: pathname, isActive: true }
          ]
        };
        
      case pathname === '/cart':
        return {
          title: cartCount > 0 ? `Cart (${cartCount})` : 'Cart',
          breadcrumbs: [
            { name: 'Home', path: '/', isActive: false },
            { name: 'Cart', path: '/cart', isActive: true }
          ]
        };
        
      case pathname === '/checkout':
        return {
          title: 'Checkout',
          breadcrumbs: [
            { name: 'Home', path: '/', isActive: false },
            { name: 'Cart', path: '/cart', isActive: false },
            { name: 'Checkout', path: '/checkout', isActive: true }
          ]
        };
        
      case pathname === '/contact':
        return {
          title: 'Contact',
          breadcrumbs: [
            { name: 'Home', path: '/', isActive: false },
            { name: 'Contact', path: '/contact', isActive: true }
          ]
        };
        
      default:
        return {
          title: 'Blog',
          breadcrumbs: [
            { name: 'Home', path: '/', isActive: false },
            { name: 'Blog', path: pathname, isActive: true }
          ]
        };
    }
  };

  const pageConfig = getPageConfig();

  return (
    <div>
      <div className="relative  max-w-[1440px] max-h-[316px] w-full mx-auto ">
        {/* Background Image */}
        <img
          src={shop}
          className="max-w-[1440px] max-h-[316px] w-full h-full object-cover opacity-[50%] blur-[3px]"
          alt="Page Banner"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-[32px] w-[50px]" />
          
          {/* Dynamic Title */}
          <h1 className="text-[48px] font-bold font-medium max-sm:text-[28px] text-black">
            {pageConfig.title}
          </h1>

          {/* Dynamic Breadcrumb Navigation */}
          <nav className="flex items-center gap-[6px] flex-wrap justify-center max-w-[90%]" aria-label="Breadcrumb">
            {pageConfig.breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.isActive ? (
                  <span className="text-[16px] max-sm:text-[12px] font-light text-black">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      to={crumb.path}
                      className="cursor-pointer text-[16px] max-sm:text-[12px] font-medium text-black hover:text-[#B88E2F] transition-colors duration-200 no-underline"
                    >
                      {crumb.name}
                    </Link>
                    <img
                      src={greater}
                      alt="breadcrumb separator"
                      className="h-[8px] w-[14px] object-contain"
                    />
                  </>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BackgroundWrapper;
