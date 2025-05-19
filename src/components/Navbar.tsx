import { useLocation } from 'react-router-dom';
import xapicLogo from '../assets/Xapic Logo - Full Colour with Blue 2.png'
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from 'react';

const Navbar = () => {
    const location = useLocation().pathname
    const navStyle = "bg-white"

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
            <div className="container">
                <nav className='flex items-center  py-6 h-[6.75rem] justify-between'>
                    <img src={xapicLogo} alt="" className='w-[11.4375rem] h-[3.75rem]' />
                    <ul className='flex text-[1.25rem] text-[#3E4C57] gap-[1.875rem]'>
                        <li><a href="">Schools</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Portolio</a></li>
                        <li><a href="">Who we are</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <button className='button w-[14.3125rem]'>
                        <p>Book a Consultation</p>
                        <FaArrowRight />
                    </button>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
