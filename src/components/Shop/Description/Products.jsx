import React from 'react'
import i from "../../../assets/i.png";
import i2 from "../../../assets/i2.png";
import i3 from "../../../assets/i3.png";
import i4 from "../../../assets/i4.png";
import i5 from "../../../assets/i5.png";
import i6 from "../../../assets/i6.png";
import i7 from "../../../assets/i7.png";
import share1 from "../../../assets/share1.png";


const Products = () => {
  return (
    <div className="relative max-sm:px-[10px] overflow-hidden max-w-[1440px] w-full m-auto flex flex-col items-center mb-[80px]">
      <div className="max-w-[1236px]  w-full xl:max-h-[1084px] h-auto max-sm:mx-[40px] mt-[56px] flex flex-col items-center">
        <span className="text-[36px] text-center font-medium">Related Products</span>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1  max-sm:m-[8px] xl:mt-[32px] gap-[32px]">
          {[
            { img: i, title: "Syltherine", desc: "Stylish cafe chair", price: "2.500.000", oldPrice: "3.500.000" },
            { img: share1, title: "Jacose", desc: "Jacose new", price: "5.400.000", oldPrice: "9.700.000" },
            { img: i2, title: "Lolito", desc: "Luxury big sofa", price: "7.000.000", oldPrice: "14.000.000" },
            { img: i3, title: "Respira", desc: "Outdoor bar table and stool", price: "500.000" },
          ].map((item, index) => (
            <div key={index} className="max-w-[285px] w-full h-[446px] mx-auto bg-[#F4F5F7] group relative ">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center max-sm:gap-1 gap-4 translate-y-full group-hover:translate-y-0">
                <button className="bg-white hover:bg-[#B88E2F] text-[#B88E2F] hover:text-white transition-colors duration-200 py-2 px-6   w-[180px] text-base">
                  Add to cart
                </button>
                <div className="flex items-center max-sm:gap-1 gap-3 max-sm:flex-col">
                  <button className="bg-transparent  hover:text-black text-white transition-colors duration-200 p-2  flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>  
                    <span className="text-sm">Like </span>
                  </button>
                  <button className="bg-transparent  hover:text-black text-white  transition-colors duration-200 p-2  flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-sm">Share</span>
                  </button>
                  <button className="bg-transparent hover:text-black text-white   duration-200 p-2 rounded-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">Compare</span>
                  </button>
                </div>
              </div>

              <img className="max-h-[301px] h-full  mx-auto max-w-[285px] w-full object-cover" src={item.img} alt="" />
              <div className="text-con flex flex-col max-sm:min-h-[99px]  h-[99px] max-w-[254px] w-full m-[16px]">
                <span className="text-[24px] max-sm:mx-auto  text-[#3A3A3A] font-semibold pb-[2px] xl:pb-[8px]">{item.title}</span>
                <span className="text-[16px] max-sm:mx-auto max-sm:text-[75%] text-[#898989] font-medium pb-[2px] xl:pb-[8px]">{item.desc}</span>
                <div className="price max-sm:flex-col max-sm:gap-[2px] flex gap-[16px] justify-between font-semibold">
                  <span className="text-[20px] max-sm:mx-auto  text-[#3A3A3A]">Rp {item.price}</span>
                  {item.oldPrice && (
                    <span className="text-[16px] max-sm:mx-auto  text-[#B0B0B0] line-through font-normal">Rp {item.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="max-w-[245px] max-sm:w-auto max-sm:py-[2px] w-full max-h-[48px] h-full active:scale-90 text-[16px]  font-semibold text-[#B88E2F]  py-[12px] px-[72px] border border-[#B88E2F] mt-[32px] hover:bg-[#9c7c28] hover:text-white transition-colors duration-200 cursor-pointer">
          Show More
        </button>
      </div>
    </div>
  )
}

export default Products