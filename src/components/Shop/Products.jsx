import React, { useState } from 'react'
import i from "../../assets/i.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import share1 from "../../assets/share1.png";
import Description from './Description/Description';
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Products = () => {
  const products = [
    { img: i, title: "Syltherine", desc: "Stylish cafe chair", price: "2.500.000", oldPrice: "3.500.000" },
    { img: share1, title: "Jacose", desc: "Jacose new", price: "5.400.000", oldPrice: "9.700.000" },
    { img: i2, title: "Lolito", desc: "Luxury big sofa", price: "7.000.000", oldPrice: "14.000.000" },
    { img: i3, title: "Respira", desc: "Outdoor bar table and stool", price: "500.000" },
    { img: i4, title: "Grifo", desc: "Night lamp", price: "1.500.000", oldPrice: "3.500.000" },
    { img: i5, title: "Muggo", desc: "Small mug", price: "150.000" },
    { img: i6, title: "Pingky", desc: "Cute bed set", price: "7.000.000", oldPrice: "14.000.000" },
    { img: i7, title: "Potty", desc: "Minimalist flower pot", price: "500.000" },
    { img: i, title: "Velora", desc: "Modern dining chair", price: "1.800.000", oldPrice: "2.900.000" },
    { img: i2, title: "Nexus", desc: "Smart coffee table", price: "4.200.000", oldPrice: "6.100.000" },
    { img: share1, title: "Zephyr", desc: "Elegant floor lamp", price: "2.300.000" },
    { img: i4, title: "Cosmos", desc: "Luxury armchair", price: "8.500.000", oldPrice: "12.000.000" },
    { img: i3, title: "Luna", desc: "Bedside table", price: "900.000", oldPrice: "1.400.000" },
    { img: i5, title: "Aura", desc: "Decorative mirror", price: "650.000" },
    { img: i6, title: "Phoenix", desc: "Executive office chair", price: "3.200.000", oldPrice: "4.800.000" },
    { img: i7, title: "Stellar", desc: "Bookshelf unit", price: "2.750.000" },
    { img: i, title: "Horizon", desc: "TV stand cabinet", price: "1.950.000", oldPrice: "3.200.000" },
    { img: i, title: "Echo", desc: "Acoustic wall panel", price: "420.000" },
    { img: i2, title: "Vortex", desc: "Swivel bar stool", price: "1.100.000", oldPrice: "1.650.000" },
    { img: i5, title: "Rhythm", desc: "Pendant light fixture", price: "850.000" },
    { img: i7, title: "Breeze", desc: "Outdoor lounge chair", price: "2.100.000", oldPrice: "3.300.000" },
    { img: share1, title: "Flux", desc: "Adjustable desk", price: "3.800.000" },
    { img: i4, title: "Prism", desc: "Glass dining table", price: "5.900.000", oldPrice: "8.200.000" },
    { img: i3, title: "Zen", desc: "Meditation cushion", price: "180.000" },
    { img: i2, title: "Atlas", desc: "Storage ottoman", price: "1.350.000", oldPrice: "2.100.000" },
    { img: i, title: "Nova", desc: "Ceiling fan with light", price: "1.750.000" },
    { img: i6, title: "Mystic", desc: "Vintage wardrobe", price: "6.500.000", oldPrice: "9.800.000" },
    { img: share1, title: "Pulse", desc: "Gaming chair", price: "2.400.000", oldPrice: "3.600.000" },
    { img: i, title: "Syltherine", desc: "Stylish cafe chair", price: "2.500.000", oldPrice: "3.500.000" },
    { img: share1, title: "Jacose", desc: "Jacose new", price: "5.400.000", oldPrice: "9.700.000" },
    { img: i2, title: "Lolito", desc: "Luxury big sofa", price: "7.000.000", oldPrice: "14.000.000" },
    { img: i3, title: "Respira", desc: "Outdoor bar table and stool", price: "500.000" },
    { img: i4, title: "Grifo", desc: "Night lamp", price: "1.500.000", oldPrice: "3.500.000" },
    { img: i5, title: "Muggo", desc: "Small mug", price: "150.000" },
    { img: i6, title: "Pingky", desc: "Cute bed set", price: "7.000.000", oldPrice: "14.000.000" },
    { img: i7, title: "Potty", desc: "Minimalist flower pot", price: "500.000" },
    { img: i, title: "Velora", desc: "Modern dining chair", price: "1.800.000", oldPrice: "2.900.000" },
    { img: i2, title: "Nexus", desc: "Smart coffee table", price: "4.200.000", oldPrice: "6.100.000" },
    { img: share1, title: "Zephyr", desc: "Elegant floor lamp", price: "2.300.000" },
    { img: i4, title: "Cosmos", desc: "Luxury armchair", price: "8.500.000", oldPrice: "12.000.000" },
    { img: i3, title: "Luna", desc: "Bedside table", price: "900.000", oldPrice: "1.400.000" },
    { img: i5, title: "Aura", desc: "Decorative mirror", price: "650.000" },
    { img: i6, title: "Phoenix", desc: "Executive office chair", price: "3.200.000", oldPrice: "4.800.000" },
    { img: i7, title: "Stellar", desc: "Bookshelf unit", price: "2.750.000" },
    { img: i, title: "Horizon", desc: "TV stand cabinet", price: "1.950.000", oldPrice: "3.200.000" },
    { img: i, title: "Echo", desc: "Acoustic wall panel", price: "420.000" },
    { img: i2, title: "Vortex", desc: "Swivel bar stool", price: "1.100.000", oldPrice: "1.650.000" },
    { img: i5, title: "Rhythm", desc: "Pendant light fixture", price: "850.000" }

  ];


   const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentItems = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { 
      state: { product } // Pass product data through route state
    });
  };

  return (
    <div className="relative max-w-[1440px] w-full m-auto flex flex-col items-center mb-[80px]">
      <div className="max-w-[1236px] w-full max-sm:mx-[40px] mt-[85px] flex flex-col items-center">
        
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 max-sm:m-[8px] xl:mt-[32px] gap-[32px]">
          {currentItems.map((item, index) => (
            <div key={index} onClick={() => handleProductClick(item)} className="max-w-[285px] w-full h-[446px] mx-auto bg-[#F4F5F7] group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center max-sm:gap-1 gap-4 translate-y-full group-hover:translate-y-0">
                <button onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering product click
                    // Handle add to cart
                  }} className="bg-white hover:bg-[#B88E2F] text-[#B88E2F] hover:text-white transition-colors duration-200 py-2 px-6 w-[180px] text-base">
                  Add to cart
                </button>
                <div className="flex items-center max-sm:gap-1 gap-3 max-sm:flex-col">
                  <button  onClick={(e) => e.stopPropagation()} className="bg-transparent hover:text-black text-white transition-colors duration-200 p-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>  
                    <span className="text-sm">Like</span>
                  </button>
                  <button  onClick={(e) => e.stopPropagation()} className="bg-transparent hover:text-black text-white transition-colors duration-200 p-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-sm">Share</span>
                  </button>
                  <button  onClick={(e) => e.stopPropagation()} className="bg-transparent hover:text-black text-white duration-200 p-2 rounded-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">Compare</span>
                  </button>
                </div>
              </div>

              <img className="max-h-[301px] h-full mx-auto max-w-[285px] w-full object-cover" src={item.img} alt="" />
              <div className="text-con flex flex-col max-sm:min-h-[99px] h-[99px] max-w-[254px] w-full m-[16px]">
                <span className="text-[24px] max-sm:mx-auto text-[#3A3A3A] font-semibold pb-[2px] xl:pb-[8px]">{item.title}</span>
                <span className="text-[16px] max-sm:mx-auto max-sm:text-[75%] text-[#898989] font-medium pb-[2px] xl:pb-[8px]">{item.desc}</span>
                <div className="price max-sm:flex-col max-sm:gap-[2px] flex gap-[16px] justify-between font-semibold">
                  <span className="text-[20px] max-sm:mx-auto text-[#3A3A3A]">Rp {item.price}</span>
                  {item.oldPrice && (
                    <span className="text-[16px] max-sm:mx-auto text-[#B0B0B0] line-through font-normal">Rp {item.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Pagination */}
        <div className="flex justify-center gap-[20px] sm:gap-[28px] lg:gap-[38px] mt-[50px] sm:mt-[60px] mdl:mt-[70px] flex-wrap">
          {/* Previous Button - Responsive sizes */}
          {currentPage > 1 && (
            <button
              className="text-[14px] h-[40px] w-[60px] sm:text-[16px] sm:h-[45px] sm:w-[70px] lg:text-[18px] lg:h-[50px] lg:w-[80px] mdl:text-[20px] mdl:h-[60px] mdl:w-[98px] flex items-center justify-center hover:bg-[#B88E2F] rounded-[10px] bg-[#F9F1E7] font-light hover:text-white cursor-pointer"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          )}
          
          {/* Page Number Buttons - Responsive sizes */}
          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`text-[14px] h-[40px] w-[40px] sm:text-[16px] sm:h-[45px] sm:w-[45px] lg:text-[18px] lg:h-[50px] lg:w-[50px] mdl:text-[20px] mdl:h-[60px] mdl:w-[60px] rounded-[10px] font-medium hover:bg-[#B88E2F] hover:text-white cursor-pointer ${
                currentPage === number + 1 
                  ? 'bg-[#B88E2F] text-white' 
                  : 'bg-[#F9F1E7] text-black'
              }`}
            >
              {number + 1}
            </button>
          ))}
          
          {/* Next Button - Responsive sizes */}
          {currentPage < totalPages && (
            <button
              className="text-[14px] h-[40px] w-[60px] sm:text-[16px] sm:h-[45px] sm:w-[70px] lg:text-[18px] lg:h-[50px] lg:w-[80px] mdl:text-[20px] mdl:h-[60px] mdl:w-[98px] flex items-center justify-center hover:bg-[#B88E2F] rounded-[10px] bg-[#F9F1E7] font-light hover:text-white cursor-pointer"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
