import React, { useState } from 'react'

const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-[1440px] min-h-[400px] sm:min-h-[450px] mdl:min-h-[505px]">
        
        {/* Top Border */}
        <div className="w-full  ">
          <div className="w-full h-0 border-t border-[#9F9F9F]"></div>
        </div>

        {/* Main Footer Content */}
        <div className="w-full max-w-[1240px] mx-auto py-8 sm:py-10 mdl:py-12">
          <div className="w-full max-w-[1133px] mb-8 sm:mb-10 mdl:mb-12">
            
            {/* Mobile Layout (< 640px) */}
            <div className="flex flex-col space-y-8 sm:hidden">
              
              {/* Logo and Address Section - Mobile */}
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">
                  Furniro.
                </h2>
                <p className="text-sm text-[#9F9F9F] leading-relaxed">
                  400 University Drive Suite 200 Coral Gables,<br />
                  FL 33134 USA
                </p>
              </div>

              {/* Links Dropdown - Mobile */}
              <div>
                <button 
                  onClick={() => setShowLinks(!showLinks)}
                  className="flex justify-between items-center w-full p-3 border-b border-[#9F9F9F] text-[#9F9F9F] font-medium cursor-pointer"
                >
                  Links
                  <span className={`transform transition-transform duration-200 text-xs ${showLinks ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`${showLinks ? 'block' : 'hidden'} mt-4`}>
                  <nav className="flex flex-col gap-4 px-3">
                    <button className="text-left text-sm hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Home
                    </button>
                    <button className="text-left text-sm hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Shop
                    </button>
                    <button className="text-left text-sm hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      About
                    </button>
                    <button className="text-left text-sm hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Contact
                    </button>
                  </nav>
                </div>
              </div>

              {/* Help Dropdown - Mobile */}
              <div>
                <button 
                  onClick={() => setShowHelp(!showHelp)}
                  className="flex justify-between items-center w-full p-3 border-b border-[#9F9F9F] text-[#9F9F9F] font-medium cursor-pointer"
                >
                  Help
                  <span className={`transform transition-transform duration-200 text-xs ${showHelp ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`${showHelp ? 'block' : 'hidden'} mt-4`}>
                  <nav className="flex flex-col gap-4 px-3">
                    <button className="text-left text-sm hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Payment Options
                    </button>
                    <button className="text-left text-sm hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Returns
                    </button>
                    <button className="text-left text-sm hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Privacy Policies
                    </button>
                  </nav>
                </div>
              </div>

              {/* Mobile Newsletter Section */}
              <div className="pt-6">
                <h3 className="text-[#9F9F9F] font-medium mb-4 text-center">Newsletter</h3>
                <div className="flex flex-col gap-3 max-w-[250px] mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email Address"
                    className="w-full border-b border-[#9F9F9F] pb-2 focus:outline-none focus:border-black transition-colors duration-200 text-center text-sm bg-transparent"
                  />
                  <button className="text-center underline hover:no-underline active:scale-95 transition-all duration-200 font-medium text-sm cursor-pointer">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>

            {/* Tablet & Desktop Layout (640px+) */}
            <div className="hidden sm:block">
              
              {/* Flexible Grid Layout for sm/md/lg, Fixed for mdl+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mdl:flex mdl:gap-0">
              
                {/* Logo and Address Section */}
                <div className="sm:col-span-2 lg:col-span-1 mdl:max-w-[285px] mdl:min-w-[285px] mdl:mr-[136px]">
                  <div className="mb-8 sm:mb-10 mdl:mb-[50px] text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl mdl:text-[24px] font-bold mb-6 sm:mb-8 mdl:mb-[50px]">
                      Furniro.
                    </h2>
                    <p className="text-sm sm:text-base mdl:text-[16px] text-[#9F9F9F] leading-relaxed max-w-[285px] mx-auto sm:mx-0">
                      400 University Drive Suite 200 Coral Gables,<br />
                      FL 33134 USA
                    </p>
                  </div>
                </div>

                {/* Links Section */}
                <div className="mdl:pr-[144px]">
                  <h3 className="text-[#9F9F9F] font-medium mb-4 sm:mb-6 mdl:mb-[46px] text-center sm:text-left">
                    Links
                  </h3>
                  <nav className="flex flex-col gap-4 sm:gap-6 mdl:gap-[46px] items-center sm:items-start">
                    <button className="text-left text-sm sm:text-base mdl:text-[16px] hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Home
                    </button>
                    <button className="text-left text-sm sm:text-base mdl:text-[16px] hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Shop
                    </button>
                    <button className="text-left text-sm sm:text-base mdl:text-[16px] hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      About
                    </button>
                    <button className="text-left text-sm sm:text-base mdl:text-[16px] hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Contact
                    </button>
                  </nav>
                </div>

                {/* Help Section */}
                <div className="mdl:mr-[72px]">
                  <h3 className="text-[#9F9F9F] font-medium mb-4 sm:mb-6 mdl:mb-[46px] text-center sm:text-left">
                    Help
                  </h3>
                  <nav className="flex flex-col gap-4 sm:gap-6 mdl:gap-[46px] items-center sm:items-start">
                    <button className="text-left text-sm sm:text-base mdl:text-[16px] hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Payment Options
                    </button>
                    <button className="text-left text-sm sm:text-base mdl:text-[16px] hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Returns
                    </button>
                    <button className="text-left text-sm sm:text-base mdl:text-[16px] hover:underline transition-all duration-200 hover:text-black cursor-pointer">
                      Privacy Policies
                    </button>
                  </nav>
                </div>
                
                {/* Newsletter Section */}
                <div className="sm:col-span-2 lg:col-span-1 mdl:max-w-[286px] mdl:w-full">
                  <h3 className="text-[#9F9F9F] font-medium mb-4 sm:mb-6 mdl:mb-[46px] text-center sm:text-left">
                    Newsletter
                  </h3>
                  
                  {/* Below mdl - Smaller input size */}
                  <div className="flex flex-col gap-3 max-w-[180px] mx-auto sm:mx-0 mdl:hidden">
                    <input 
                      type="email" 
                      placeholder="Enter Your Email Address"
                      className="w-full border-b border-[#9F9F9F] pb-2 focus:outline-none focus:border-black transition-colors duration-200 text-sm bg-transparent text-center sm:text-left"
                    />
                    <button className="text-center sm:text-left underline hover:no-underline active:scale-95 transition-all duration-200 font-medium text-sm py-1 cursor-pointer">
                      SUBSCRIBE
                    </button>
                  </div>

                  {/* mdl+ - Full size input (1370px+) */}
                  <div className="hidden mdl:flex mdl:gap-4 max-w-[286px]">
                    <input 
                      type="email" 
                      placeholder="Enter Your Email Address"
                      className="flex-1 border-b border-[#9F9F9F] pb-2 focus:outline-none focus:border-black transition-colors duration-200 text-[14px] bg-transparent"
                    />
                    <button className="text-left underline hover:no-underline active:scale-95 transition-all duration-200 font-medium text-[14px] whitespace-nowrap cursor-pointer">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="">
            <div className="w-full border-t border-[#9F9F9F]"></div>
            <p className="text-sm sm:text-base mdl:text-[16px] mt-6 sm:mt-8 mdl:mt-[35px] text-center sm:text-left">
              2023 furino. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
