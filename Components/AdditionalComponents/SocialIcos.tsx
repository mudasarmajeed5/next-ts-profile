'use client'
import "./SocialIcons.css"
import Link from "next/link"
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } 
from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
const Socialicos = () => {
  return (
    <div className="socials z-50">
    <button className="bg-[#11071F] border border-[--sky] p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl"><IoLogoInstagram/></span><Link href={'#'} className="show-text">Instagram</Link></button>
    <button className="bg-[#11071F] border border-[--sky] p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl"><IoLogoGithub/></span><Link href={'#'} className="show-text">Github</Link></button>
    <button className="bg-[#11071F] border border-[--sky] p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl"><IoLogoLinkedin/></span><Link href={'#'} className="show-text">LinkedIn</Link></button>
    <button className="bg-[#11071F] border border-[--sky] p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl"><FaXTwitter /></span><Link href={'#'} className="show-text">Twitter/X</Link></button>
  </div>
  )
}

export default Socialicos