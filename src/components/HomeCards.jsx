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
  FcBusinessman
} from "../assets/Icons";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";

const HomeCards = () => {
  return (
    <div className="grid  grid-cols-1 gap-12 md:gap-4 w-[100%] md:w-[95%] md:ml-15  md:grid-cols-3  mt-16  mx-auto   ">
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

      {/* Card 4 */}
      <div className="card-1 col-span-1 bg-white flex flex-col  gap-4 relative py-4 min-h-[29vh] rounded-2xl shadow-2xl ">
        <div className="text flex flex-col pl-4 h-[100%]">
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
      <div className="card-1 col-span-1 bg-white flex flex-col  gap-4 relative py-4 min-h-[29vh] rounded-2xl shadow-2xl ">
        <div className="text flex flex-col pl-4 h-[100%]">
          <p className="">Revenue Report</p>
        </div>

        <ColumnChart />
      </div>

      {/* Card 6  */}
      <div className="card-1 col-span-1 overflow-hidden overflow-y-hidden bg-white flex flex-col items-center justify-center    relative  min-h-[29vh] rounded-2xl shadow-2xl ">

        <p className="text-left my-4 font-semibold">Sales Overview </p>
        {/* Chart  */}
        <div className="chart w-[100%]">
          <DonutChart />
        </div>

        {/* Text  */}
        <div className="text-heading flex flex-col px-4 py-4 justify-between  gap-2 w-[100%] border-t-1">

          {/* icons  */}
          <div className="icons flex gap-4 ml-8 my-5">
            <span className="bg-[#EDE4FF] p-1 rounded-xl text-3xl">
              <IoWalletOutline />
            </span>

            <div className="flex flex-col">
              <p className="text-sm">Number of Sales</p>
              <span className="font-bold">$86,400</span>
            </div>
          </div>

          {/* Child Parent div  */}
          <div className="text grid grid-cols-2 place-items-center gap-4 w-[100%]  ">

           
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

      {/* Card 7  */}
      <div className="card-7 flex flex-col bg-white items-center ">

        <div className="heading">
          <p className="font-bold tracking-wide my-6 ">Activity Timeline</p>

{/* Text Div  */}
          <div className="text-div flex flex-col pb-2 gap-4 border-l-1 pl-6">

{/* First Child  */}
<div className=" relative first flex flex-col gap-2">
  <p className="font-semibold">12 Invoices have been paid</p>
  <span>Invoices have been paid to the company</span>
  <span className="flex items-center  gap-3   "><GrDocumentPdf className="text-[#CB0606] text-2xl"/> invoices.pdf</span>

{/* Circle  */}
  <div className="circle absolute w-4 h-4 top-1 -left-8 bg-[#8C57FF] rounded-full ">

  </div>
</div>

{/* Second Child  */}
<div className=" relative first flex flex-col gap-2">
  <p className="font-semibold">Client Meeting</p>
  <span>Project meeting with john @10:15am</span>

  <div className="flex items-center  gap-2">
    <span className="bg-[#E0CFFE] rounded-full"><FcBusinessman className="text-4xl"/></span>

    <div className="flex flex-col">
<span className="text-sm font-bold">Lester McCarthy (Client)</span>
<span className="text-xs">CEO of ThemeSelection</span>
    </div>
  </div>

  {/* Circle  */}
  <div className="circle absolute w-4 h-4 top-1 -left-8 bg-[#56CA00] rounded-full ">

  </div>
</div>

{/* Third Child  */}
<div className="div relative ">
  <div className="first flex flex-col gap-2">
  <p className="font-semibold">Create a new project for client</p>
  <span>6 team members in a project</span>
</div>

  {/* Circle  */}
  <div className="circle absolute w-4 h-4 top-1 -left-8 bg-[#16B1FF] rounded-full ">

  </div>
</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeCards;
