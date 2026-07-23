import { BiMoon } from "react-icons/bi";
import {
  AiOutlineForm,
  CiSearch,
  VscSettings,
  CiCalendarDate,
  AiFillDollarCircle,
  FaRegLightbulb,
  CiUser,
  IoLanguage,
  IoNewspaperOutline,
  IoSettingsSharp,
  IoStatsChart,
  MdOutlineWbSunny,
  FaRegStar,
  FaRegBell,
  FaUser,
  IoMenuOutline,
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
} from "../assets/Icons.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

export default function Navbar({
  sun,
  setSun,
  open,
  setOpen,
  star,
  setStar,
  bell,
  setBell,
  user,
  setUser,
  dark,
  setDark,
  searchbar,
  setsearchbar,
}) {
  const handleSearch = () => {
    setsearchbar(!searchbar);
  };

  const toggle = () => {
    setOpen(!open);
    setSun(false);
    setStar(false);
    setBell(false);
    setUser(false);
  };

  const handledark = () => {
    setDark(false);
  };

  const handleTheme = () => {
    console.log("dark clicked");
    setDark(true);
  };

  const clickUser = () => {
    setUser(!user);
    setBell(false);
    setStar(false);
    setOpen(false);
    setSun(false);
  };

  const clickBell = () => {
    setBell(!bell);
    setStar(false);
    setOpen(false);
    setSun(false);
    setUser(false);
  };

  const starClick = () => {
    setStar(!star);
    setOpen(false);
    setSun(false);
    setBell(false);
    setUser(false);
  };

  const sunToggle = () => {
    console.log("sun clicked");

    setSun(!sun);
    setOpen(false);
    setStar(false);
    setBell(false);
    setUser(false);
  };

  // Mobile Menue 
  const [mobileMenue, setMobileMenue] = useState(false)

  const openMobileMenue = ()=>{

    setMobileMenue(!mobileMenue)
  }

  return (
    <>

    <Sidebar mobileMenue={mobileMenue} setMobileMenue={setMobileMenue}/>
      {/* Search Result Div  */}
      <div
        className={` ${searchbar ? "block" : "hidden"} search-result bg-white shadow-2xl px-4 z-50  w-[0%] flex flex-col gap-8  mx-auto absolute top-20 left-[20%]`}
      >
        {/* Search Bar  */}
        <div className="search-bar flex justify-between items-center px-2 py-2  border text-2xl">
          <CiSearch />

          <div className="text flex items-center gap-2 ">
            <span>[esc]</span>
            <RxCross2 />
          </div>
        </div>

        {/* Second Div  */}
        <div className="div flex w-[80%] mx-auto justify-between">
          {/* Popular  */}
          <div className="popular flex flex-col gap-2">
            <p className="uppercase">Popular Search</p>
            <a href="" className="flex items-center gap-4">
              {" "}
              <SiSimpleanalytics /> Analytics
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <FaCircleNotch /> CRM
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <FiShoppingBag /> eCommerece
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <CgUserList /> User list
            </a>
          </div>

          {/* Apps  */}
          <div className="apps flex flex-col gap-2">
            <p className="uppercase">Apps</p>
            <a href="" className="flex items-center gap-4">
              {" "}
              <CiCalendarDate /> Calendar
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <CiDark /> Invoice list
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <CgUserList /> User list
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <FaUnlockAlt /> Roles & Permissions
            </a>
          </div>
        </div>

        {/* Third Div  */}
        <div className="div flex w-[80%] mx-auto justify-between mb-4">
          {/* Popular  */}
          <div className="popular flex flex-col gap-2">
            <p className="uppercase">Pages</p>
            <a href="" className="flex items-center gap-4">
              {" "}
              <FaRegUser /> User Profile
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <IoSettingsSharp /> Account Setting
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <AiFillDollarCircle /> Pricing
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <GoQuestion /> FAQs
            </a>
          </div>

          {/* Apps  */}
          <div className="apps flex flex-col gap-2 mr-9">
            <p className="uppercase">Forms & Charts</p>
            <a href="" className="flex items-center gap-4">
              {" "}
              <AiOutlineForm />
              Form Layout
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <FaRegCheckSquare /> Form Validation
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <VscSettings /> Form Wizard
            </a>
            <a href="" className="flex items-center gap-4">
              {" "}
              <IoStatsChart /> Apex Charts
            </a>
          </div>
        </div>
      </div>
      <nav
        className={`flex  md:justify-between md:items-center w-[100%] md:px-8 py-2 mx-auto ${dark ? "bg-[#28243D] text-[#D4D1E9]" : " text-black"} `}
      >
        {/* left div  */}

        <div className="flex gap-6">
          {/* Logo  */}
          {/* <div className="logo"><h1 className='text-[#af89fe] text-4xl font-extrabold'>M Abdullah</h1></div> */}


{/* Hemburger Menue  */}
<div className="md:hidden flex items-center ml-2 text-2xl">
<IoMenuOutline onClick={openMobileMenue}/>
</div>

          {/* Search Bar  */}
          <div
            className="search-bar flex items-center gap-3 text-2xl md:ml-4 font-semibold"
            onClick={handleSearch}
          >
            <CiSearch className="font-extrabold" />
            <input type="text" placeholder="search" className=" w-30" />
          </div>
        </div>

        {/* Right div  */}
        <div className="flex items-center">
          <div className="icons flex gap-5 items-center text-2xl">
            <ul className="relative">
              <li onClick={toggle}>
                <IoLanguage />
              </li>
              <ul
                className={`${open ? "block" : "hidden"} ${dark ? "bg-[#28243D] text-white" : "bg-white"} absolute top-13 -left-3 md:top-12 z-50  shadow-2xl w-50 flex flex-col`}
              >
                <li
                  className={`${dark ? "hover:bg-[#37334C] text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} bg-[#ede4ff] text-blue-500 pl-4 py-2 w-[100%]`}
                >
                  English
                </li>
                <li
                  className={`${dark ? "hover:bg-black text-[#D5D1EA]" : "hover:bg-[#ECECF2]"} bg-white text-blue-500 pl-4 py-2 w-[100%]`}
                >
                  French
                </li>
                <li className="pl-4 py-2 hover:bg-[#f1f2f7] cursor-pointer">
                  Arabic
                </li>
              </ul>
            </ul>

            <ul className="relative">
              <li onClick={sunToggle}>
                <MdOutlineWbSunny />
              </li>

              <ul
                className={`${sun ? "block" : "hidden"} ${dark ? "bg-gray-900 text-white" : "bg-white"} absolute top-10 md:top-10 -right-30 md:-right-35  shadow-2xl w-50 z-50 rounded py-1 `}
              >
                <li
                  className={` ${dark ? "hover:bg-gray-600 text-white" : "hover:bg-[#F4F5FA] text-black"}  flex items-center gap-2 px-3 py-2 cursor-pointer  `}
                  onClick={handledark}
                >
                  <FaRegLightbulb /> Light
                </li>
                <li
                  className={` ${dark ? "hover:bg-gray-600 text-white" : "hover:bg-[#F4F5FA] text-black"}  flex items-center gap-2 px-3 py-2 cursor-pointer `}
                  onClick={handleTheme}
                >
                  <CiDark /> Dark
                </li>
              </ul>
            </ul>

            <ul>
              <li onClick={starClick}>
                {" "}
                <FaRegStar />{" "}
              </li>

              <div
                className={`${star ? "block" : "hidden"} ${dark ? " bg-[#312D4B]" : " bg-[#ffffff] text-black"} z-50 shadow-2xl absolute right-2 md:right-8 top-15 px-4`}
              >
                <div className={` text flex justify-between my-4`}>
                  <h5
                    className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-lg font-semibold `}
                  >
                    Shourcut
                  </h5>
                  +
                </div>

                {/* Icons  */}
                <div className="icons flex flex-col justify-between items-center">
                  {/* First Child  */}
                  <div className="first-child flex">
                    {/* Clander  */}
                    <div className="clander flex flex-col items-center justify-center w-1/2 min-w-40  border-t-1 border-r-1  hover:bg-[#f1f2f7]">
                      <CiCalendarDate className="bg-[#efeff1] rounded-full p-2 text-5xl text-black" />

                      <div className="c-text flex flex-col items-center">
                        <p
                          className={`${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm font-semibold text-[#2E263D]`}
                        >
                          Calendar
                        </p>
                        <p
                          className={`${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}
                        >
                          Appointment
                        </p>
                      </div>
                    </div>

                    {/* Invoice App  */}
                    <div className="invoice-app w-1/2 border-t-1  min-w-50 py-10 flex flex-col items-center justify-center  hover:bg-[#f1f2f7]">
                      <IoNewspaperOutline className="bg-[#efeff1] rounded-full p-2 text-5xl text-black" />

                      <div className="text flex flex-col items-center">
                        <p
                          className={`${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm font-semibold `}
                        >
                          App Invoice
                        </p>
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}
                        >
                          Manage Accounts
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second 2  */}

                  <div className="second-child flex ">
                    {/* Clander  */}
                    <div className="clander flex flex-col items-center justify-center w-1/2 min-w-40  border-t-1 border-r-1  hover:bg-[#f1f2f7]">
                      <CiUser className="bg-[#efeff1] rounded-full p-2 text-5xl text-black" />

                      <div className="c-text flex flex-col items-center">
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}
                        >
                          Users
                        </p>
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}
                        >
                          Manage Users
                        </p>
                      </div>
                    </div>

                    {/* Invoice App  */}
                    <div
                      className={`invoice-app w-1/2 border-t-1  min-w-50 py-10 flex flex-col items-center justify-center ${dark ? "hover:bg-[#280ed2]" : "hover:bg-[#f1f2f7]"}`}
                    >
                      <SlScreenDesktop className="bg-[#efeff1] rounded-full p-2 text-5xl text-black" />

                      <div className="text flex flex-col items-center">
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}
                        >
                          Role Management
                        </p>
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}
                        >
                          Permessions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Third Child  */}
                  <div className="second-child flex ">
                    {/* Clander  */}
                                       <div className="clander flex flex-col items-center justify-center w-1/2 min-w-40  border-t-1 border-r-1  hover:bg-[#f1f2f7]">

                      <BiSolidDashboard className="bg-[#efeff0] rounded-full p-2 text-5xl text-black" />

                      <div className="c-text flex flex-col items-center">
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}
                        >
                          Dashboard
                        </p>
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}
                        >
                          User Dashboard
                        </p>
                      </div>
                    </div>

                    {/* Invoice App  */}
                    <div
                      className={`invoice-app w-1/2 border-t-1  min-w-50 py-10 flex flex-col items-center justify-center ${dark ? "hover:bg-[#383452]" : "hover:bg-[#f1f2f7]"}`}
                    >
                      <IoSettingsSharp className="bg-[#efeff1] rounded-full p-2 text-5xl text-black" />

                      <div className="text flex flex-col items-center">
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-sm `}
                        >
                          Settings
                        </p>
                        <p
                          className={` ${dark ? "text-[#D7D3EC]" : "text-[#2E263D]"} text-xs `}
                        >
                          Account Settings
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>

            {/* Bell I con  */}
            <ul>
              <li onClick={clickBell}>
                {" "}
                <FaRegBell className="" />
              </li>

              <div
                className={`${bell ? "block" : "hidden"} z-50 shadow-2xl absolute right-5 md:right-10 top-15 md:min-w-[30%] bg-[#ffff]`}
              >
                {/* Notifactions  */}
                <div className="notifactions flex justify-between bg-[#ffff]  hover:bg-[#f1f2f7]  py-2">
                  <div className="title px-4">
                    <p className="text-[#2E263D] text-lg font-semibold">
                      Notifactions
                    </p>
                  </div>
                  {/* message  */}
                  <div className="message flex gap-6 text-sm justify-center items-center px-4">
                    <p className="bg-[#ede4ff] rounded-full px-3 text-[#8C57FF]">
                      2 New
                    </p>
                    <FaRegEnvelopeOpen />
                  </div>
                </div>

                {/* User 1  */}
                <div className="u-1 flex pl-4 gap-2 items-center py-3 border-t-1 bg-[#ffff] hover:bg-[#f1f2f7]">
                  <div className="icon">
                    {/* <FaUser  /> */}
                    <img src="/bellicon-1.png" alt="" className="text-3xl rounded-full object-cover w-15 h-15"  />
                  </div>
                  <div className="text">
                    <div className="heading">
                      <h5 className="text-sm font-semibold">Congratulations Flora 🎉</h5>
                      <p className="text-xs my-2">
                        Won the monthly bestseller gold badge
                      </p>
                      <p className="text-xs">1 h ago</p>
                    </div>
                  </div>
                </div>

                {/* u 2  */}
                <div className="u-1 flex  pl-4 gap-2  px-6 items-center py-3 border-t-1  bg-[#ffff] hover:bg-[#f1f2f7]">
                  <div className="icon h-[35%] w-[20%]">
                   <span className="rounded-full bg-[#F0EFF0] text-2xl px-1 py-3 flex justify-center items-center ">
                    CB
                   </span>
                  </div>
                  <div className="text ">
                    <div className="heading">
                      <h5 className="text-sm font-semibold">Cecilia Becker</h5>
                      <p className="text-xs my-2">Accepted your connection</p>
                      <p className="text-xs">12 h ago</p>
                    </div>
                  </div>
                </div>

                {/* u 3  */}
                <div className="u-1 flex  pl-4 gap-2  px-6 items-center py-3 border-t-1  bg-[#ffff] hover:bg-[#f1f2f7]">
                  <div className="icon">
                    <img src="/bellicon-2.png" alt="" className="text-3xl rounded-full object-cover w-15 h-15"  />
                  </div>
                  <div className="text mr-8">
                    <div className="heading">
                      <h5 className="text-sm font-semibold">Bernard Woods</h5>
                      <p className="text-xs my-2">
                        You have new message from Bernard Woods
                      </p>
                      <p className="text-xs">May 18, 8:25 AM</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center my-4 md:hidden">
                  <button className="bg-[#7E4EE5] rounded-xl font-semibold  p-2 text-white w-[90%]">View All Notifaction</button>
                </div>
              </div>
            </ul>

            {/* User Click  */}
            <ul>
              <li onClick={clickUser}>
                <FaUser className="" />
              </li>

              <div
                className={`${user ? "block" : "hidden"} z-50 absolute right-5  md:right-10 top-15 md:min-w-[30%] min-w-[50%] shadow-2xl px-2 bg-[#ffff]`}
              >
                {/* Notifactions  */}
                <div className="notifactions flex py-4  bg-[#ffff]  hover:bg-[#f1f2f7] border-b  ">
                  {/* User  */}
                  <div className="message flex gap-6 text-sm justify-center items-center px-4">
                    <FaUser className="text-3xl" />
                  </div>

                  <div className="title  flex flex-col">
                    <p className="text-[#2E263D] text-lg font-semibold">
                      John Doe
                    </p>
                    <span className="text-xs">admin@materio.com</span>
                  </div>
                </div>

                {/* User 1  */}
                <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
                  {/* User  */}
                  <div className="message flex gap-6 text-sm justify-center items-center px-4">
                    <FaRegUser className="text-3xl" />
                  </div>

                  <div className="title  flex flex-col justify-center">
                    <span className="text-sm font-semibold">View Profile</span>
                  </div>
                </div>

                {/* u 2  */}
                <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
                  {/* User  */}
                  <div className="message flex gap-6 text-sm justify-center items-center px-4">
                    <IoSettingsSharp className="text-3xl" />
                  </div>

                  <div className="title  flex flex-col justify-center">
                    <span className="text-sm font-semibold">Setting</span>
                  </div>
                </div>

                {/* u 3  */}
                <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
                  {/* User  */}
                  <div className="message flex gap-6 text-sm justify-center items-center px-4">
                    <AiFillDollarCircle className="text-3xl" />
                  </div>

                  <div className="title  flex flex-col justify-center">
                    <span className="text-sm font-semibold">Pricing</span>
                  </div>
                </div>

                {/* Question  */}
                <div className="u-1 flex   bg-[#ffff] hover:bg-[#f1f2f7] py-4">
                  {/* User  */}
                  <div className="message flex gap-6 text-sm justify-center items-center px-4">
                    <GoQuestion className="text-3xl" />
                  </div>

                  <div className="title  flex flex-col justify-center">
                    <span className="text-sm font-semibold">FAQ</span>
                  </div>
                </div>

                <div className="btn w-[100%] flex gap-6 text-sm justify-center items-center px-4 my-4">
                  <button className="flex justify-center py-2 items-center gap-2 text-white font-bold bg-[#FF4C51] w-[100%]">
                    Logout{" "}
                    <IoIosLogOut className="font-bold text-white text-xl" />{" "}
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
