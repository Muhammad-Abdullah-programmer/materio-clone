
import React, { useState } from 'react'

import {
  CiSearch,

  CiCalendarDate,
  CiUser,
  IoLanguage,
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
} from "../Icons.jsx";
import Navbar from '../../components/Navbar.jsx';
import Sidebar from '../../components/Sidebar.jsx';
import HomeCards from '../../components/HomeCards.jsx';
import ActivityTimeline from '../../components/ActivityTimeline.jsx';



const Home = () => {

      const [open, setOpen] = useState(false);
  const [sun, setSun] = useState(false);
  const [star, setStar] = useState(false);
  const [bell, setBell] = useState(false);
  const [user, setUser] = useState(false);
  const [dark, setDark] = useState(false);
  const [searchbar, setsearchbar] = useState(false);

  return (
    <div>
      <div
        className={`min-h-screen  ${dark ? "bg-[#28243D] text-[#D4D1E9]" : "bg-[#F4F5FA] text-black"}`}
      >
        <Navbar
          sun={sun}
          setSun={setSun}
          open={open}
          setOpen={setOpen}
          star={star}
          setStar={setStar}
          bell={bell}
          setBell={setBell}
          user={user}
          setUser={setUser}
          dark={dark}
          setDark={setDark}
          searchbar={searchbar}
          setsearchbar={setsearchbar}
        />

         <Sidebar dark={dark} setDark={setDark}/>

      

        <HomeCards />
      </div>
    </div>
  )
}

export default Home
