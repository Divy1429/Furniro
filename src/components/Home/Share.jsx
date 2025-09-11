import React from 'react'
import share1 from "../../assets/share1.png";
import share2 from "../../assets/share2.png";
import share3 from "../../assets/share3.png";
import share4 from "../../assets/share4.png";
import share5 from "../../assets/share5.png";
import share6 from "../../assets/share6.png";
import share7 from "../../assets/share7.png";
import share8 from "../../assets/share8.png";
import share9 from "../../assets/share9.png";


const Share = () => {
  return (
    <>
      {/* Slider for screens below 1024px */}
      <div className="relative lg:hidden flex flex-col items-center justify-center mt-[30px] sm:mt-[44px] mb-[30px] sm:mb-[40px] px-4 w-full bg-[#FCF8F3]">
        <div className="w-full max-w-[1200px]">
          
          {/* Header Section - Always Centered */}
          <div className="flex flex-col items-center gap-2 mb-6 sm:mb-8 text-center">
            <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#616161]">
              Share your setup with
            </span>
            <span className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#3A3A3A] pt-1 sm:pt-[8px]">
              #FuniroFurniture
            </span>
          </div>

          {/* Horizontal Scroll Slider */}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-3 sm:gap-4 pb-4 min-w-max">
              <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[180px] sm:h-[200px] md:h-[240px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share1} alt="" />
              </div>
              <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[180px] sm:h-[200px] md:h-[240px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share2} alt="" />
              </div>
              <div className="w-[160px] sm:w-[180px] md:w-[220px] h-[160px] sm:h-[180px] md:h-[200px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share3} alt="" />
              </div>
              <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[140px] sm:h-[160px] md:h-[180px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share4} alt="" />
              </div>
              <div className="w-[150px] sm:w-[170px] md:w-[200px] h-[200px] sm:h-[220px] md:h-[260px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share5} alt="" />
              </div>
              <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[160px] sm:h-[180px] md:h-[220px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share6} alt="" />
              </div>
              <div className="w-[120px] sm:w-[140px] md:w-[160px] h-[140px] sm:h-[160px] md:h-[180px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share7} alt="" />
              </div>
              <div className="w-[160px] sm:w-[180px] md:w-[220px] h-[200px] sm:h-[220px] md:h-[280px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share8} alt="" />
              </div>
              <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[160px] sm:h-[180px] md:h-[200px] flex-shrink-0">
                <img className="h-full w-full object-cover shadow-md" src={share9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Original Design for 1024px and above */}
      <div className="relative hidden lg:flex items-center h-[780px] w-screen flex items-center justify-around mt-[59px] mb-[58px]">
        <div className="h-[780px] w-[1440px] ">
          {/* Header Section - Always Centered */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[20px] font-semibold text-[#616161]">
              Share your setup with
            </span>
            <span className="text-[40px] font-bold text-[#3A3A3A] pt-[8px]">
              #FuniroFurniture
            </span>
          </div>
          <div className="h-[720px] w-full max-w-[1799px] flex gap-[16px] overflow-hidden">
            <div className="  ">
              <div className="h-[382px] w-[274px] pb-[16px]  flex-shrink-0 ml-[-203px]">
                <img className="h-full w-full object-cover" src={share1} alt="" />
              </div>
              <div className="h-[381px] w-[323px] flex-shrink-0 ml-[-203px]">
                <img className="h-full w-full object-cover" src={share2} alt="" />
              </div>
            </div>
            <div className="pt-[43px]">
              <div className="h-[312px] w-[451px] -ml-[50px]  flex-shrink-0">
                <img className="h-full w-full object-cover"  src={share3} alt="" />
              </div>
              <div className="h-[242px] w-[344px] mt-[16px] flex-shrink-0">
                <img className="h-full w-full object-cover" src={share4} alt="" />
              </div>
            </div>
            <div className="h-[392px] w-[295px] mt-[156px]  flex-shrink-0">
              <img className="h-full w-full object-cover" src={share5} alt="" />
            </div>
            <div className=" pt-[99px]">
              <div className="h-[348px] w-[290px] pb-[16px]   flex-shrink-0">
                <img className="h-full w-full object-cover" src={share6} alt="" />
              </div>
              <div className="h-[242px] w-[178px]  flex-shrink-0">
                <img className="h-full w-full object-cover" src={share7} alt="" />
              </div>
            </div>
            <div className="pt-[14px] relative">
              <div className="h-[433px] w-[425px] pb-[16px]  flex-shrink-0 overflow-hidden">
                <img className="h-full w-full object-cover " src={share8} alt="" />
              </div>
              <div className="h-[196px] w-[258px] ml-[-100px]  flex-shrink-0">
                <img className="h-full w-full object-cover" src={share9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Share
