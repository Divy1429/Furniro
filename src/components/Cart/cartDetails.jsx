import asgaardSofa from "../../assets/Shop/asgaardsofa.png";

const CartDetails = () => {
  return (
    <div className="cart-container min-h-[525px] h-full w-full max-w-full flex items-center justify-center sxl:mx-0 px-[10px] sxl:my-0 my-[10px] mb-[22px]">
      <div className="flex flex-col items-start max-sxl:items-center  sxl:flex-row  min-h-[390px] h-full w-full gap-[30px] max-w-[1240px] mx-auto my-auto">
      
      <div className="flex overflow-x-scroll lg:overflow-x-hidden flex-col max-w-[817px] w-full  h-full ">
       <div className="flex w-[817px] items-center h-[55px]  bg-[#F9F1E7]   text-[16px] font-medium">
          <div className="flex  pl-[142px] pr-[114px]">
            <span>Product</span>
            </div>
            <div> <span>Price</span></div>
           
          <div className="flex gap-[36px] pl-[137px]">
             <span>Quantity</span><span>Subtotal</span>
          </div>
         
        </div>

        <div className="flex items-center  mt-[55px] w-[817px]  h-full">
          <div className="flex w-[105px] items-center h-[105px] bg-[#F9F1E7] rounded-[10px]  text-[16px] font-medium">
            <img src={asgaardSofa} alt="" className="object-fit w-full h-full rounded-[10px]" />
            </div>
            <div className="flex  pl-[30px]"> 

            <div className=" flex   gap-[69px]  text-[#9F9F9F] font-normal ">
              <span>Asgaard Sofa</span>
              <span>Rs. 250,000.00</span>
             </div>
             <div className="pl-[84px] pr-[52.5px]  flex gap-[56px] ">
              <button className=" h-[32px] w-[32px] border rounded-[5px] border-[#9F9F9F] text-[16px] font-normal cursor-pointer">1</button>
              <span>Rs. 250,000.00</span>
             </div>
             <div className=" cursor-pointer">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z" fill="#B88E2F"/>
</svg>

             </div>
            </div>
              </div>
        </div>
        

        <div className="flex flex-col items-center   bg-[#F9F1E7] max-w-[393px] min-h-[390px] w-full h-full ">
           <span className="text-[32px] mt-[15px] text-wrap font-semibold">Cart Totals</span>
            <div className="flex justify-between mt-[55px] gap-[62px]">
              <span className="text-[16px] font-medium text-wrap">Subtotal</span>
              <span className="text-[16px] font-normal text-wrap text-[#9F9F9F]">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mt-[31px] gap-[58px]">
              <span className="text-[16px] font-medium text-wrap">Total</span>
              <span className="text-[20px] font-medium text-wrap text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
            <button className="mt-[42px] flex w-[222px]  h-[59px]    text-[20px] rounded-[15px] border hover:bg-[#B88E2F] hover:border-[#B88E2F] hover:text-white items-center justify-center cursor-pointer">Check Out</button>
          </div>

      </div> 
      </div>
   
  );
};

export default CartDetails;
     