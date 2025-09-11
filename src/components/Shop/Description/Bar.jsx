import React from 'react'

const Bar = () => {
  return (
    <div className="w-screen bg-[#F9F1E7] h-[100px] flex items-center ">
        <div  className="flex items-center justify-start ml-[99px] max-sm:m-auto max-sm:flex-col">
          <div className="flex gap-[14px] max-sm:gap-[10px] mr-[24px] max-sm:m-auto">
          <span className="text-[16px] font-normal text-[#9F9F9F] ">Home</span>
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
</svg>
</div>
          </div>
           <div className="flex gap-[21px] max-sm:gap-[10px] mr-[25px] max-sm:m-auto">
          <span className="text-[16px] font-normal text-[#9F9F9F] ">Shop</span>
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
</svg>
</div>
          </div>
          <div className="flex gap-[34px] items-center">
          <svg width="2"  className="max-sm:hidden" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2"/>
</svg>
            <span className="text-[16px] font-normal text-[#000000] ">Asgaard sofa</span>
            </div>
        </div>
    </div>
  )
}

export default Bar