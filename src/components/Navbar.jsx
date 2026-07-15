import { BiMoon } from 'react-icons/bi'
import {CiSearch, CiCalendarDate, AiFillDollarCircle,FaRegLightbulb, CiUser,IoLanguage, IoNewspaperOutline, IoSettingsSharp, IoStatsChart,MdOutlineWbSunny,FaRegStar,FaRegBell, FaUser , FaRegMoon, FaRegEnvelopeOpen , FaRegUser, FaGraduationCap , FaCarAlt, FaUnlockAlt, FaRegCheckSquare ,SlScreenDesktop,SiSimpleanalytics,BiSolidDashboard,GoQuestion,IoIosLogOut, RiHomeSmileLine,PiShoppingCartSimple,RxCross2,FaCircleNotch,FiShoppingBag,CgUserList,CiDark} from '../assets/Icons.jsx'



export default function Navbar ({sun, setSun,open,setOpen,star,setStar,bell,setBell,user,setUser,dark,setDark,searchbar,setsearchbar}){

const handleSearch = ()=>{

  setsearchbar(!searchbar)
}

const toggle = ()=>{

  setOpen(!open)
  setSun(false)
  setStar(false)
  setBell(false)
  setUser(false)
  
}

const handledark = ()=>{

setDark(false)
}

const handleTheme = ()=>{

  console.log("dark clicked")
  setDark(true)
}

const clickUser = ()=>{
  setUser(!user)
  setBell(false)
    setStar(false)
  setOpen(false)
  setSun(false)
}

const clickBell = ()=>{

  setBell(!bell)
  setStar(false)
  setOpen(false)
  setSun(false)
  setUser(false)
}

const starClick = ()=>{

  setStar(!star)
  setOpen(false)
  setSun(false)
  setBell(false)
  setUser(false)
  
}

const sunToggle = ()=>{

  console.log("sun clicked");
  

  setSun(!sun)
   setOpen(false)
  setStar(false)
  setBell(false)
  setUser(false)
 
  
}

    return (

        <>
<nav className={`flex justify-between w-[90%] px-8 py-2 mx-auto ${dark ? "bg-[#28243D] text-[#D4D1E9]" : " text-black"}`}>
    {/* left div  */}
  
    <div className="flex gap-6">
        {/* Logo  */}
      {/* <div className="logo"><h1 className='text-[#af89fe] text-4xl font-extrabold'>M Abdullah</h1></div> */}

      {/* Search Bar  */}
      <div className="search-bar flex items-center gap-3 text-2xl font-semibold" onClick={handleSearch}>
         <CiSearch className="font-extrabold"/>
<input type="text" placeholder="search" className=" w-30"/>
      

      </div>
    </div>

    {/* Right div  */}
    <div className="flex items-center">
<div className="icons flex gap-5 items-center text-2xl">


<ul className="relative">
  <li onClick={toggle}>
    <IoLanguage />
  </li>
  <ul className={`${open ? "block" : "hidden"} ${dark ? "bg-[#28243D] text-white" : "bg-white"} absolute top-8  shadow-md w-50 flex flex-col`}>
    <li className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} bg-[#ede4ff] text-blue-500 pl-4 py-2 w-[100%]`}>English</li>
    <li className={`${dark ? "hover:bg-black text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} bg-[#ede4ff] text-blue-500 pl-4 py-2 w-[100%]`}>English</li>
    <li className="pl-4 py-2 hover:bg-[#f1f2f7] cursor-pointer">Arabic</li>
  </ul>
</ul>


<ul className="relative">
  <li onClick={sunToggle}><MdOutlineWbSunny /></li>

  <ul className={`${sun ? "block" : "hidden"} ${dark ? "bg-gray-900 text-white" : "bg-white"} absolute top-8 left-0  shadow-md w-32 z-50 rounded`}>
    <li className={` ${dark ? "hover:bg-gray-600 text-white" : "hover:bg-white text-black"}  flex items-center gap-2 px-3 py-2 cursor-pointer `}onClick={handledark}>
      <FaRegLightbulb/> Light
    </li>
    <li className={` ${dark ? "hover:bg-gray-600 text-white" : "hover:bg-white text-black"}  flex items-center gap-2 px-3 py-2 cursor-pointer `}onClick={handleTheme}>
      <CiDark/> Dark
    </li>
  </ul>
</ul>



<ul>
  
  <li onClick={starClick}> <FaRegStar/>  </li> 

  <div className={`${star ? "block" : "hidden"} ${dark ? " bg-[#312D4B]" : " bg-[#ffffff] text-black"}  absolute right-8 top-15 px-4`}>

<div className={` text flex justify-between my-4`}>
  <h5 className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-lg font-semibold `}>Shourcut</h5>
  +
</div>

{/* Icons  */}
<div className="icons flex flex-col justify-between items-center">


{/* First Child  */}
<div className="first-child flex">

    {/* Clander  */}
  <div className="clander flex flex-col items-center justify-center w-1/2 min-w-40  border  hover:bg-[#f1f2f7]">
<CiCalendarDate className="bg-[#efeff1] rounded-full p-2 text-5xl text-black"/>

<div className="c-text flex flex-col items-center">
  <p className={`${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm font-semibold text-[#2E263D]`}>Calendar</p>
  <p className={`${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}>Appointment</p>
</div>
  </div>

  {/* Invoice App  */}
  <div className="invoice-app w-1/2 border min-w-50 py-10 flex flex-col items-center justify-center  hover:bg-[#f1f2f7]">
<IoNewspaperOutline className="bg-[#efeff1] rounded-full p-2 text-5xl text-black"/>

<div className="text flex flex-col items-center">
  <p className={`${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm font-semibold `}>App Invoice</p>
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}>Manage Accounts</p>
</div>
  </div>
</div>

  {/* Second 2  */}

  <div className="second-child flex ">

   {/* Clander  */}
  <div className="clander flex flex-col items-center justify-center w-1/2 min-w-40  border  hover:bg-[#f1f2f7]">
<CiUser  className="bg-[#efeff1] rounded-full p-2 text-5xl text-black"/>

<div className="c-text flex flex-col items-center">
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}>Users</p>
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}>Manage Users</p>
</div>
  </div>

  {/* Invoice App  */}
  <div className={`invoice-app w-1/2 border min-w-50 py-10 flex flex-col items-center justify-center ${dark ? "hover:bg-[#280ed2]" : "hover:bg-[#f1f2f7]"}`}>
<SlScreenDesktop className="bg-[#efeff1] rounded-full p-2 text-5xl text-black"/>

<div className="text flex flex-col items-center">
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}>Role Management</p>
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}>Permessions</p>
</div>
  </div>

  </div>


{/* Third Child  */}
<div className="second-child flex ">

   {/* Clander  */}
  <div className={`invoice-app w-1/2 border min-w-50 py-10 flex flex-col items-center justify-center ${dark ? "hover:bg-[#383452]" : "hover:bg-[#f1f2f7]"}`}>
<BiSolidDashboard  className="bg-[#efeff0] rounded-full p-2 text-5xl text-black"/>

<div className="c-text flex flex-col items-center">
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}>Dashboard</p>
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}>User Dashboard</p>
</div>
  </div>

  {/* Invoice App  */}
  <div className={`invoice-app w-1/2 border min-w-50 py-10 flex flex-col items-center justify-center ${dark ? "hover:bg-[#383452]" : "hover:bg-[#f1f2f7]"}`}>
<IoSettingsSharp className="bg-[#efeff1] rounded-full p-2 text-5xl text-black"/>

<div className="text flex flex-col items-center">
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}>Settings</p>
  <p className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}>Account Settings</p>
</div>
  </div>

  </div>
</div>
  </div>
</ul>

{/* Bell I con  */}
<ul>
  
 <li onClick={clickBell}> <FaRegBell className=""/></li>

<div className={`${bell? "block" : "hidden"}  absolute right-10 top-15 w-[30%] bg-[#ffff]`}>
  {/* Notifactions  */}
  <div className="notifactions flex justify-between bg-[#ffff]  hover:bg-[#f1f2f7] border py-5">
    <div className="title px-4">
      <p className="text-[#2E263D] text-lg font-semibold">Notifactions</p>
    </div>
{/* message  */}
    <div className="message flex gap-6 text-sm justify-center items-center px-4">
<p className="bg-[#ede4ff] rounded-full px-3 text-[#8C57FF]">2 New</p>
<FaRegEnvelopeOpen />
    </div>
  </div>

  {/* User 1  */}
  <div className="u-1 flex justify-around items-center py-3 border bg-[#ffff] hover:bg-[#f1f2f7]">
    <div className="icon">
      <FaUser className="text-3xl"/>
    </div>
<div className="text">
  <div className="heading">
    <h5>Congratulations Flora 🎉</h5>
    <p className="text-xs my-2">Won the monthly bestseller gold badge</p>
    <p className="text-xs">1 h ago</p>
  </div>
</div>

  </div>

  {/* u 2  */}
 <div className="u-1 flex justify-between px-6 items-center py-3 border  bg-[#ffff] hover:bg-[#f1f2f7]">
    <div className="icon">
      <FaUser className="text-3xl"/>
    </div>
<div className="text mr-29">
  <div className="heading">
    <h5>Cecilia Becker</h5>
    <p className="text-xs my-2">Accepted your connection</p>
    <p className="text-xs">12 h ago</p>
  </div>
</div>

  </div>

  {/* u 3  */}
<div className="u-1 flex justify-around items-center py-3 border  bg-[#ffff] hover:bg-[#f1f2f7]">
    <div className="icon">
      <FaUser className="text-3xl"/>
    </div>
<div className="text mr-8">
  <div className="heading">
    <h5>Bernard Woods</h5>
    <p className="text-xs my-2">You have new message from Bernard Woods</p>
    <p className="text-xs">May 18, 8:25 AM</p>
  </div>
</div>

  </div>
 
</div>
</ul>


{/* User Click  */}
<ul>

  <li onClick={clickUser}><FaUser  className=""/></li>

  <div className={`${user? "block" : "hidden"}  absolute right-10 top-15 w-[30%] bg-[#ffff]`}>
  {/* Notifactions  */}
  <div className="notifactions flex py-4  bg-[#ffff]  hover:bg-[#f1f2f7] border-b  ">

    {/* User  */}
     <div className="message flex gap-6 text-sm justify-center items-center px-4">
<FaUser className="text-3xl"/>
    </div>

    <div className="title  flex flex-col">
      <p className="text-[#2E263D] text-lg font-semibold">John Doe</p>
      <span className="text-xs">admin@materio.com</span>
    </div>

   
  </div>

  {/* User 1  */}
  <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
     {/* User  */}
     <div className="message flex gap-6 text-sm justify-center items-center px-4">
<FaRegUser className="text-3xl"/>
    </div>

    <div className="title  flex flex-col justify-center">
      
      <span className="text-sm font-semibold">View Profile</span>
    </div>

  </div>

  {/* u 2  */}
 <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
     {/* User  */}
     <div className="message flex gap-6 text-sm justify-center items-center px-4">
< IoSettingsSharp className="text-3xl"/>
    </div>

    <div className="title  flex flex-col justify-center">
      
      <span className="text-sm font-semibold">Setting</span>
    </div>

  </div>

  {/* u 3  */}
 <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
     {/* User  */}
     <div className="message flex gap-6 text-sm justify-center items-center px-4">
< AiFillDollarCircle className="text-3xl"/>
    </div>

    <div className="title  flex flex-col justify-center">
      
      <span className="text-sm font-semibold">Pricing</span>
    </div>

  </div>

  {/* Question  */}
   <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
     {/* User  */}
     <div className="message flex gap-6 text-sm justify-center items-center px-4">
< GoQuestion className="text-3xl"/>
    </div>

    <div className="title  flex flex-col justify-center">
      
      <span className="text-sm font-semibold">FAQ</span>
    </div>

  </div>
 
 <div className="btn w-[100%] flex gap-6 text-sm justify-center items-center px-4">
  <button className="flex justify-center py-2 items-center gap-2 text-white font-bold bg-[#FF4C51] w-[100%]">Logout <IoIosLogOut className="font-bold text-white text-xl" /> </button>
 </div>
</div>
  
  </ul>
</div>

    </div>
    </nav>
        </>
    )
}