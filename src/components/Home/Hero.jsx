import React from 'react'
import "../../assets/image.png"


const Hero = () => {
  return (
    <div className="relative flex items-center justify-around ">
      <div className="img-cover bg-[url('/image.png')] min-h-auto  h-full  xl:h-[717px] w-full max-w-[1440px] bg-cover mx-auto flex flex-col items-center    xl:pl-[739px]  xl:pt-[153px]">
      
      <div className="rounded-[10px]  bg-[#FFF3E3] my-[10px]   content-box h-full max-sm:h-auto max-sm:max-h-none  max-h-[443px] w-full max-w-[643px] max-sm:px-[0.1em] px-[20px] xl:pl-[39px] py-[10px]  xl:pt-[62px] max-sm:mx-auto ">
      <div className="content-texts xl:text-left  h-full mx-[4px] text-center flex flex-col xl:items-start items-center  xl:max-h-[344px] w-full max-w-[561px] mb-auto pb-[4px]">
        <p className=" text-[16px] font-semibold  tracking-[3px]   ">New Arrival</p>
        <p className="text-[#B88E2F] max-w-[400px] text-[45px]  xl:text-[52px] font-bold  leading-[65px] pb-auto pb-[17px]">Discover Our New Collection</p>
        <p className="text-[18px] max-w-[546px] max-sm:max-w-[350px] xl:text-left text-center  font-medium mb-auto pb-[46px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="text-[16px]    text-white font-bold p-[10px] px-[50px] py-[] xl:px-[72px] xl:py-[25px] bg-[#B88E2F] hover:bg-[#9c7c28] transition-colors duration-200 cursor-pointer active:scale-90 ">BUY Now</button>
      </div>
      </div>
      </div>

    </div>
  )
}

export default Hero