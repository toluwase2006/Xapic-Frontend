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
        <div className={`${location !== "/" && navStyle} header z-10 fixed border-b-[#00000026] border-[0.5px] left-0 top-0 w-full`}>
            <div className="container  relative w-full">
                <nav className='flex items-center w-full  py-6  md:h-[6.75rem] justify-between'>
                    <a href="/"><img src={xapicLogo} alt="" className='sm:w-[11.4375rem] sm:h-[3.75rem] h-10 w-[7rem] '  /></a>
                    <ul className='text-[1.25rem] text-[#3E4C57] gap-[1.875rem] hidden lg:flex'>
                        <li className={`relative group px-2`}><Link to="/schools">Schools
                            <span className={`absolute bottom-0 left-0 h-[1px] w-full bg-[#000485] origin-left transition-transform duration-300  ${location == "/schools" || location == "/schools/designAndSchool" || location == "/schools/engineering" || location == "/schools/summerSchool"  ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </Link></li>
                        <li className={`px-2 group relative`}><Link to="/services">
                        Services
                            <span className={`absolute bottom-0 left-0 h-[1px] w-full bg-[#000485] origin-left transition-transform duration-300  ${location == "/services" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </Link></li>
                        <li className={`${location == "/portfolio"} relative group px-2`}><Link to="/portfolio">Portfolio
                            <span className={`absolute bottom-0 left-0 h-[1px] w-full bg-[#000485] origin-left transition-transform duration-300  ${location == "/portfolio" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </Link></li>
                        <li className={`${location == "/whoWeAre"} group relative px-2`}><Link to="/whoWeAre">Who we are
                            <span className={`absolute bottom-0 left-0 h-[1px] w-full bg-[#000485] origin-left transition-transform duration-300  ${location == "/whoWeAre" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </Link></li>
                        <li className={`${location == "/contactUs"} group relative px-2`}><Link to="/contactUs">Contact Us
                            <span className={`absolute bottom-0 left-0 h-[1px] w-full bg-[#000485] origin-left transition-transform duration-300  ${location == "/contactUs" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </Link></li>
                    </ul>
                    <button className='buttonScaleUp w-[14.3125rem] hidden lg:flex'>
                        <p>Book a Consultation</p>
                        <FaArrowRight />
                    </button>
                    <MenuIcon className='block lg:hidden cursor-pointer' onClick={()=> setNavOpen(!navOpen)}/>
                </nav>
            </div>
            {navOpen && (
                <div className={`flex flex-col gap-[2.6875rem] p-6  h-screen bg-white fixed top-0 left-0 transform transition-transform duration-600 ease-in-out w-full ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex justify-between items-center'>
                        <a href="/"><img src={xapicLogo} alt="" className='w-[7rem] h-10' /></a>
                        <CancelIcon className="fa-solid fa-xmark w-6 h-6 cursor-pointer" onClick={()=>setNavOpen(false)} />
                    </div>
                    <nav className='flex flex-col gap-[1.875rem] '>
                        <ul className='flex flex-col gap-[1.875rem] text-[1.25rem] text-[#3E4C57]'>
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
