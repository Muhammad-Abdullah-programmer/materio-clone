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
  const [isActive, setIsActive] = useState(false)

  const btnClicked = ()=>{

    setIsActive(!isActive)
  }

  const shoHideDash = () => {
    setshowDashb(prev => !prev);
  };

  return (

   <div>

    
    {/* Side Bar  */}
    <div
      className={`side-bar absolute top-0 z-50 hidden md:block   overflow-hidden`}
    >
      <aside
        className={`${dark ? "bg-[#28243D] text-[#D4D1E9]" : "bg-[#F4F5FA] text-black"}  w-[28%]  flex flex-col gap-4 items-start   shadow-2xl z-50 pr-4 hover:w-[100%] group  transition-all ease-in-out duration-300 `}
      >
        {/* Menue  */}
        <div className="menue flex flex-col gap-4 ">
          {/* logo  */}

          <div className="logo  flex text-lg justify-center items-center gap-3  ">
            {" "}
            <span className="pl-4 text-[#8C57FF] text-2xl font-bold">M </span>
            <h1 className="text-black/60 text-2xl font-bold flex">Abdullah</h1>
          </div>

          {/* Befor Hover  */}
          <div className=" group-hover:opacity-0 ">
            {/* Icon 1  */}

            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon  flex items-center pl-1 hover:rounded-r-full w-[100%] `}
            >
              <span>
                {" "}
                <RiHomeSmileLine className="text-3xl pl-2 text-black" />
              </span>
            </div>

            {/* Icon 2  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"}   icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}
            >
              <span>
                <MdOutlineBookmarks className="text-3xl pl-2  text-black" />
              </span>
            </div>

            {/* Icon 3  */}
            <div
              className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}
            >
              <span>
                <PiShoppingCartSimple className="text-3xl pl-2  text-black" />
              </span>{" "}
              <a
                href=""
                className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "
              >
                {" "}
              </a>
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
            <ul>

              <li className="">
                <div className="flex items-center gap-1">
                <RiHomeSmileLine className="text-3xl pl-2 text-black" />{" "}
                Dashboard{" "}
                <span className="bg-red-500 rounded-full px-2 text-white">
                  5
                </span>{" "}
                <span>
                  <IoIosArrowDown  onClick={shoHideDash}/>
                </span>

                </div>

                <ul className={` ${ showDashb ? "block" : "hidden"} mt-3 flex flex-col gap-2`} >
                  <li  onClick={btnClicked} className={` ${isActive ? " bg-gradient-to-r from-[#C1A4FF] to-[#905DFF]" : "text-black "}  flex items-center gap-2 w-[100%] pl-3 rounded-r-2xl p-1`}><GoCircle className="text-xs"/> CRM</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Analytics</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> eCommerece</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Academy</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Logistics</li>
                  <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><MdOutlineBookmarks className="text-xs"/> Front Page <PiGreaterThanBold/>
                  
                  
        {/* <div className="felx flex-col">
                    <ul className="flex gap-2">

                                      <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Logistics</li>
                                      <li   className= "  flex items-center gap-2 w-[100%] pl-3  p-1 rounded-r-2xl hover:bg-white"><GoCircle className="text-xs"/> Logistics</li>
                  </ul>
        </div> */}
                   </li>
      
                  
                </ul>

              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
);
 

}

export default Sidebar;
