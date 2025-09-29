import React, { useState } from 'react'
import BackgroundWrapper from './../Back-image/BackgroundWrapper';

const CheckoutDetails = () => {
  const [choice, setChoice] = useState('1');

  return (
    <div className="checkout-container  h-full w-full max-w-full  flex items-center justify-center sxl:mx-0 px-[10px] sxl:my-0 py-[10px] ">
        <div className="flex flex-col   max-sxl:items-center  sxl:flex-row  min-h-[1714px] h-full w-full gap-[30px] max-w-[1242px] mt-[63px] mb-[52px] ">
          
           <div className="flex flex-col items-start max-sxl:items-center  max-w-[817px] w-full  min-h-[1714px] h-full gap-[30px]">
            <div className="flex flex-col gap-[36px] items-start max-sxl:items-center max-w-[608px] w-full h-full min-h-[1714px]">
                <span className="text-[36px] font-semibold">Billing details</span>
                <div className="flex gap-[31px] items-start max-sxl:items-center max-sxl:flex-col w-full h-full">
                    <div className="flex flex-1 flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">First Name</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>
                    <div className="flex flex-1 flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Last Name</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>
                </div>
                <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Company Name (Optional)</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>
                    <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Country / Region</span>
                    <div className="border flex items-center justify-between px-4 border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal">
                     
                        <span className="text-[16px] text-[#9F9F9F] font-medium">Sri Lanka</span>
                  <button className="cursor-pointer" >
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="black"/>
                    </svg>

                    </button>
                    </div>
                     </div>

                     <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Street address</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>

                    <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Town / City</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>

                    <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Province</span>
                    <div className="border flex items-center justify-between px-4 border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal">
                     
                        <span className="text-[16px] text-[#9F9F9F] font-medium">Western Province</span>
                  <button className="cursor-pointer" >
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="black"/>
                    </svg>

                    </button>
                    </div>
                     </div>

                     <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">ZIP code</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>

                    <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Phone</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>

                    <div className="flex flex-col gap-[22px] w-full"> 
                    <span className="text-[16px] font-medium">Email address</span>
                    <input type="text" className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>

                    <div className="flex gap-[22px] mt-[44px] w-full"> 
                    <input type="text" placeholder="Additional information" className="pl-[29px] border border-[#9F9F9F] rounded-[10px] h-[75px] w-full text-[16px] font-normal" />
                    </div>


            </div>


           </div>
            

              <div className="flex items-center justify-center max-w-[608px] min-h-[789px] w-full h-full ">
                <div className="flex flex-col justify-between max-w-[533px] min-h-[616px] w-full h-full ">
              <div className="flex flex-row justify-between w-full max-w-[608px] h-full  ">
                    <div className="flex flex-col items-start gap-[22px] max-sxl:flex-1">
                        <span className="text-[24px] font-medium text-wrap">Product</span>
                        <div className="flex" >
                        <span className="text-[16px] text-[#9F9F9F] pr-[11px] text-wrap font-medium">Asgaard sofa </span>
                        <span className="text-[16px] pr-[11px] text-wrap font-medium">X</span>
                        <span className="text-[16px] text-wrap font-medium">1</span>
                        </div>
                        <span className="text-[16px] font-medium text-wrap">Subtotal</span>
                         <span className="text-[16px] font-medium text-wrap">Total</span>
                    </div>

                    <div className="flex flex-col items-end gap-[22px] max-sxl:flex-1">
                        <span className="text-[24px] font-medium text-wrap">Subtotal</span>
                       
                       <span className="text-[16px]  text-wrap font-light">Rs. 250,000.00</span>
                        <span className="text-[16px]  text-wrap font-light">Rs. 250,000.00</span>

                        <span className="text-[24px] text-[#B88E2F] text-wrap font-bold">Rs. 250,000.00</span>
                    </div>
                   </div>
                            
                    <div className="border-t w-full max-w-[527px] mt-[33px] border-[#9F9F9F] ">


                {/* Radio Group Section */}
                <div className="flex flex-col gap-[20px] mt-[24px] w-full max-w-[527px]">
                  
                  {/* Option 1 */}
                  <label className="flex flex-col gap-[15px] cursor-pointer">
                    <div className="flex items-center gap-[15px]">
                      <input
                        type="radio"
                        name="choice"
                        value="1"
                        checked={choice === '1'}
                        onChange={(e) => setChoice(e.target.value)}
                         className="appearance-none w-[14px] h-[14px] rounded-full border border-[#9F9F9F] bg-white
         checked:bg-black checked:border-black
         focus:outline-none  focus:ring-black"   />
                      <span className="text-[16px] font-medium">Direct Bank Transfer</span>
                    </div>
                    <p className="text-[16px] font-light text-[#9F9F9F] ">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  </label>

                  {/* Option 2 */}
                  <label className="flex flex-col gap-[15px] cursor-pointer">
                    <div className="flex items-center gap-[15px]">
                      <input
                        type="radio"
                        name="choice"
                        value="2"
                        checked={choice === '2'}
                        onChange={(e) => setChoice(e.target.value)}
                        className="appearance-none w-[14px] h-[14px] rounded-full border border-[#9F9F9F] bg-white
         checked:bg-black checked:border-black
         focus:outline-none  focus:ring-black"  />
                      <span className="text-[16px]  text-[#9F9F9F] font-light">Cash on Delivery</span>
                    </div>
                   
                  </label>

                  {/* Option 3 */}
                  <label className="flex flex-col gap-[15px] cursor-pointer">
                    <div className="flex items-center gap-[15px]">
                      <input
                        type="radio"
                        name="choice"
                        value="3"
                        checked={choice === '3'}
                        onChange={(e) => setChoice(e.target.value)}
                       className="appearance-none w-[14px] h-[14px] rounded-full border border-[#9F9F9F] bg-white
         checked:bg-black checked:border-black
         focus:outline-none  focus:ring-black" />
                      <span className="text-[16px]  text-[#9F9F9F] font-light">Credit Card</span>
                    </div>
                    
                  </label>

                </div>
               
 
 <div className="flex flex-col mt-[22px] font-semibold items-center justify-center">
                <div>
                <span className="text-[16px] font-light  ">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our </span>
                <span>privacy policy.</span>
                </div>
                </div>
                <div className="flex mt-[39px] items-center justify-center">
                <button className="flex w-full max-w-[318px] h-[64px] text-[20px] rounded-[15px] border hover:bg-[#B88E2F] hover:border-[#B88E2F] hover:text-white text-normal items-center justify-center cursor-pointer">Place Order</button>
                  </div> 
                   </div>  
              
                   
                </div>
            </div>
            </div>
            
    </div>
  )
}

export default CheckoutDetails