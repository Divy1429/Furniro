import React, { useState } from 'react'
import whitesofa from "../../../assets/shop/whitesofa.png"
import whitesofa2 from "../../../assets/shop/whitesofa2.png"

const InDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  // Content for each tab
  const getContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <>
            <span className="text-[12px] sm:text-[14px] mdl:text-[16px] text-[#9F9F9F] w-full font-normal">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </span>
            <span className="text-[12px] sm:text-[14px] mdl:text-[16px] text-[#9F9F9F] font-normal">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
            </span>
          </>
        );
      
      case 'additional':
        return (
          <>
            <span className="text-[12px] sm:text-[14px] mdl:text-[16px] text-[#9F9F9F] w-full font-semibold mb-2 block">
              Product Specifications:
            </span>
            <div className="text-[11px] sm:text-[13px] mdl:text-[16px] text-[#9F9F9F] font-normal space-y-1 sm:space-y-2">
              <div><strong>Dimensions:</strong> 180cm x 85cm x 75cm</div>
              <div><strong>Material:</strong> Premium oak wood frame</div>
              <div><strong>Weight:</strong> 45kg</div>
              <div><strong>Color Options:</strong> Beige, Gray, Navy Blue</div>
              <div><strong>Warranty:</strong> 2 years manufacturer warranty</div>
              <div><strong>Assembly:</strong> Professional assembly included</div>
            </div>
          </>
        );
      
      case 'reviews':
        return (
          <div className="overflow-y-auto max-h-[150px] sm:max-h-[180px] mdl:max-h-[200px]">
            <span className="text-[12px] sm:text-[14px] mdl:text-[16px] text-[#9F9F9F] w-full font-semibold mb-2 block">
              Customer Reviews (5):
            </span>
            <div className="text-[10px] sm:text-[12px] mdl:text-[16px] text-[#9F9F9F] font-normal space-y-2">
              <div className="border-b border-gray-200 pb-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-500 text-[12px] sm:text-[14px] mdl:text-[16px]">★★★★★</span>
                  <span className="ml-2 font-medium">Sarah M.</span>
                </div>
                <p>"Great quality and comfortable sofa!"</p>
              </div>
              
              <div className="border-b border-gray-200 pb-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-500 text-[12px] sm:text-[14px] mdl:text-[16px]">★★★★★</span>
                  <span className="ml-2 font-medium">John D.</span>
                </div>
                <p>"Fast delivery and excellent packaging."</p>
              </div>
              
              <div className="border-b border-gray-200 pb-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-500 text-[12px] sm:text-[14px] mdl:text-[16px]">★★★★☆</span>
                  <span className="ml-2 font-medium">Emily R.</span>
                </div>
                <p>"Very stylish and matches perfectly."</p>
              </div>
              
              <div className="border-b border-gray-200 pb-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-500 text-[12px] sm:text-[14px] mdl:text-[16px]">★★★★★</span>
                  <span className="ml-2 font-medium">Mike T.</span>
                </div>
                <p>"Comfortable for hours of use."</p>
              </div>
              
              <div className="pb-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-500 text-[12px] sm:text-[14px] mdl:text-[16px]">★★★★★</span>
                  <span className="ml-2 font-medium">Lisa K.</span>
                </div>
                <p>"Worth every penny! Highly recommend."</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-screen min-h-[500px] sm:min-h-[600px] mdl:min-h-[744px] border border-[#D9D9D9] flex justify-center">
      <div className="w-full min-h-[500px] sm:min-h-[600px] mdl:min-h-[744px] border border-[#D9D9D9] flex flex-col items-center pb-4 sm:pb-6 mdl:pb-8">
        
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[32px] mdl:gap-[52px] mb-[20px] sm:mb-[30px] mdl:mb-[37px] mt-[24px] sm:mt-[36px] mdl:mt-[48px] px-4">
          <button  
            className={`text-[16px] sm:text-[20px] mdl:text-[24px] font-medium transition-colors duration-200 ${
              activeTab === 'description' ? 'text-black' : 'text-[#9F9F9F] hover:text-[#666666]'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button  
            className={`text-[16px] sm:text-[20px] mdl:text-[24px] font-medium transition-colors duration-200 ${
              activeTab === 'additional' ? 'text-black' : 'text-[#9F9F9F] hover:text-[#666666]'
            }`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Information
          </button>
          <button  
            className={`text-[16px] sm:text-[20px] mdl:text-[24px] font-medium transition-colors duration-200 ${
              activeTab === 'reviews' ? 'text-black' : 'text-[#9F9F9F] hover:text-[#666666]'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews [5]
          </button>
        </div> 

        {/* Dynamic Content Area */}
        <div className="flex flex-col gap-[15px] sm:gap-[25px] mdl:gap-[30px] max-w-[300px] sm:max-w-[600px] mdl:max-w-[1026px] w-full min-h-[120px] sm:min-h-[160px] mdl:min-h-[200px] mb-[20px] sm:mb-[30px] mdl:mb-[40px] px-4">
          {getContent()}
        </div>

        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[20px] mdl:gap-[29px] px-4 max-w-full">
          <div className="flex items-center justify-center max-w-full sm:max-w-[280px] mdl:max-w-[605px] bg-[#F9F1E7] w-full h-[200px] sm:h-[250px] mdl:h-[348px]">
            <img src={whitesofa} alt="" className="object-contain w-full h-full p-2 sm:p-3 mdl:p-4" />
          </div>

          <div className="flex items-center justify-center max-w-full sm:max-w-[280px] mdl:max-w-[605px] bg-[#F9F1E7] w-full h-[200px] sm:h-[250px] mdl:h-[348px]">
            <img src={whitesofa2} alt="" className="object-contain w-full h-full p-2 sm:p-3 mdl:p-4" />
          </div>
        </div>
        
      </div>  
    </div>
  )
}

export default InDetails
