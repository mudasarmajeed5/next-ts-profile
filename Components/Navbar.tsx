'use client'
import { IoLogoMastodon } from "react-icons/io5";
import "./Navbar.css"
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [DropDown, setDropDown] = useState(false)
  const router = useRouter()
  return (
    <div className='text-center backdrop-blur-sm bg-[#2B1051] sticky z-50 top-0 pt-4 pb-2 px-4 flex justify-between items-center text-[--text-color]'>
    <div>
    <ul className='flex items-center gap-3'>
      <li className="md:text-4xl text-3xl text-white"><IoLogoMastodon /></li>
      <li onClick={()=>router.push('/')} className="md:text-3xl text-2xl cursor-pointer underline-offset-4 navbar-name">Portfolio</li>
    </ul>  
    </div>
    <button className="getquote px-2 py-1 rounded-lg md:block hidden">
      Get Quote
    </button>
    <div className="md:hidden text-2xl flex items-center">
      <span onClick={()=>{setDropDown(!DropDown);}} className="z-10 relative">{DropDown? <RxCross1/>: <RiMenu3Line/>}</span>
      <ul className={`${DropDown ? 'HamBurger_DropDown ':'hidden'}`}>
        <li><Link onClick={()=>setDropDown(!DropDown)} href={"/"}>Home</Link></li>
        <li><Link onClick={()=>setDropDown(!DropDown)} href={"/projects"}>Projects</Link></li>
        <li><Link onClick={()=>setDropDown(!DropDown)} href={"/about"}>Get Quote</Link></li>
        <li><Link onClick={()=>setDropDown(!DropDown)} href={"/contact"}>Contact</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar