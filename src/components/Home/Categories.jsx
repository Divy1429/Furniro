import React from 'react'
import living from "../../assets/living.png"
import bedroom from "../../assets/bedroom.png"
import dining from "../../assets/dining.png"

const Categories = () => {
  return (
    <div className="categories  justify-around relative grid grid-cols-1 place-items-center xl:flex-col items-center   max-w-screen pt-[57px] m-[8px] ">
    <div className="h-full h-[685px] w-full max-w-[1183px] flex flex-col items-center  ">
        <div className="title flex max-sm:flex-cols-1 flex-col items-center mx-auto ">
        <span className=" text-[32px] text-center font-bold mx-auto">    
            Browse The Range
        </span>
        <span className="m-auto max-sm:pt-[2px] flex items-center text-center max-sm:text-[16px] text-[20px] font-normal text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className="all-img grid grid-cols-1 lg:grid-cols-3  place-items-center  pt-[63px] justify-between gap-[10px] xl:gap-[20px] font-semibold">
        <div className="img-text max-sm:text-[1em]  flex flex-col   items-center gap-[10px]  xl:gap-[30px]">
            <img className="rounded-[10px]  xl:h-[480px] w-full max-w-[381px] object-cover transition-transform duration-300 hover:scale-95 cursor-pointer" src={dining} alt="" />
            <p className="text-[24px] max-sm:text-[1em]">Dining</p>
        </div>
        <div className="img-text2   flex flex-col items-center gap-[30px]">
            <img className="rounded-[10px] h-full  xl:h-[480px] w-full max-w-[381px] object-cover transition-transform duration-300 hover:scale-95 cursor-pointer" src={living} alt="" />
            <p className="text-[24px] max-sm:text-[1em]">Living</p>
        </div>
        <div className="img-text3    flex flex-col items-center gap-[30px]">
            <img className="rounded-[10px] h-full  xl:h-[480px] w-full max-w-[381px] object-cover transition-transform duration-300 hover:scale-95 cursor-pointer" src={bedroom} alt="" />
            <p className="text-[24px] max-sm:text-[1em]">Bedroom</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Categories