import React from 'react'

import {CiSearch,VscSettings, CiCalendarDate, CiUser,IoLanguage, AiOutlineForm, AiFillDollarCircle, IoNewspaperOutline, IoSettingsSharp, IoStatsChart,MdOutlineWbSunny,FaRegStar,FaRegBell, FaUser , FaRegMoon, FaRegEnvelopeOpen , FaRegUser, FaGraduationCap , FaCarAlt, FaUnlockAlt, FaRegCheckSquare ,SlScreenDesktop,SiSimpleanalytics,BiSolidDashboard,GoQuestion,IoIosLogOut, RiHomeSmileLine,PiShoppingCartSimple,RxCross2,FaCircleNotch,FiShoppingBag,CgUserList,CiDark,MdOutlineBookmarks,MdOutlineCircle,IoIosArrowDown} from '../assets/Icons'

const Sidebar = ({dark,setDark}) => {
  return (
    <div>
        {/* Side Bar  */}
  <div className={`side-bar absolute top-0 z-50 hidden md:block   overflow-hidden`}>
 <aside className={`${dark ? "bg-[#28243D] text-[#D4D1E9]" : "bg-[#F4F5FA] text-black"} overflow-hidden w-[28%] py-2 flex flex-col gap-4 items-start   shadow-2xl z-50 pr-4 hover:w-[100%] group  transition-all ease-in-out duration-300 `}>
  
  {/* Menue  */}
  <div className="menue flex flex-col gap-4">
      {/* logo  */}

      <div className="logo  flex text-lg justify-center items-center gap-3  "> <span className='pl-4 text-[#8C57FF] text-2xl font-bold'>M </span><h1 className='text-black/60 text-2xl font-bold flex'>Abdullah</h1>
      </div>



{/* <div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"}  icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
 <span> <RiHomeSmileLine className="text-3xl pl-2  text-black group-hover:hidden"/></span> <a href="" className={`flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block  `}> Home</a>
</div> */}

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} group-hover icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
  <span><MdOutlineBookmarks className="text-3xl pl-2 group-hover:hidden  text-black"/></span> 
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}>
 <span> <RiHomeSmileLine
  className="text-3xl pl-2  text-black"/></span> <a href="" className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "> Analytics</a>
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}>
  <span><PiShoppingCartSimple  className="text-3xl pl-2  text-black"/></span> <a href="" className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "> eCommerece</a>
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
 <span> <FaCarAlt  className="text-3xl pl-2  text-black"/></span> <a href="" className="flex gap pl-2 w-[5%] hidden rounded-full group-hover:block "> Logistics</a>
</div>
<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
 <span> <RiHomeSmileLine
  className="text-3xl pl-2  text-black"/></span> <a href="" className={`flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block  `}> Home</a>
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
  <span><CiDark className="text-3xl pl-2  text-black"/></span> <a href="" className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "> CRM</a>
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}>
 <span> <RiHomeSmileLine className="text-3xl pl-2  text-black"/></span> <a href="" className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "> Analytics</a>
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1 hover:rounded-r-full w-[100%] `}>
  <span><PiShoppingCartSimple  className="text-3xl pl-2  text-black"/></span> <a href="" className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "> eCommerece</a>
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
 <span> <FaCarAlt  className="text-3xl pl-2  text-black"/></span> <a href="" className="flex gap pl-2 w-[5%] hidden rounded-full group-hover:block "> Logistics</a>
</div>
  </div>

<div className="after-hover hidden w-[0%] group-hover:w-[15%] group-hover:block bg-red-500 absolute top-10 left- transition-all ease-in-out duration-300">

{/* <ul><li className='flex'>Dashboard <IoIosArrowDown/>
  
  <ul>
    <li><div className='flex gap-2 items-center'>
  <span className=" hidden text-xl pl-2  text-gray-600 group-hover:block" ><MdOutlineCircle/></span> <a href="" className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "> CRM</a>
</div></li>
  </ul>
  </li>
  </ul> */}


</div>
</aside>
  </div>
    </div>
  )
}

export default Sidebar
