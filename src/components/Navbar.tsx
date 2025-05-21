import { useLocation } from 'react-router-dom';
import xapicLogo from '../assets/Xapic Logo - Full Colour with Blue 2.png'
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { MenuIcon } from '../assets/icons'; 
import { MdCancel } from "react-icons/md";

const Navbar = () => {
    const location = useLocation().pathname
    const navStyle = "bg-white"
    const [navOpen, setNavOpen]= useState(false) 

    useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
        if (!header) return; 

        if (window.scrollY > 50) {
        header.classList.add("bg-white", "shadow-md");
        } else {
        header.classList.remove("bg-white", "shadow-md");
    }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${location !== "/" && navStyle} header z-10 fixed  left-0 top-0 w-full`}>
            <div className="container relative w-full">
                <nav className='flex items-center w-full  py-6 h-[6.75rem] justify-between'>
                    <img src={xapicLogo} alt="" className='w-[11.4375rem] h-[3.75rem]' />
                    <ul className='text-[1.25rem] text-[#3E4C57] gap-[1.875rem] hidden md:flex'>
                        <li><a href="">Schools</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Portolio</a></li>
                        <li><a href="">Who we are</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <button className='button w-[14.3125rem] hidden md:flex'>
                        <p>Book a Consultation</p>
                        <FaArrowRight />
                    </button>
                    <MenuIcon className='block md:hidden cursor-pointer' onClick={()=> setNavOpen(!navOpen)}/>
                </nav>
            </div>
            {navOpen && (
                <div className={`flex justify-between p-10  h-screen bg-[#00011B] fixed top-0 left-0 transform transition-transform duration-600 ease-in-out w-full ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <nav className='flex flex-col gap-10 mt-24'>
                        <ul className='flex flex-col gap-10 text-[1.25rem] text-[#3E4C57]'>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><a href="">Schools</a></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><a href="">Services</a></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><a href="">Portolio</a></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><a href="">Who we are</a></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><a href="">Contact Us</a></li>
                        </ul>
                        <button className='button w-[14.3125rem]' onClick={()=>setNavOpen(false)}>
                            <p>Book a Consultation</p>
                            <FaArrowRight />
                        </button>
                    </nav>
                    <MdCancel className='w-10 h-10 cursor-pointer' onClick={()=>setNavOpen(false)}/>
                </div>
            )}
        </div>
    )
}

export default Navbar
