import { useState } from 'react'
import asgaardsofa from "../../assets/shop/asgaardsofa.png"
import outdoor1sofa from "../../assets/shop/outdoor1sofa.png"

const TwoProducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full flex justify-center items-center  px-[10px]">
      <div className="flex flex-col lg:flex-row mdl:flex-row  justify-center max-w-[1332px] mdl:max-w-[1332px] w-full mt-[20px] sm:mt-[25px] mdl:mt-[34px] gap-6 lg:gap-8 mdl:gap-0 ">
        
        {/* Text Section */}
        <div className="flex flex-col mr-0 lg:mr-[50px] mdl:mr-[75px] gap-[15px] sm:gap-[18px] mdl:gap-[21px] text-center lg:text-left mdl:text-left">
          <span className="text-[20px] sm:text-[24px] mdl:text-[28px] font-medium max-w-none sm:max-w-[280px] lg:max-w-[200px] mdl:max-w-[223px] mx-auto lg:mx-0 mdl:mx-0">
            Go to Product page for more Products
          </span>
          <button className="underline text-[16px] sm:text-[18px] mdl:text-[20px] text-center lg:text-left mdl:text-left font-medium text-[#727272] cursor-pointer">
            View More
          </button>
        </div>

        {/* Products Section */}
        <div className="flex flex-col lg:flex-row mdl:flex-row gap-6 sm:gap-8 lg:gap-[35px] mdl:gap-[47px] justify-center lg:justify-between mdl:justify-between">
          
          {/* First Product */}
          <div className="flex flex-col max-w-[320px] sm:max-w-[350px] lg:max-w-[280px] mdl:max-w-[280px] mx-auto lg:mx-0 mdl:mx-0">
            <div className="w-full flex items-center justify-center rounded-[10px] h-[160px] sm:h-[170px] lg:h-[177px] mdl:h-[177px] bg-[#F9F1E7] p-2">
              <img src={asgaardsofa} alt="Asgaard Sofa" className="object-cover w-full h-full" />
            </div>
            
            <div className="flex flex-col gap-[8px] sm:gap-[10px] mdl:gap-[10px] mt-[15px] sm:mt-[18px] mdl:mt-[18px] px-2 lg:px-[2px] mdl:px-[2px]">
              <div className="flex flex-col gap-[4px] sm:gap-[6px] mdl:gap-[6px]">
                <span className="text-[20px] sm:text-[22px] mdl:text-[24px] font-medium text-center lg:text-left mdl:text-left">
                  Asgaard Sofa
                </span>
                <span className="text-[16px] sm:text-[17px] mdl:text-[18px] font-medium text-center lg:text-left mdl:text-left lg:ml-[1px] mdl:ml-[1px]">
                  Rs. 250,000.00
                </span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mdl:justify-start lg:ml-[1px] mdl:ml-[1px]">
                <span className="text-[16px] sm:text-[17px] mdl:text-[18px] font-medium mr-[4px]">4.7</span>
                
                <div className="flex flex-row gap-[4px] sm:gap-[6px] mdl:gap-[6px] mr-[4px] sm:mr-[6px] mdl:mr-[6px]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mdl:h-[20px] mdl:w-[20px]">
                      <svg width="16" className="sm:w-[18px] mdl:w-[18px]" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700"/>
                      </svg>
                    </div>
                  ))}
                  <div className="flex h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mdl:h-[20px] mdl:w-[20px]">
                    <svg width="8" className="sm:w-[10px] mdl:w-[10px]" height="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.15703 6.0125L0.800781 6.9375L5.40078 11.4188L4.31328 17.75L10.0008 14.7625V0.25L7.15703 6.0125Z" fill="#FFC700"/>
                    </svg>
                  </div>
                </div>
                
                <svg width="1" height="25" className="sm:h-[30px] mdl:h-[30px]" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.5" x2="0.5" y2="30" stroke="#9F9F9F"/>
                </svg>
                
                <span className="text-[11px] sm:text-[12px] mdl:text-[13px] ml-[6px] sm:ml-[9px] mdl:ml-[9px] font-normal text-[#9F9F9F]">
                  204 Review
                </span>
              </div>
            </div>
          </div>

          {/* Second Product */}
          <div className="flex flex-col max-w-[320px] sm:max-w-[350px] lg:max-w-[280px] mdl:max-w-[280px] mx-auto lg:mx-0 mdl:mx-0">
            <div className="w-full flex items-center justify-center rounded-[10px] h-[160px] sm:h-[170px] lg:h-[177px] mdl:h-[177px] bg-[#F9F1E7] p-2">
              <img src={outdoor1sofa} alt="Outdoor Sofa Set" className="object-contain w-full h-full" />
            </div>
            
            <div className="flex flex-col gap-[8px] sm:gap-[10px] mdl:gap-[10px] mt-[15px] sm:mt-[18px] mdl:mt-[18px] px-2 lg:px-[2px] mdl:px-[2px]">
              <div className="flex flex-col gap-[4px] sm:gap-[6px] mdl:gap-[6px]">
                <span className="text-[20px] sm:text-[22px] mdl:text-[24px] font-medium text-center lg:text-left mdl:text-left">
                  Outdoor Sofa Set
                </span>
                <span className="text-[16px] sm:text-[17px] mdl:text-[18px] font-medium text-center lg:text-left mdl:text-left lg:ml-[1px] mdl:ml-[1px]">
                  Rs. 224,000.00
                </span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mdl:justify-start lg:ml-[1px] mdl:ml-[1px]">
                <span className="text-[16px] sm:text-[17px] mdl:text-[18px] font-medium mr-[4px]">4.2</span>
                
                <div className="flex flex-row gap-[4px] sm:gap-[6px] mdl:gap-[6px] mr-[4px] sm:mr-[6px] mdl:mr-[6px]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mdl:h-[20px] mdl:w-[20px]">
                      <svg width="16" className="sm:w-[18px] mdl:w-[18px]" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700"/>
                      </svg>
                    </div>
                  ))}
                  <div className="flex h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] mdl:h-[20px] mdl:w-[20px]">
                    <svg width="8" className="sm:w-[10px] mdl:w-[10px]" height="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.15703 6.0125L0.800781 6.9375L5.40078 11.4188L4.31328 17.75L10.0008 14.7625V0.25L7.15703 6.0125Z" fill="#FFC700"/>
                    </svg>
                  </div>
                </div>
                
                <svg width="1" height="25" className="sm:h-[30px] mdl:h-[30px]" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.5" x2="0.5" y2="30" stroke="#9F9F9F"/>
                </svg>
                
                <span className="text-[11px] sm:text-[12px] mdl:text-[13px] ml-[6px] sm:ml-[9px] mdl:ml-[9px] font-normal text-[#9F9F9F]">
                  145 Review
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Section */}
        <div className="flex flex-col ml-0 lg:ml-[50px] mdl:ml-[69px] items-center lg:items-start mdl:items-start mt-6 lg:mt-0 mdl:mt-0">
          <span className="text-[20px] sm:text-[22px] mdl:text-[24px] font-semibold mb-[12px] sm:mb-[14px] mdl:mb-[14px] text-center lg:text-left mdl:text-left">
            Add A Product
          </span>
          
          <div className="relative w-[200px] sm:w-[220px] mdl:w-[242px]">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#B88E2F] text-[#FFFFFF] w-full rounded-[6px] flex items-center pl-3 sm:pl-4 mdl:pl-4 pr-2 sm:pr-3 mdl:pr-3 h-[35px] sm:h-[37px] mdl:h-[39px] justify-between hover:bg-[#A07A2A] transition-colors duration-200 cursor-pointer"
            >
              <span className="text-[12px] sm:text-[13px] mdl:text-[14px] font-semibold">Choose a Product</span>
              
              <svg className={`transition-transform ${isOpen ? 'rotate-180' : ''} sm:w-[18px] sm:h-[10px] mdl:w-[20px] mdl:h-[11px] `} width="16" height="9"  viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L10 9.5L19 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            {isOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-[6px] shadow-lg z-10">
                <div className="px-3 sm:px-4 mdl:px-4 py-2 hover:bg-[#F9F1E7] cursor-pointer text-[12px] sm:text-[13px] mdl:text-[14px] transition-colors duration-150">Asgaard Sofa</div>
                <div className="px-3 sm:px-4 mdl:px-4 py-2 hover:bg-[#F9F1E7] cursor-pointer text-[12px] sm:text-[13px] mdl:text-[14px] transition-colors duration-150">Modern Chair</div>
                <div className="px-3 sm:px-4 mdl:px-4 py-2 hover:bg-[#F9F1E7] cursor-pointer text-[12px] sm:text-[13px] mdl:text-[14px] transition-colors duration-150">Wooden Table</div>
                <div className="px-3 sm:px-4 mdl:px-4 py-2 hover:bg-[#F9F1E7] cursor-pointer text-[12px] sm:text-[13px] mdl:text-[14px] transition-colors duration-150 rounded-b-[6px]">Office Desk</div>
              </div>
            )}
          </div>
        </div>
            
             
      </div>
    </div>
  )
}

export default TwoProducts
