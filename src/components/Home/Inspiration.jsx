import React from 'react'
import sample1 from "../../assets/sample1.png";
import sample2 from "../../assets/sample2.png";
import sample3 from "../../assets/sample3.png";


const Inspiration = () => {
  return (
    <div className="flex items-center justify-center px-4 max-sm:px-[15px] mt-[69px] w-full bg-[#FCF8F3] overflow-x-hidden">
      <div className="max-w-[1440px] w-full">
        <div className="min-h-[670px] w-full flex items-center max-lg:flex-col max-lg:gap-8">

          {/* LEFT TEXT CONTENT */}
          <div className="max-w-[422px] w-full flex flex-col mt-[50px] lg:mt-[223px] px-4 max-sm:px-0 lg:ml-[100px] xl:ml-[100px]">
            <div className="flex flex-col items-center lg:items-start xl:items-start">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] mb-[20px] text-center lg:text-left xl:text-left xl:leading-[120%] text-[#3A3A3A] xl:mb-[7px] font-bold max-w-full">
                50+ Beautiful rooms inspiration
              </h2>
              <p className="text-sm sm:text-base text-center lg:text-left xl:text-left mb-[25px] xl:max-w-[368px] font-medium text-[#616161] max-w-full">
                Our designer already made a lot of beautiful prototype of rooms that inspire you
              </p>
              <button className="max-w-[176px] w-full max-h-[48px] h-full px-[20px] sm:px-[36px] py-[8px] sm:py-[12px] text-[14px] sm:text-[16px] text-white bg-[#B88E2F] hover:bg-[#9c7c28] transition-colors duration-200 cursor-pointer active:scale-90">
                Explore More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE GALLERY */}
          <div className="w-full max-w-[1196px] mx-auto px-4 max-sm:px-0 lg:px-0 mdl:ml-[42px] flex max-lg:flex-col gap-4 sm:gap-5 mdl:gap-[24px] justify-center mt-6 sm:mt-8 mdl:mt-[44px]">
            
            {/* MAIN IMAGE */}
            <div className="flex items-center justify-center w-full max-w-full">
              <img 
                className="max-h-[250px] sm:max-h-[300px] lg:max-h-[500px] mdl:max-h-[582px] w-full max-w-full sm:min-w-[300px] lg:min-w-[350px] mdl:min-w-[404px] object-cover" 
                src={sample1} 
                alt="" 
              />
            </div>

            {/* SIDE IMAGES */}
            <div className="flex gap-4 sm:gap-[24px] justify-center max-lg:flex-col max-lg:items-center w-full">
              
              {/* SECOND IMAGE WITH DOTS - Reverted to Original Styling */}
              <div className="flex-shrink-0 max-h-[486px] h-full max-w-[372px] w-full relative max-sm:max-w-[90%]">
                <img className="h-full w-full hidden lg:block object-cover flex items-center" src={sample2} alt="" />

                {/* NAV DOTS */}
                <div className="flex max-sm:gap-[6px] gap-[12px] pt-[10px] max-sm:ml-[-15px] items-center justify-center">
                  <div className="border border-[#B88E2F] rounded-full p-[8px] flex items-center justify-center">
                    <button className="border border-[#B88E2F] rounded-full bg-[#B88E2F] w-[11px] h-[11px]"></button>
                  </div>
                  <button className="max-w-[11px] w-full h-[11px] rounded-full bg-gray-400 hover:bg-gray-600"></button>
                  <button className="max-w-[11px] w-full h-[11px] rounded-full bg-gray-400 hover:bg-gray-600"></button>
                  <button className="max-w-[11px] w-full h-[11px] rounded-full bg-gray-400 hover:bg-gray-600"></button>
                </div>
              </div>

              {/* THIRD IMAGE */}
              <div className="w-full max-w-[90%] sm:max-w-[372px] max-h-[486px]">
                <img className="w-full h-full object-cover hidden xl:block" src={sample3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inspiration
