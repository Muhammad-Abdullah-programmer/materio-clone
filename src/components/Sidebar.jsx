import React, { useState } from "react";



import {
  CiSearch,
  VscSettings,
  RiGraduationCapLine,
  TbMessages,
  LuSquareDashedMousePointer,
  LiaBookSolid,
  MdDateRange,
  CiCalendarDate,
  CiUser,
  IoLanguage,
  AiOutlineForm,
  AiFillDollarCircle,
  IoNewspaperOutline,
  IoSettingsSharp,
  IoStatsChart,
  MdOutlineWbSunny,
  FaRegStar,
  FaRegBell,
  FaUser,
  FaRegMoon,
  FaRegEnvelopeOpen,
  FaRegUser,
  FaGraduationCap,
  FaCarAlt,
  FaUnlockAlt,
  FaRegCheckSquare,
  SlScreenDesktop,
  SiSimpleanalytics,
  BiSolidDashboard,
  GoQuestion,
  IoIosLogOut,
  RiHomeSmileLine,
  PiShoppingCartSimple,
  RxCross2,
  FaCircleNotch,
  FiShoppingBag,
  CgUserList,
  CiDark,
  MdOutlineBookmarks,
  MdOutlineCircle,
  IoIosArrowDown,
  GoCircle,
  PiGreaterThanBold
} from "../assets/Icons";



const Sidebar = ({ dark, setDark }) => {

  const [showDashb, setshowDashb] = useState(false);
  const [isActive, setIsActive] = useState(0)

  const btnClicked = ()=>{

    setIsActive(!isActive)
  }

  const shoHideDash = () => {
    setshowDashb(prev => !prev);
  };

const [showfrontP, setshowfrontP] = useState(false)

  const shoHidefPage = ()=>{

    setshowfrontP(!showfrontP)
  }
  return (

   <div>

    
    {/* Side Bar  */}
    <div
      className={`side-bar absolute top-0 z-50 hidden md:block`}
    >
      <aside
        className={`${dark ? "bg-[#28243D] text-[#D4D1E9]" : "bg-[#F4F5FA] text-black"}  w-[33%]  flex flex-col gap-4 items-start   pr-4 hover:w-[100%] group  transition-all ease-in-out duration-300 h-[100vh] `}
      >
        {/* Menue  */}
        <div className="menue flex flex-col gap-4 ">
          {/* logo  */}

          <div className="logo  flex text-lg  items-center gap-3  overflow-hidden w-[33%] group-hover:w-[100%] transition-all ease-in-out duration-300   ">
            {" "}
            <span className="pl-4 text-[#8C57FF] text-2xl font-bold">M </span>
            <h1 className="text-black/60 text-2xl font-bold flex ">Abdullah</h1>
          </div>

          {/* Befor Hover  */}
          <div className=" group-hover:opacity-0  h-[90vh] flex flex-col justify-between">
            {/* Icon 1  */}

            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon  flex items-center  pl-1 hover:rounded-r-full w-[100%] `}
            >
              <span className="bg-[#E5E5EB] w-[32%]  rounded-r-2xl ">
                {" "}
                <RiHomeSmileLine className="text-3xl pl-2 text-black" />
              </span>
            </div>

            {/* Icon 2  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"}   icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}
            >
              <span>
                <MdOutlineBookmarks className="text-3xl pl-2  text-black " />
              </span>
            </div>

            {/* Icon 3  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}
            >
             <hr className="bg-gray-400 w-3 text-center ml-3"/>
            </div>

            {/* icon 4  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}
            >
              <span>
                {" "}
                <RiGraduationCapLine className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className="flex gap pl-2 w-[5%] hidden rounded-full group-hover:block "
              >
                {" "}
              </a>
            </div>

            {/* Icon 5  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}
            >
              <span>
                {" "}
                <FaCarAlt className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className={`flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block  `}
              >
                {" "}
              </a>
            </div>

            {/* Icon 6  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}
            >
              <span>
                <FaRegEnvelopeOpen className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "
              >
                {" "}
              </a>
            </div>

            {/* Icon 7  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}
            >
              <span>
                {" "}
                <TbMessages className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "
              >
                {" "}
              </a>
            </div>

            {/* Icon 8 */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}
            >
              <span>
                <MdDateRange className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "
              >
                {" "}
              </a>
            </div>

            {/* icon 9  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}
            >
              <span>
                {" "}
                <LuSquareDashedMousePointer className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className="flex gap pl-2 w-[5%] hidden rounded-full group-hover:block "
              >
                {" "}
              </a>
            </div>

            {/* icon 10  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}
            >
              <span>
                {" "}
                <LiaBookSolid className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className="flex gap pl-2 w-[5%] hidden rounded-full group-hover:block "
              >
                {" "}
              </a>
            </div>
          </div>
        </div>

        {/* After hover  */}
        <div className="after-hover hidden w-[0%] group-hover:w-[100%] group-hover:block   absolute top-15 left- transition-all ease-in-out duration-300">
          {/* Icon 1  */}
          <div
            // className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon  flex items-center pl-1 hover:rounded-r-full w-[100%] `}
          >
            <ul className="w-[100%]">

              <li className="">
                <div className="flex items-center gap-1 bg-[#E5E5EB] w-[100%] p-1  rounded-r-2xl ">
                <RiHomeSmileLine className="text-3xl pl-2 text-black" />{" "}
                Dashboard{" "}
                <span className="bg-red-500 rounded-full px-2 text-white text-xs">
                  5
                </span>{" "}
                <span>
                  <IoIosArrowDown  onClick={shoHideDash} className="text-xs"/>
                </span>

                </div>

                <ul className={` ${ showDashb ? "block" : "hidden"} mt-3 flex flex-col gap-2`} >
                  <li  onClick={()=> setIsActive(0)} className={` ${isActive  === 0 ? " bg-gradient-to-r from-[#C1A4FF] to-[#905DFF]" : "text-black "}  flex items-center gap-2 w-[100%] pl-3 rounded-r-2xl p-1`}><GoCircle className="text-xs"/> CRM</li>
                  <li  onClick={()=> setIsActive(1)} className={` ${isActive  === 1 ? " bg-gradient-to-r from-[#C1A4FF] to-[#905DFF]" : "text-black "}  flex items-center gap-2 w-[100%] pl-3 rounded-r-2xl p-1`}><GoCircle className="text-xs"/> Analytics</li>
                  <li  onClick={()=> setIsActive(2)} className={` ${isActive  === 2 ? " bg-gradient-to-r from-[#C1A4FF] to-[#905DFF]" : "text-black "}  flex items-center gap-2 w-[100%] pl-3 rounded-r-2xl p-1`}><GoCircle className="text-xs"/> CRM</li>
               
                </ul >

                {/* Front Page  */}
                
                  <li className="mt-2">
                <div className="flex items-center gap-1 bg-[#E5E5EB] w-[100%] p-1 rounded-r-2xl ">
                <LiaBookSolid className="text-3xl pl-2 text-black" />{" "}
                Front Page 
                
                <span className="pl-3 text-xs">
                  <PiGreaterThanBold  onClick={shoHidefPage}/>
                </span>

                </div> 

                 <ul className=    {` ${ showfrontP ? "block" : "hidden"} mt-3 flex flex-col gap-2`}  >
                  <li   className={`  flex items-center gap-2 w-[100%] pl-3 rounded-r-2xl p-1`}><GoCircle className="text-xs"/> Landing</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Pricing</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Payments</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Check Out</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Help Center</li>
                 
                  
                  
   
                  
      
                  
                </ul>

               </li> 
                  
                  
   
                  
      
                  
               

              </li>
            </ul>

            <hr  className="bg-gray-500 mt-12  relative"/>

            <p className="absolute -bottom-3 left-2 bg-[#F4F5FA]">Apps and Pages </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
);
 

}

export default Sidebar;
