import React from 'react'
import shop from "../../assets/Shop/shop.png";
import greater from "../../assets/Shop/greater.png";

const BackgroundWrapper = () => {
  return (
    <div>
      <div className="relative max-w-[1440px] max-h-[316px] w-full mx-auto">
              {/* Background Image */}
              <img
                src={shop}
                className="max-w-[1440px] max-h-[316px] w-full h-full object-cover opacity-[50%] blur-[3px]"
                alt="Shop Banner"
              />
      
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                {/* Title */}
                <span className="text-[48px] font-medium font-bold max-sm:text-[28px]" >Shop</span>
      
                <div className="flex items-center gap-[6px]  ">
                  <span className="cursor-pointer text-[16px] max-sm:text-[12px] font-medium inset-0">Home</span>
                  <img src={greater} alt=">" className="h-[8px]  inset-0 w-[14px] object-contain" />
                  <span className="text-[16px] max-sm:text-[12px] font-light inset-0 ">Shop</span>
                </div>
              </div>
            </div>    
    </div>
  )
}

export default BackgroundWrapper