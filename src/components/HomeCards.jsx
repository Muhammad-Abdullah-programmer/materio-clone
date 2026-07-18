import React from "react";
import "../assets/Style.css";
import ColumnChart from "./ColumnChart";

import {
  AiFillPieChart,
  FiUsers,
  IoTrendingUpOutline,
  BiBarChart,
  RiBarChartFill,
  LiaChartPieSolid,
  IoWalletOutline,
  FaCircle,
  GrDocumentPdf,
  FcBusinessman,
  AiOutlineDollar,
  RiFileWord2Fill,
  PiBagSimpleFill,
  LuCreditCard,
  FaRegCreditCard
} from "../assets/Icons";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import GrowthLine from "./GrowthLine";
import Footer from "./Footer";

const HomeCards = () => {
  return (

    <>
    <div className="grid  grid-cols-1 gap-12 md:gap-4 w-[100%] md:w-[95%] md:ml-15  md:grid-cols-2  mt-16  mx-auto   ">
  
  <div className="grid grid-cols-2 gap-4">
        {/* Card 1  */}
      <div className="card-1 col-span-1 bg-white flex items-center  relative py-4 min-h-[29vh] rounded-2xl shadow-2xl  ">
        <div className="text flex flex-col gap-4 pl-4  ">
          <p className="">Ratings</p>
          <p className="font-semibold text-2xl">
            13k{" "}
            <span className="text-xl text-[var(--green-colour)] font-normal">
              +15.6%
            </span>
          </p>
          <span className="text-[#8C57FF] bg-blue-400/40 rounded-3xl text-center w-[100%] px-2 py-1 text-sm font-semibold">
            Year of 2026
          </span>
        </div>

        <div className="image ">
          <img
            src="/1.png"
            alt=""
            className="absolute md:-top-10 -top-10 right-2 w-30 md:h-50 h-47  object-cover"
          />
        </div>
      </div>

      {/* Card 2  */}
      <div className="card-1 col-span-1 bg-white flex items-center gap-4 relative py-4 min-h-[29vh] rounded-2xl shadow-2xl  ">
        <div className="text flex flex-col gap-4 justify-evenly pl-4 ">
          <p className="">Sessions</p>
          <p className="font-semibold text-2xl">
            24.5k{" "}
            <span className="text-xl text-[#FF4C51] font-normal">-20%</span>
          </p>
          <span className="text-gray-500 bg-gray-300 rounded-3xl text-center w-[100%] px-2 py-1 text-sm font-semibold">
            Last Week
          </span>
        </div>

        <div className="image ">
          <img
            src="/2.png"
            alt=""
            className="absolute md:-top-10 -top-8 right-2 w-30 md:h-50 h-45  "
          />
        </div>
      </div>
  </div>

      {/* Card 3  */}
      <div className="card-1 col-span-1 bg-white flex flex-col gap-4 relative py-4 px-4 min-h-[29vh] rounded-2xl shadow-2xl  ">
        <div className="heading">
          <p className="text-lg font-semibold">Transections</p>
          <p className="text-sm">Total 48.5% Growth 😎 this month</p>
        </div>

        {/* Icons  */}
        <div className="icons flex flex-col md:flex-row md:justify-evenly gap-4 overflow-hidden">
          {/* First Icon  */}

          <div className="first-icon flex gap-2">
            <span className="bg-[#8C57FF] px-3 flex items-center justify-center text-2xl text-white  rounded">
              <AiFillPieChart />
            </span>
            <div className="text flex flex-col">
              <span>Sales</span>
              <span className="font-semibold">245K</span>
            </div>
          </div>

          {/* Second Icon  */}

          <div className="first-icon flex gap-2">
            <span className="bg-[#56CA00] px-3 flex items-center justify-center text-2xl text-white  rounded">
              <FiUsers />
            </span>
            <div className="text flex flex-col">
              <span>Users</span>
              <span className="font-semibold">12.5K</span>
            </div>
          </div>

          {/* Third Icon  */}
          <div className="first-icon flex gap-2">
            <span className="bg-[#FFB400] px-3 flex items-center justify-center text-2xl text-white  rounded">
              <FiUsers />
            </span>
            <div className="text flex flex-col">
              <span>Product</span>
              <span className="font-semibold">1.54K</span>
            </div>
          </div>
        </div>
      </div>




      <div className="grid grid-cols-2 gap-4">
        {/* Card 4 */}
        <div className="card-1 col-span-1 bg-white flex flex-col  gap-4 relative py-4  rounded-2xl shadow-2xl ">
          <div className="text flex flex-col pl-4 ">
            <p className="">Total Sales</p>
            <p className="font-semibold text-2xl">$21,845</p>
          </div>

          <div className="image flex flex-col  w-[100%]  ">
            <LineChart />
            <div className="Month flex justify-evenly">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Card 5  */}
        <div className="card-1 col-span-1 bg-white flex flex-col  gap-4 relative py-4 
 rounded-2xl shadow-2xl ">
          <div className="text flex flex-col pl-4 h-[100%]">
            <p className="">Revenue Report</p>
          </div>

          <ColumnChart />
        </div>
      </div>

      {/* Card 6  */}
      <div className="card-1  grid-cols-3  bg-white flex  items-center justify-center    relative rounded-2xl shadow-2xl ">
<div className="grid-cols-1 ">
  
        {/* Chart  */}
        <div className="chart w-[100%]  my-4">
                  <p className=" my-4 font-semibold text-center ">Sales Overview </p>

          <DonutChart />
        </div>
</div>

      <div className="grid-cols-1 ">
  {/* Text  */}
        <div className="text-heading flex flex-col  py-4 justify-between  gap-2 w-[100%] ">
          {/* icons  */}
          <div className="icons flex gap-4  my-5">
            <span className="bg-[#EDE4FF] p-1 rounded-xl text-3xl">
              <IoWalletOutline />
            </span>

            <div className="flex flex-col">
              <p className="text-sm">Number of Sales</p>
              <span className="font-bold">$86,400</span>
            </div>
          </div>

          {/* Child Parent div  */}
          <div className="text grid grid-cols-2 place-items-center pt-4 gap-4 w-[100%] border-t-1 ">
            {/* Child 1 */}

            <div className="div ">
              <p className="flex items-center gap-2">
                <FaCircle className="text-xs text-[#8C57FF]" /> Apparel
              </p>
              <span>$12,150</span>
            </div>

            {/* Second Child  */}
            <div className="div">
              <p className="flex items-center gap-2">
                <FaCircle className="text-xs text-[#8C57FF]" /> Apparel
              </p>
              <span>$12,150</span>
            </div>

            {/* Third Child  */}
            <div className="div">
              <p className="flex items-center gap-2">
                <FaCircle className="text-xs text-[#8C57FF]" /> Apparel
              </p>
              <span>$12,150</span>
            </div>

            {/* Forth Child  */}
            <div className="div">
              <p className="flex items-center gap-2">
                <FaCircle className="text-xs text-[#8C57FF]" /> Apparel
              </p>
              <span>$12,150</span>
            </div>
          </div>
        </div>
      </div>
      </div>

   {/* Grid for Row 3  */}
   <div className=" grid grid-cols-2 ">

    {/* Activity  */}
    <div className="col-span-2">
         {/* Card 7  */}
      <div className="card-7 flex flex-col py-4 min-h-[100%] bg-white items-center ">
        <div className="heading">
          <p className="font-bold tracking-wide my-6 ">Activity Timeline</p>

          {/* Text Div  */}
          <div className="text-div flex flex-col pb-2 gap-4 border-l-1 pl-6">
            {/* First Child  */}
            <div className=" relative first flex flex-col gap-2">
              <p className="font-semibold">12 Invoices have been paid</p>
              <span>Invoices have been paid to the company</span>
              <span className="flex items-center  gap-3   ">
                <GrDocumentPdf className="text-[#CB0606] text-2xl" />{" "}
                invoices.pdf
              </span>

              {/* Circle  */}
              <div className="circle absolute w-4 h-4 top-1 -left-8 bg-[#8C57FF] rounded-full "></div>
            </div>

            {/* Second Child  */}
            <div className=" relative first flex flex-col gap-2">
              <p className="font-semibold">Client Meeting</p>
              <span>Project meeting with john @10:15am</span>

              <div className="flex items-center  gap-2">
                <span className="bg-[#E0CFFE] rounded-full">
                  <FcBusinessman className="text-4xl" />
                </span>

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold">
                    Lester McCarthy (Client)
                  </span>
                  <span className="text-xs">CEO of ThemeSelection</span>
                </div>
              </div>

              {/* Circle  */}
              <div className="circle absolute w-4 h-4 top-1 -left-8 bg-[#56CA00] rounded-full "></div>
            </div>

            {/* Third Child  */}
            <div className="div relative ">
              <div className="first flex flex-col gap-2">
                <p className="font-semibold">Create a new project for client</p>
                <span>6 team members in a project</span>
              </div>

              {/* Circle  */}
              <div className="circle absolute w-4 h-4 top-1 -left-8 bg-[#16B1FF] rounded-full "></div>
            </div>
          </div>
        </div>
      </div>

    </div>
</div>

<div className="grid grid-cols-2 ">

<div className="col-span-1">
{/* Weekly Sales  */}
<div className="col-span-1">
 {/* Card 8  */}
      <div className="card-1  bg-white flex flex-col  gap-4 relative py-4  rounded-2xl shadow-2xl ">
        <div className="text flex flex-col pl-4 h-[100%]">
          <p className="font-semibold">Weekly Sales</p>
          <span className="text-sm">Total 85.4k Sales</span>
        </div>

        <ColumnChart />

        {/* icons  */}
        <div className="icons flex justify-around w-[100%]  ">
          {/* Child 1  */}
          <div className="child-1 flex gap-2">
            <span className="bg-[#8C57FF] px-3 flex items-center justify-center text-2xl text-white  rounded">
              <AiFillPieChart />
            </span>

            <div className="text flex flex-col">
              <span className="font-semibold">34.6k</span>
              <span>Sales</span>
            </div>
          </div>

          {/* Child 2 */}
          <div className="child-1 flex gap-2">
            <span className="bg-[#E4F6D6] px-3 flex items-center justify-center text-2xl text-white  rounded">
              <AiOutlineDollar className="text-[#56CA00]" />
            </span>

            <div className="text flex flex-col">
              <span className="font-semibold">$482k</span>
              <span>Total</span>
            </div>
          </div>
        </div>
      </div>
</div>

</div>

{/* demo..............  */}
<div className="col-span-1 flex flex-col items-center gap-4 ">

{/* Total Growth  */}
<div className=" flex flex-col items-center py-2 bg-white shadow-2xl w-[70%]">
<p className="text-2xl font-bold">42.5k</p>

 <GrowthLine />

 <p className="text-center">Total Growth</p>
</div>

{/* Total Growth  */}
<div className=" w-[70%] flex flex-col gap-4 bg-white shadow-2xl px-10 py-4 ">
<div className=" bg-[#8C57FF] w-10 text-white h-10 p-1 flex justify-center items-center rounded-full">
  <RiFileWord2Fill className="text-2xl"/>
</div>
<p>New Project</p>
<div className="flex">
  <p className="font-semibold text-2xl">862</p> <span className="text-red-500">-18%</span>
</div>
<span>Yearly Project</span>
</div>

</div>
</div>

     
     {/* Row 4 Started  */}
     <div className="flex">

      {/* Upgrade Plan  */}
      <div className=" flex flex-col gap-4 max-w-[75%] bg-white shadow-2xl px-4 py-4 ">

<p className="font-semibold">Upgrade Plan</p>
<span className="tracking-wide text-sm">Please make the payment to start enjoying all the features of our premium plan as soon as possible.</span>


{/* Platinum  */}
<div className="flex justify-between items-center bg-[#EDE4FF] py-4 px-4 ">

  <div className="image border-blue-500 border-1 rounded flex justify-center items-center py-2 px-3">
    <PiBagSimpleFill className="text-2xl text-[#9155FD]"/>
  </div>

  {/* Text  */}
  <div className="flex flex-col">
    <span className="font-semibold">Platinum</span>
    <span className="text-[#8C57FF]">Upgrade plan</span>

    
  </div>
  <p><span className="font-bold">$5,250</span>/Year</p>
</div>

{/* Payment Info Div  */}
<div className=" flex flex-col gap-4">

<p className="font-semibold">Payment Details</p>


{/* Credit Card  */}
<div className=" flex justify-between items-center px-4">
  <LuCreditCard className=" text-[#FF9900] text-3xl   "/>

  {/* Card info  */}
  <div className="flex flex-col">
    <p className="font-semibold">Credit Card</p>
    <span className="font-normal">2566 xxxx xxxx 8908</span>

  </div>

  {/* CVV  */}
  <div className="border-1 p-2">
    <span>CVV</span>
  </div>
</div>
<div className=" flex justify-between items-center px-4">
  <FaRegCreditCard className=" text-[#CC0000] text-3xl   "/>

  {/* Card info  */}
  <div className="flex flex-col">
    <p className="font-semibold">Credit Card</p>
    <span className="font-normal">8990 xxxx xxxx 6852</span>

  </div>

  {/* CVV  */}
  <div className="border-1 p-2">
    <span>CVV</span>
  </div>
</div>

</div>

{/* Input Types  */}
<div className="flex flex-col">

  <p className="font-semibold py-4 text-[#8C57FF]">Add Payment Method</p>
  <input type="text" placeholder="Email Address" className="border-1 border-gray-400 p-2 rounded  " />
  <button className="bg-[#8C57FF] text-white font-bold p-2 my-2 rounded">Contact Us</button>

</div>
      </div>

{/* Grid 2  */}
      <div className=" bg-blue-600 h-4">
        111111111
      </div>

      {/* Grid 3 */}
      <div className=" bg-cyan-400 h-4">
        2222222
      </div>
      </div>

      

    </div>

 <Footer/>

   </>
  );
};

export default HomeCards;
