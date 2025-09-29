import React, { useState } from 'react'
import sofaset from "../../../assets/shop/sofaset.png"
import outdoorsofa from "../../../assets/shop/outdoorsofa.png"
import stusofa from "../../../assets/shop/stusofa.png"
import threesofa from "../../../assets/shop/threesofa.png"
import asgaardsofa from "../../../assets/shop/asgaardsofa.png"
import { useCart } from '../../Context/CartContext';


const DesDetails = () => {
  // State for managing main image and thumbnail images
  const [mainImage, setMainImage] = useState(asgaardsofa);
  const { addToCart, isCartOpen } = useCart(); // Add isCartOpen from context


  // Product data
  const product = {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    image: asgaardsofa
  };


  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };


  const [thumbnails, setThumbnails] = useState([
    sofaset, 
    outdoorsofa, 
    stusofa, 
    threesofa
  ]);


  // Function to handle thumbnail click and swap images
  const handleThumbnailClick = (clickedImage) => {
    // Update thumbnails array: replace clicked image with current main image
    setThumbnails(thumbnails.map(img => (img === clickedImage ? mainImage : img)));
    // Set clicked image as new main image
    setMainImage(clickedImage);
  };


  return (
    <div className="w-full max-sm:px-[10px] min-h-[820px] mdl:min-h-[820px] h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mdl:px-0">
      <div className="container-div max-w-[1241px] w-full min-h-[730px] mdl:max-h-[730px] h-full mt-[20px] sm:mt-[25px] mdl:mt-[35px] flex flex-col lg:flex-row mdl:flex-row justify-start gap-6 lg:gap-8 mdl:gap-0">
        
        {/* Images Section */}
        <div className="2div-parent max-w-[607px] w-full max-h-[500px] mdl:max-h-[500px] h-full flex flex-col sm:flex-row mdl:flex-row gap-4 sm:gap-6 mdl:gap-[31px]">
          
          {/* Thumbnail Images */}
          <div className="four-img flex sm:flex-col mdl:flex-col max-w-full sm:max-w-[76px] mdl:max-w-[76px] w-full max-h-[100px] sm:max-h-[416px] mdl:max-h-[416px] h-full gap-4 sm:gap-6 mdl:gap-[32px] justify-center sm:justify-between mdl:justify-between overflow-x-auto sm:overflow-visible mdl:overflow-visible">
            {thumbnails.map((img, idx) => (
              <div 
                key={idx}
                className="min-w-[60px] sm:w-[76px] mdl:w-[76px] h-[60px] sm:h-[80px] mdl:h-[80px] bg-[#F9F1E7] flex items-center justify-center rounded-[8px] sm:rounded-[10px] mdl:rounded-[10px] cursor-pointer hover:border-2 hover:border-[#B88E2F] border-2 border-transparent transition-all duration-200"
                onClick={() => handleThumbnailClick(img)}
              >
                <img src={img} alt={`thumbnail-${idx}`} className="w-full h-full object-contain p-2" />
              </div>
            ))}
          </div>


          {/* Main Image */}
          <div className="big-pic max-w-[423px] w-full min-h-[300px] sm:min-h-[400px] mdl:min-h-[500px] h-full flex items-center rounded-[8px] sm:rounded-[10px] mdl:rounded-[10px] bg-[#F9F1E7]">
            <img src={mainImage} alt="main-image" className="object-contain h-full w-full p-4" />
          </div>
        </div>
        
        {/* Product Details Section */}
        <div className="w-full lg:w-[606px] mdl:w-[606px] h-full mdl:h-[730px] flex flex-col">
          
          {/* Title and Price */}
          <div className="flex flex-col gap-[0px]">
            <span className="text-[28px] sm:text-[35px] mdl:text-[42px] font-normal">Asgaard sofa</span> 
            <span className="text-[20px] sm:text-[22px] mdl:text-[24px] font-medium text-[#9F9F9F]">Rs. 250,000.00</span> 
          </div>
          
          {/* Rating */}
          <div className="flex items-center mt-[8px] sm:mt-[10px] mdl:mt-[10px]">
            <div className="svg-div flex gap-[4px] sm:gap-[6px] mdl:gap-[6px] mr-[15px] sm:mr-[18px] mdl:mr-[18px]">
              <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px] mdl:w-[20px] mdl:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
              </svg>
              <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px] mdl:w-[20px] mdl:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
              </svg>
              <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px] mdl:w-[20px] mdl:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
              </svg>
              <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px] mdl:w-[20px] mdl:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
              </svg>
            </div>
            <div className="brake mr-[18px] sm:mr-[22px] mdl:mr-[22px]">
              <svg width="1" height="25" className="sm:h-[28px] mdl:h-[30px]" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="30" stroke="#9F9F9F"/>
              </svg>
            </div>
            <span className="text-[11px] sm:text-[12px] mdl:text-[13px] text-[#9F9F9F] font-normal">5 Customer Review</span> 
          </div>
          
          {/* Description */}
          <span className="text-[11px] sm:text-[12px] mdl:text-[13px] mt-[10px] sm:mt-[13px] mdl:mt-[13px] font-normal leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </span>    
          
          {/* Size Selection */}
          <div className="flex flex-col gap-[8px] sm:gap-[12px] mdl:gap-[12px] mt-[18px] sm:mt-[22px] mdl:mt-[22px]">
            <span className="text-[12px] sm:text-[13px] mdl:text-[14px] text-[#9F9F9F] font-normal">Size</span>
            <div className="flex gap-[12px] sm:gap-[16px] mdl:gap-[16px]">
              <button className="text-[11px] sm:text-[12px] mdl:text-[13px] h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] mdl:h-[30px] mdl:w-[30px] border border-[#FFFFFF] hover:border-[#B88E2F] text-[#FFFFFF] bg-[#B88E2F] rounded-[4px] font-normal">L</button>
              <button className="text-[11px] sm:text-[12px] mdl:text-[13px] h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] mdl:h-[30px] mdl:w-[30px] hover:bg-[#B88E2F] hover:text-[#FFFFFF] bg-[#F9F1E7] rounded-[4px] font-normal">XL</button>
              <button className="text-[11px] sm:text-[12px] mdl:text-[13px] h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] mdl:h-[30px] mdl:w-[30px] hover:bg-[#B88E2F] hover:text-[#FFFFFF] bg-[#F9F1E7] rounded-[4px] font-normal">XS</button>
            </div>
          </div> 


          {/* Color Selection */}
          <div className="flex flex-col gap-[8px] sm:gap-[12px] mdl:gap-[12px] mt-[18px] sm:mt-[22px] mdl:mt-[22px]">
            <span className="text-[12px] sm:text-[13px] mdl:text-[14px] text-[#9F9F9F] font-normal">Color</span>
            <div className="flex gap-[12px] sm:gap-[16px] mdl:gap-[16px]">
              <button className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] mdl:h-[30px] mdl:w-[30px] bg-[#816DFA] rounded-[50px] hover:ring-2 hover:ring-[#816DFA] hover:ring-offset-2"></button>
              <button className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] mdl:h-[30px] mdl:w-[30px] bg-[#000000] rounded-[50px] hover:ring-2 hover:ring-[#000000] hover:ring-offset-2"></button>
              <button className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] mdl:h-[30px] mdl:w-[30px] bg-[#B88E2F] rounded-[50px] hover:ring-2 hover:ring-[#B88E2F] hover:ring-offset-2"></button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row mdl:flex-row w-full gap-3 sm:gap-4 mdl:gap-0 mdl:max-h-[64px] min-h-[64px] h-full mt-[24px] sm:mt-[32px] mdl:mt-[32px]">
            <div className="text-[14px] sm:text-[16px] mdl:text-[16px] mdl:mr-[18px] flex gap-[20px] sm:gap-[35px] mdl:gap-[35px] items-center justify-center max-w-full sm:max-w-[123px] mdl:max-w-[123px] w-full h-[50px] sm:h-full mdl:h-full min-h-[64px] max-h-full mdl:max-h-[64px] border border-[#9F9F9F] hover:border-[#B88E2F] rounded-[8px] sm:rounded-[10px] mdl:rounded-[10px] font-normal">
              <button>-</button><button>1</button><button>+</button>
            </div>
            <button onClick={handleAddToCart} className="text-[14px] sm:text-[16px] mdl:text-[16px] mdl:mr-[10px] flex items-center justify-center max-w-full sm:max-w-[215px] mdl:max-w-[215px] w-full h-[50px] sm:h-full mdl:h-full max-h-[64px] mdl:max-h-[64px] border min-h-[64px] max-h-full hover:bg-[#B88E2F] hover:border-[#B88E2F] rounded-[8px] sm:rounded-[10px] mdl:rounded-[10px] font-normal">
              Add To Cart
            </button>
            <button className="text-[14px] sm:text-[16px] mdl:text-[16px] flex items-center justify-center max-w-full sm:max-w-[215px] mdl:max-w-[215px] w-full h-[50px] sm:h-full mdl:h-full max-h-[64px] mdl:max-h-[64px] border hover:bg-[#B88E2F] min-h-[64px] max-h-full hover:border-[#B88E2F] rounded-[8px] sm:rounded-[10px] mdl:rounded-[10px] font-normal">
              + Compare
            </button>
          </div>
          
          {/* Divider Line */}
          <div className="w-full max-w-[605px] mdl:w-[605px] h-[1px] bg-gray-300 mt-[40px] sm:mt-[60px] mdl:mt-[60px]"></div>


          {/* Product Details */}
          <div className="below-texts mb-[30px] lg:mb-0 mt-[30px] sm:mt-[41px] mdl:mt-[41px] flex flex-col gap-[8px] sm:gap-[12px] mdl:gap-[12px]">
            <div className="flex">
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[40px] sm:mr-[61px] mdl:mr-[61px]  font-normal text-[#9F9F9F]">SKU</span>
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[12px] mdl:mr-[12px] font-normal text-[#9F9F9F]">:</span>
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] font-normal text-[#9F9F9F]">SS001</span>
            </div>
            
            <div className="flex">
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[8px] sm:mr-[16px] mdl:mr-[16px] font-normal text-[#9F9F9F]">Category</span>
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[12px] mdl:mr-[12px] font-normal text-[#9F9F9F]">:</span>
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] font-normal text-[#9F9F9F]">Sofas</span>
            </div>


            <div className="flex">
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[35px] sm:mr-[52px] mdl:mr-[52px] font-normal text-[#9F9F9F]">Tags</span>
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[12px] mdl:mr-[12px] font-normal text-[#9F9F9F]">:</span>
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] font-normal text-[#9F9F9F]">Sofa, Chair, Home, Shop</span>
            </div>


            <div className="flex items-center">
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[30px] sm:mr-[44px] mdl:mr-[44px] font-normal text-[#9F9F9F]">Share</span>
              <span className="text-[14px] sm:text-[16px] mdl:text-[16px] mr-[12px] mdl:mr-[12px] font-normal text-[#9F9F9F]">:</span>
              <div className="facebook flex gap-[15px] sm:gap-[25px] mdl:gap-[25px]">
                <svg width="18" height="18" className="sm:w-[20px] sm:h-[20px] mdl:w-[20px] mdl:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_0_859)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_0_859">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>


                <svg width="18" height="18" className="sm:w-[20px] sm:h-[20px] mdl:w-[20px] mdl:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_0_863)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.833252 2.36504C0.833252 1.95882 0.994624 1.56923 1.28187 1.28199C1.56911 0.994748 1.9587 0.833376 2.36492 0.833376H17.6333C17.8346 0.833047 18.034 0.872428 18.22 0.949265C18.4061 1.0261 18.5752 1.13888 18.7176 1.28116C18.8601 1.42343 18.973 1.5924 19.0501 1.77838C19.1271 1.96437 19.1667 2.16373 19.1666 2.36504V17.6334C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5754 18.7183 18.7178C18.5759 18.8602 18.4069 18.9732 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.1271 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5755 1.02653 18.4065 0.949604 18.2206C0.87268 18.0347 0.833143 17.8354 0.833252 17.6342V2.36504ZM8.08992 7.82338H10.5724V9.07004C10.9308 8.35338 11.8474 7.70838 13.2249 7.70838C15.8658 7.70838 16.4916 9.13588 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0184 12.5508 10.0184C11.2883 10.0184 10.7633 10.9259 10.7633 12.3517V16.6067H8.08992V7.82338ZM3.50659 16.4925H6.17992V7.70838H3.50659V16.4917V16.4925ZM6.56242 4.84338C6.56746 5.07227 6.52673 5.29987 6.44262 5.5128C6.35851 5.72574 6.23271 5.91974 6.07261 6.0834C5.91251 6.24707 5.72133 6.3771 5.5103 6.46588C5.29926 6.55466 5.07262 6.60039 4.84367 6.60039C4.61472 6.60039 4.38808 6.55466 4.17704 6.46588C3.966 6.3771 3.77483 6.24707 3.61473 6.0834C3.45463 5.91974 3.32883 5.72574 3.24472 5.5128C3.16061 5.29987 3.11988 5.07227 3.12492 4.84338C3.13481 4.39409 3.32024 3.96654 3.64149 3.65228C3.96274 3.33803 4.39427 3.16206 4.84367 3.16206C5.29307 3.16206 5.7246 3.33803 6.04585 3.65228C6.3671 3.96654 6.55253 4.39409 6.56242 4.84338Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_0_863">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>


                <svg width="20" height="20" className="sm:w-[23px] sm:h-[23px] mdl:w-[25px] mdl:h-[25px]" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default DesDetails
