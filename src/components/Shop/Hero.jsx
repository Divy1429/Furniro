import React, { useState } from "react";
import left from "../../assets/Shop/left.png"
import brake from "../../assets/Shop/brake.png"

const Hero = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const FilterPanel = ({ isMobile = false }) => (
    <div className={`absolute ${isMobile ? 'top-full left-0 right-0' : 'top-full left-0'} mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-50 ${isMobile ? 'w-full' : 'w-80'}`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button 
            onClick={toggleFilter}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Price Range */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="flex gap-2">
            <input type="number" placeholder="Min" className="w-full px-2 py-1 border border-gray-300 rounded" />
            <input type="number" placeholder="Max" className="w-full px-2 py-1 border border-gray-300 rounded" />
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Categories</h4>
          <div className="space-y-2">
            {['Chairs', 'Tables', 'Sofas', 'Cabinets', 'Lighting'].map((category) => (
              <label key={category} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Colors */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Colors</h4>
          <div className="flex gap-2 flex-wrap">
            {['#8B4513', '#D2B48C', '#000000', '#FFFFFF', '#808080'].map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-500"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        
        {/* Material */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Material</h4>
          <div className="space-y-2">
            {['Wood', 'Metal', 'Fabric', 'Leather', 'Plastic'].map((material) => (
              <label key={material} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{material}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Apply/Clear Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#A67B2A]">
            Apply Filters
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto">
      
      {/* MDL+ Layout (1370px+) */}
      <div className="hidden mdl:flex w-screen bg-[#F9F1E7] h-[100px] items-center gap-[348px] justify-center mx-auto">
        <div className="flex items-center h-full relative">
          <div className="">
            <ul className="flex gap-[24px] mr-[30px]">
              <li className="flex gap-[12px] mx-auto relative">
                <button 
                  onClick={toggleFilter}
                  className="flex gap-[12px] cursor-pointer hover:text-[#B88E2F] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                  <span>Filter</span>
                </button>
                {isFilterOpen && <FilterPanel />}
              </li>
              <li>
                <button className="cursor-pointer hover:text-[#B88E2F] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="s">
                    <path d="M13.6667 17.1666C12.7385 17.1666 11.8482 16.7979 11.1918 16.1415C10.5355 15.4851 10.1667 14.5949 10.1667 13.6666C10.1667 12.7384 10.5355 11.8482 11.1918 11.1918C11.8482 10.5354 12.7385 10.1666 13.6667 10.1666C14.595 10.1666 15.4852 10.5354 16.1416 11.1918C16.798 11.8482 17.1667 12.7384 17.1667 13.6666C17.1667 14.5949 16.798 15.4851 16.1416 16.1415C15.4852 16.7979 14.595 17.1666 13.6667 17.1666ZM4.33337 17.1666C3.40512 17.1666 2.51488 16.7979 1.8585 16.1415C1.20212 15.4851 0.833374 14.5949 0.833374 13.6666C0.833374 12.7384 1.20212 11.8482 1.8585 11.1918C2.51488 10.5354 3.40512 10.1666 4.33337 10.1666C5.26163 10.1666 6.15187 10.5354 6.80825 11.1918C7.46463 11.8482 7.83337 12.7384 7.83337 13.6666C7.83337 14.5949 7.46463 15.4851 6.80825 16.1415C6.15187 16.7979 5.26163 17.1666 4.33337 17.1666ZM13.6667 7.83331C12.7385 7.83331 11.8482 7.46456 11.1918 6.80819C10.5355 6.15181 10.1667 5.26157 10.1667 4.33331C10.1667 3.40506 10.5355 2.51482 11.1918 1.85844C11.8482 1.20206 12.7385 0.833313 13.6667 0.833313C14.595 0.833313 15.4852 1.20206 16.1416 1.85844C16.798 2.51482 17.1667 3.40506 17.1667 4.33331C17.1667 5.26157 16.798 6.15181 16.1416 6.80819C15.4852 7.46456 14.595 7.83331 13.6667 7.83331ZM4.33337 7.83331C3.40512 7.83331 2.51488 7.46456 1.8585 6.80819C1.20212 6.15181 0.833374 5.26157 0.833374 4.33331C0.833374 3.40506 1.20212 2.51482 1.8585 1.85844C2.51488 1.20206 3.40512 0.833313 4.33337 0.833313C5.26163 0.833313 6.15187 1.20206 6.80825 1.85844C7.46463 2.51482 7.83337 3.40506 7.83337 4.33331C7.83337 5.26157 7.46463 6.15181 6.80825 6.80819C6.15187 7.46456 5.26163 7.83331 4.33337 7.83331Z" fill="black"/>
                  </svg>
                </button>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black"/>
                </svg>
              </li>
            </ul>
          </div>
          <div className="">
            <img src={brake} alt="" className="max-h-[37px] h-full w-[2px] border-[#9F9F9F]" />
          </div>
          <div className="ml-[34px]">
            <span className="text-[16px] font-normal">Showing 1-16 of 32 results</span>
          </div>   
        </div>
        <div className="flex gap-[29px]">
          <div className="flex items-center gap-[17px]">
            <span className="text-[20px] font-normal">Show</span>
            <input type="text" placeholder="16" className="h-[55px] w-full max-w-[55px] bg-white text-[20px] text-[#9F9F9F] text-center font-normal" />
          </div>
          <div className="flex items-center gap-[17px]">
            <span className="text-[20px] font-normal">Sort by</span>
            <select className="h-[55px] w-full max-w-[188px] bg-white text-[20px] text-[#9F9F9F] pl-[30px] font-normal border-none outline-none">
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Responsive Layout for screens smaller than MDL */}
      <div className="mdl:hidden w-full bg-[#F9F1E7] min-h-[100px] py-4 relative">
        
        {/* Mobile Layout (< 640px) */}
        <div className="sm:hidden px-4 relative">
          <div className="flex flex-col gap-4">
            
            {/* Filter Controls - Mobile */}
            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={toggleFilter}
                className="flex gap-2 items-center cursor-pointer hover:text-[#B88E2F] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <span className="text-sm">Filter</span>
              </button>
              
              <button className="cursor-pointer hover:text-[#B88E2F] transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="s">
                  <path d="M13.6667 17.1666C12.7385 17.1666 11.8482 16.7979 11.1918 16.1415C10.5355 15.4851 10.1667 14.5949 10.1667 13.6666C10.1667 12.7384 10.5355 11.8482 11.1918 11.1918C11.8482 10.5354 12.7385 10.1666 13.6667 10.1666C14.595 10.1666 15.4852 10.5354 16.1416 11.1918C16.798 11.8482 17.1667 12.7384 17.1667 13.6666C17.1667 14.5949 16.798 15.4851 16.1416 16.1415C15.4852 16.7979 14.595 17.1666 13.6667 17.1666ZM4.33337 17.1666C3.40512 17.1666 2.51488 16.7979 1.8585 16.1415C1.20212 15.4851 0.833374 14.5949 0.833374 13.6666C0.833374 12.7384 1.20212 11.8482 1.8585 11.1918C2.51488 10.5354 3.40512 10.1666 4.33337 10.1666C5.26163 10.1666 6.15187 10.5354 6.80825 11.1918C7.46463 11.8482 7.83337 12.7384 7.83337 13.6666C7.83337 14.5949 7.46463 15.4851 6.80825 16.1415C6.15187 16.7979 5.26163 17.1666 4.33337 17.1666ZM13.6667 7.83331C12.7385 7.83331 11.8482 7.46456 11.1918 6.80819C10.5355 6.15181 10.1667 5.26157 10.1667 4.33331C10.1667 3.40506 10.5355 2.51482 11.1918 1.85844C11.8482 1.20206 12.7385 0.833313 13.6667 0.833313C14.595 0.833313 15.4852 1.20206 16.1416 1.85844C16.798 2.51482 17.1667 3.40506 17.1667 4.33331C17.1667 5.26157 16.798 6.15181 16.1416 6.80819C15.4852 7.46456 14.595 7.83331 13.6667 7.83331ZM4.33337 7.83331C3.40512 7.83331 2.51488 7.46456 1.8585 6.80819C1.20212 6.15181 0.833374 5.26157 0.833374 4.33331C0.833374 3.40506 1.20212 2.51482 1.8585 1.85844C2.51488 1.20206 3.40512 0.833313 4.33337 0.833313C5.26163 0.833313 6.15187 1.20206 6.80825 1.85844C7.46463 2.51482 7.83337 3.40506 7.83337 4.33331C7.83337 5.26157 7.46463 6.15181 6.80825 6.80819C6.15187 7.46456 5.26163 7.83331 4.33337 7.83331Z" fill="black"/>
                </svg>
              </button>
              
              <img src={left} alt="" className="h-[20px] w-[20px]" />
            </div>

            {/* Results Text - Mobile */}
            <div className="text-center">
              <span className="text-sm font-normal">Showing 1-16 of 32 results</span>
            </div>

            {/* Show/Sort Controls - Mobile Centered */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-base font-normal">Show</span>
                <input type="text" placeholder="16" className="h-[45px] w-[50px] bg-white text-base text-[#9F9F9F] text-center font-normal rounded" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base font-normal">Sort by</span>
                <select className="h-[45px] w-[140px] bg-white text-base text-[#9F9F9F] pl-3 font-normal rounded border-none outline-none">
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Mobile Filter Panel */}
          {isFilterOpen && <FilterPanel isMobile={true} />}
        </div>

        {/* Tablet Layout (640px - MDL) */}
        <div className="hidden sm:block lg:hidden px-6 relative">
          <div className="flex flex-col gap-4">
            
            {/* Top Row - Filter Controls */}
            <div className="flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <button 
                  onClick={toggleFilter}
                  className="flex gap-3 items-center cursor-pointer hover:text-[#B88E2F] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                  <span>Filter</span>
                </button>
                
                <button className="cursor-pointer hover:text-[#B88E2F] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="s">
                    <path d="M13.6667 17.1666C12.7385 17.1666 11.8482 16.7979 11.1918 16.1415C10.5355 15.4851 10.1667 14.5949 10.1667 13.6666C10.1667 12.7384 10.5355 11.8482 11.1918 11.1918C11.8482 10.5354 12.7385 10.1666 13.6667 10.1666C14.595 10.1666 15.4852 10.5354 16.1416 11.1918C16.798 11.8482 17.1667 12.7384 17.1667 13.6666C17.1667 14.5949 16.798 15.4851 16.1416 16.1415C15.4852 16.7979 14.595 17.1666 13.6667 17.1666ZM4.33337 17.1666C3.40512 17.1666 2.51488 16.7979 1.8585 16.1415C1.20212 15.4851 0.833374 14.5949 0.833374 13.6666C0.833374 12.7384 1.20212 11.8482 1.8585 11.1918C2.51488 10.5354 3.40512 10.1666 4.33337 10.1666C5.26163 10.1666 6.15187 10.5354 6.80825 11.1918C7.46463 11.8482 7.83337 12.7384 7.83337 13.6666C7.83337 14.5949 7.46463 15.4851 6.80825 16.1415C6.15187 16.7979 5.26163 17.1666 4.33337 17.1666ZM13.6667 7.83331C12.7385 7.83331 11.8482 7.46456 11.1918 6.80819C10.5355 6.15181 10.1667 5.26157 10.1667 4.33331C10.1667 3.40506 10.5355 2.51482 11.1918 1.85844C11.8482 1.20206 12.7385 0.833313 13.6667 0.833313C14.595 0.833313 15.4852 1.20206 16.1416 1.85844C16.798 2.51482 17.1667 3.40506 17.1667 4.33331C17.1667 5.26157 16.798 6.15181 16.1416 6.80819C15.4852 7.46456 14.595 7.83331 13.6667 7.83331ZM4.33337 7.83331C3.40512 7.83331 2.51488 7.46456 1.8585 6.80819C1.20212 6.15181 0.833374 5.26157 0.833374 4.33331C0.833374 3.40506 1.20212 2.51482 1.8585 1.85844C2.51488 1.20206 3.40512 0.833313 4.33337 0.833313C5.26163 0.833313 6.15187 1.20206 6.80825 1.85844C7.46463 2.51482 7.83337 3.40506 7.83337 4.33331C7.83337 5.26157 7.46463 6.15181 6.80825 6.80819C6.15187 7.46456 5.26163 7.83331 4.33337 7.83331Z" fill="black"/>
                  </svg>
                </button>
                
                <img src={left} alt="" className="h-[22px] w-[22px]" />
                
                <div className="w-[1px] h-[30px] bg-[#9F9F9F] mx-4"></div>
                
                <span className="text-sm font-normal">Showing 1-16 of 32 results</span>
              </div>
            </div>

            {/* Bottom Row - Show/Sort Controls Centered */}
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-3">
                <span className="text-base font-normal">Show</span>
                <input type="text" placeholder="16" className="h-[50px] w-[50px] bg-white text-base text-[#9F9F9F] text-center font-normal" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base font-normal">Sort by</span>
                <select className="h-[50px] w-[160px] bg-white text-base text-[#9F9F9F] pl-4 font-normal border-none outline-none">
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Tablet Filter Panel */}
          {isFilterOpen && <FilterPanel />}
        </div>

        {/* Large Tablet/Desktop Layout (1024px - MDL) */}
        <div className="hidden lg:flex mdl:hidden items-center justify-between px-8 h-[100px] relative">
          
          {/* Left Side - Filter Controls */}
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleFilter}
              className="flex gap-3 items-center cursor-pointer hover:text-[#B88E2F] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
              <span>Filter</span>
            </button>
            
            <button className="cursor-pointer hover:text-[#B88E2F] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="s">
                <path d="M13.6667 17.1666C12.7385 17.1666 11.8482 16.7979 11.1918 16.1415C10.5355 15.4851 10.1667 14.5949 10.1667 13.6666C10.1667 12.7384 10.5355 11.8482 11.1918 11.1918C11.8482 10.5354 12.7385 10.1666 13.6667 10.1666C14.595 10.1666 15.4852 10.5354 16.1416 11.1918C16.798 11.8482 17.1667 12.7384 17.1667 13.6666C17.1667 14.5949 16.798 15.4851 16.1416 16.1415C15.4852 16.7979 14.595 17.1666 13.6667 17.1666ZM4.33337 17.1666C3.40512 17.1666 2.51488 16.7979 1.8585 16.1415C1.20212 15.4851 0.833374 14.5949 0.833374 13.6666C0.833374 12.7384 1.20212 11.8482 1.8585 11.1918C2.51488 10.5354 3.40512 10.1666 4.33337 10.1666C5.26163 10.1666 6.15187 10.5354 6.80825 11.1918C7.46463 11.8482 7.83337 12.7384 7.83337 13.6666C7.83337 14.5949 7.46463 15.4851 6.80825 16.1415C6.15187 16.7979 5.26163 17.1666 4.33337 17.1666ZM13.6667 7.83331C12.7385 7.83331 11.8482 7.46456 11.1918 6.80819C10.5355 6.15181 10.1667 5.26157 10.1667 4.33331C10.1667 3.40506 10.5355 2.51482 11.1918 1.85844C11.8482 1.20206 12.7385 0.833313 13.6667 0.833313C14.595 0.833313 15.4852 1.20206 16.1416 1.85844C16.798 2.51482 17.1667 3.40506 17.1667 4.33331C17.1667 5.26157 16.798 6.15181 16.1416 6.80819C15.4852 7.46456 14.595 7.83331 13.6667 7.83331ZM4.33337 7.83331C3.40512 7.83331 2.51488 7.46456 1.8585 6.80819C1.20212 6.15181 0.833374 5.26157 0.833374 4.33331C0.833374 3.40506 1.20212 2.51482 1.8585 1.85844C2.51488 1.20206 3.40512 0.833313 4.33337 0.833313C5.26163 0.833313 6.15187 1.20206 6.80825 1.85844C7.46463 2.51482 7.83337 3.40506 7.83337 4.33331C7.83337 5.26157 7.46463 6.15181 6.80825 6.80819C6.15187 7.46456 5.26163 7.83331 4.33337 7.83331Z" fill="black"/>
              </svg>
            </button>
            
            <img src={left} alt="" className="h-[24px] w-[24px]" />
            
            <div className="w-[1px] h-[35px] bg-[#9F9F9F] mx-4"></div>
            
            <span className="text-[15px] font-normal">Showing 1-16 of 32 results</span>
          </div>

          {/* Right Side - Show/Sort Controls */}
          <div className="flex gap-6">
            <div className="flex items-center gap-4">
              <span className="text-[18px] font-normal">Show</span>
              <input type="text" placeholder="16" className="max-h-[50px] max-w-[50px] h-full w-full bg-white text-[18px] text-[#9F9F9F] text-center font-normal border-[#9F9F9F]" />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[18px] font-normal">Sort by</span>
              <select className="max-h-[50px] max-w-[170px] h-full w-full bg-white text-[18px] text-[#9F9F9F] pl-4 font-normal border-none outline-none focus:ring-2 focus:ring-[#9F9F9F]">
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          {/* Large Tablet Filter Panel */}
          {isFilterOpen && <FilterPanel />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
