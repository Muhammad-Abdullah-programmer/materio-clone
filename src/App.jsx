import {CiSearch,VscSettings, CiCalendarDate, CiUser,IoLanguage, AiOutlineForm, AiFillDollarCircle, IoNewspaperOutline, IoSettingsSharp, IoStatsChart,MdOutlineWbSunny,FaRegStar,FaRegBell, FaUser , FaRegMoon, FaRegEnvelopeOpen , FaRegUser, FaGraduationCap , FaCarAlt, FaUnlockAlt, FaRegCheckSquare ,SlScreenDesktop,SiSimpleanalytics,BiSolidDashboard,GoQuestion,IoIosLogOut, RiHomeSmileLine,PiShoppingCartSimple,RxCross2,FaCircleNotch,FiShoppingBag,CgUserList,CiDark,MdOutlineBookmarks,MdOutlineCircle} from './assets/Icons.jsx'
import './components/Navbar.jsx'











import { useState } from "react";





import './App.css'
import Navbar from "./components/Navbar.jsx";



function App() {

const [open, setOpen] = useState(false)
const [sun, setSun] = useState(false)
const [star, setStar] = useState(false)
const [bell, setBell] = useState(false)
const [user, setUser] = useState(false)
const [dark, setDark] = useState(false)
const [searchbar, setsearchbar] = useState(false)


  return (
    <>
<div className={`min-h-screen w-screen ${dark ? "bg-[#28243D] text-[#D4D1E9]" : "bg-[#F4F5FA] text-black"}`}>
     <Navbar sun={sun} setSun={setSun} open={open} setOpen={setOpen} star={star} setStar={setStar} bell={bell} setBell={setBell} user={user} setUser={setUser} dark={dark} setDark={setDark} searchbar={searchbar} setsearchbar={setsearchbar}/>
  

  {/* Side Bar  */}
  <div className={`side-bar absolute top-0  w-[100%] overflow-hidden`}>
 <aside className={`${dark ? "bg-[#28243D] text-[#D4D1E9]" : "bg-[#F4F5FA] text-black"} overflow-hidden w-[4%] py-2 flex flex-col gap-4 items-start   shadow-2xl z-50 pr-4 hover:w-[15%] group  transition-all ease-in-out duration-300 `}>
    {/* logo  */}

      <div className="logo  flex text-lg justify-center items-center gap-3  "> <span className='pl-4 text-[#8C57FF] text-2xl font-bold'>M </span><h1 className='text-black/60 text-2xl font-bold flex'>Abdullah</h1>
      </div>



<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"}  icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
 <span> <RiHomeSmileLine className="text-3xl pl-2  text-black group-hover:hidden"/></span> <a href="" className={`flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block  `}> Home</a>
</div>

<div className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} group-hover icon flex items-center pl-1  hover:rounded-r-full w-[100%] `}>
  <span><MdOutlineBookmarks className="text-3xl pl-2 group-hover:hidden  text-black"/></span> <span className=" hidden text-xl pl-2  text-gray-600 group-hover:block" ><MdOutlineCircle/></span> <a href="" className="flex gap-4  pl-2 w-[5%] hidden rounded-full group-hover:block "> CRM</a>
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

</aside>
  </div>




  {/* Search Result Div  */}
  <div className={` ${searchbar ? "block" : "hidden"} search-result bg-white shadow-2xl px-4 z-50  w-[50%] flex flex-col gap-8  mx-auto absolute top-20 left-[20%]`}>

{/* Search Bar  */}
<div className="search-bar flex justify-between items-center px-2 py-2 border text-2xl">
  <CiSearch/>

  <div className="text flex items-center gap-2 ">
    <span>[esc]</span>
   <RxCross2/>
  </div>
</div>

{/* Second Div  */}
<div className="div flex w-[80%] mx-auto justify-between">

{/* Popular  */}
<div className="popular flex flex-col gap-2">
  <p className="uppercase">Popular Search</p>
  <a href="" className="flex items-center gap-4"> <SiSimpleanalytics/> Analytics</a>
  <a href="" className="flex items-center gap-4"> <FaCircleNotch/> CRM</a>
  <a href="" className="flex items-center gap-4"> <FiShoppingBag/> eCommerece</a>
  <a href="" className="flex items-center gap-4"> <CgUserList/> User list</a>
</div>

{/* Apps  */}
<div className="apps flex flex-col gap-2">

    <p className="uppercase">Apps</p>
  <a href="" className="flex items-center gap-4"> <CiCalendarDate/> Calendar</a>
  <a href="" className="flex items-center gap-4"> <CiDark/> Invoice list</a>
  <a href="" className="flex items-center gap-4"> <CgUserList/> User list</a>
  <a href="" className="flex items-center gap-4"> <FaUnlockAlt /> Roles & Permissions</a>
</div>
</div>

{/* Third Div  */}
<div className="div flex w-[80%] mx-auto justify-between mb-4">

{/* Popular  */}
<div className="popular flex flex-col gap-2">
  <p className="uppercase">Pages</p>
  <a href="" className="flex items-center gap-4"> <FaRegUser/> User Profile</a>
  <a href="" className="flex items-center gap-4"> <IoSettingsSharp/> Account Setting</a>
  <a href="" className="flex items-center gap-4"> <AiFillDollarCircle/> Pricing</a>
  <a href="" className="flex items-center gap-4"> <GoQuestion/> FAQs</a>
</div>

{/* Apps  */}
<div className="apps flex flex-col gap-2 mr-9">

    <p className="uppercase">Forms & Charts</p>
  <a href="" className="flex items-center gap-4"> <AiOutlineForm />Form Layout</a>
  <a href="" className="flex items-center gap-4"> <FaRegCheckSquare /> Form Validation</a>
  <a href="" className="flex items-center gap-4"> <VscSettings/> Form Wizard</a>
  <a href="" className="flex items-center gap-4"> <IoStatsChart  /> Apex Charts</a>
</div>
</div>
  </div>
</div>
    </>
  )
}

export default App
