import { useLocation } from 'react-router-dom';
import xapicLogo from '../assets/Xapic Logo - Full Colour with Blue 2.png'
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { MenuIcon } from '../assets/icons'; 
import { CancelIcon } from '../assets/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation().pathname
    const navStyle = "md:bg-white bg-transparent"
    const navActiveStyle = "border-b-[1.5px] border-b-[#000485]"
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
                    <a href="/"><img src={xapicLogo} alt="" className='sm:w-[11.4375rem] sm:h-[3.75rem] h-6 w-[4.65rem] '  /></a>
                    <ul className='text-[1.25rem] text-[#3E4C57] gap-[1.875rem] hidden md:flex'>
                        <li className={`${location == "/schools" && navActiveStyle} px-2`}><Link to="/schools">Schools</Link></li>
                        <li className={`${location == "/services" && navActiveStyle} px-2`}><Link to="/services">Services</Link></li>
                        <li className={`${location == "/portfolio" && navActiveStyle} px-2`}><Link to="/portfolio">Portolio</Link></li>
                        <li className={`${location == "/whoWeAre" && navActiveStyle} px-2`}><Link to="/whoWeAre">Who we are</Link></li>
                        <li className={`${location == "/contactUs" && navActiveStyle} px-2`}><Link to="/contactUs">Contact Us</Link></li>
                    </ul>
                    <button className='button w-[14.3125rem] hidden md:flex'>
                        <p>Book a Consultation</p>
                        <FaArrowRight />
                    </button>
                    <MenuIcon className='block md:hidden cursor-pointer' onClick={()=> setNavOpen(!navOpen)}/>
                </nav>
            </div>
            {navOpen && (
                <div className={`flex flex-col gap-[2.6875rem] p-10  h-screen bg-white fixed top-0 left-0 transform transition-transform duration-600 ease-in-out w-full ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex justify-between items-center'>
                        <a href="/"><img src={xapicLogo} alt="" className='w-[7rem] h-10' /></a>
                        <CancelIcon className="fa-solid fa-xmark w-6 h-6 cursor-pointer" onClick={()=>setNavOpen(false)} />
                    </div>
                    <nav className='flex flex-col gap-10 '>
                        <ul className='flex flex-col gap-10 text-[1.25rem] text-[#3E4C57]'>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><Link to="/schools">Schools</Link></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><Link to="/services">Services</Link></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><Link to="/portfolio">Portfolio</Link></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><Link to="/whoWeAre">Who we are</Link></li>
                            <li onClick={()=>setNavOpen(false)} className='navLinks'><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                        <button className='button w-[14.3125rem]' onClick={()=>setNavOpen(false)}>
                            <p>Book a Consultation</p>
                            <FaArrowRight />
                        </button>
                    </nav>
                    
                </div>
            )}
        </div>
    )
}

export default Navbar
