import { RiArrowRightLine } from "react-icons/ri";
import heroSectionImage from "../assets/images/Group 31 (1).png"
import checkIcon from "../assets/images/ei_check.png"
import gameDevelopmentSchoolIcon from "../assets/images/Frame 367 (3).png"
import webDesignIcon from "../assets/images/Frame 367 (4).png"
import graphicDesignSchoolIcon from "../assets/images/Frame 367 (2).png"
import VideoModal from "../components/VideoModal";
import testimonialImage1 from "../assets/images/Group 3 (1).webp"
import testimonialImage2 from "../assets/images/Group 4.webp"
import testimonialImage3 from "../assets/images/Group 3.webp"
import testimonialImage4 from "../assets/images/Group 2 (1).webp"
import testimonialImage5 from "../assets/images/Group 2.webp"
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import footerXapicLogo from "../assets/images/Xapic Logo - Full Colour with White  1.png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Typed from 'typed.js';
import childImage from "../assets/images/pikin 1.webp"

const SummerSchool = () => {
    const typedRef = useRef<HTMLSpanElement | null>(null);
    const [dropDown, setDropDown] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ["Passion for Technology"],
                typeSpeed: 90,
                backSpeed: 90,
                loop: true,
            });

            return () => typed.destroy();
        }
    }, []);
    useEffect(() => {
            AOS.init({
                duration: 800,
            });
        }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
         {/* heroSection */}
      <VideoModal />
      <div className="overflow-hidden">
        <div className="container flex flex-col md:flex-row items-center justify-between pt-32 md:pt-[15.75rem] pb-[4.11625rem]">
            <div className="" >
              <h2 className="md:text-5xl text-2xl  text-center md:text-left font-bold text-[#3E4C57] mb-[1.3125rem] md:mb-[5.75rem] md:leading-[3.75rem]">
                <p>Ignite your Child’s</p>
                <span ref={typedRef}></span>
              </h2>
              <p className="md:text-[1.5rem] text-[0.875rem] text-center md:text-left mb-[0.9375rem] md:mb-[5.5rem] font-medium leading-8 max-w-[40.125rem]" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Xapictech kids summer tech school program is designed for young minds eager to learn, create, and innovate. </p>
              <div className="flex flex-col md:flex-row gap-[0.9375rem] md:gap-6 items-center" >
                  <button className="button md:h-[3.5rem] h-[2.5rem] md:text-2xl text-[1rem] font-medium  w-[9.0625rem] md:w-[14.1875rem] gap-[0.625rem]">
                      <p className="md:w-[10.0625rem]">Apply Now</p>
                      <RiArrowRightLine className="w-6 h-6"/>
                  </button>
                  <button className="button md:text-2xl text-[1rem] md:h-[3.5rem] h-[2.5rem] leading-0 w-[14.9375rem] md:w-[20.3125rem] bg-white border-[1px] border-[#00036A] text-[#00036A] font-medium">
                    <p>Download curriculum</p>
                    <RiArrowRightLine className="text-[#00036A] w-6 h-6"/>
                  </button>
              </div>
            </div>
            <div className="max-w-[39.3125rem] mt-[2rem] md:mt-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <img src={heroSectionImage}alt="" />
            </div>
        </div>
      </div>

     {/* SecondSection */}

      <div className="bg-[#FCFCFF] overflow-hidden">
      <div className="container pt-[3.25rem] md:pt-[7rem] pb-[4.625rem]">
        <div className="max-w-[61.0625rem] flex md:ml-0 mx-auto text-center md:text-left flex-col gap-6" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
          <p className="font-bold md:text-5xl text-[1.25rem] text-[#3E4C57]">Choose your Course Package</p>
          <p className="font-normal text-[1rem] md:text-[1.75rem]">Empowering innovation with a cutting-edge tech stack designed for speed, scalability, quality and seamless collaboration.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[3.25rem] md:mt-24">
          <div className="px-[1rem] bg-white py-6" data-aos="fade-left" data-aos-delay='200' data-aos-duration="1000">
            <p className="md:text-[1.75rem] text-[1.25rem] text-[#3E4C57] font-bold mb-2">Game development</p>
            <p className="md:text-[1rem] text-[0.875rem] font-medium">Invest in yourself, Unlock premium user experience and user interface skills,</p>
            <p className="md:text-[2.625rem] text-[2rem] font-extrabold text-[#3E4C57] mt-4 mb-6">#70,000</p>
            <button className="button h-[2.875rem] w-full">Enrol now</button>
            <div className="flex md:text-[1rem] text-[0.875rem] flex-col gap-3 my-2.5">
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Earn a certificate</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Portfolio worthy projects</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Access to conducive workspace</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Installment-based payment plan</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Beginner-friendly! No experience needed</p>
              </div>
            </div>
            <div className="h-20 flex gap-[0.75rem] items-center border-[1px] border-[#00000026] ps-2">
              <div className="h-[2.5rem] w-[6.5rem]">
                <img src={gameDevelopmentSchoolIcon} alt="" className=""/>
              </div>
              <p className="md:text-[1rem] text-[0.875rem] font-medium max-w-[11.1875rem] h-[2.5rem]">Become an expert in these UX tools</p>
            </div>
          </div>
          <div className="px-[1rem] bg-white py-6" data-aos="fade-up" data-aos-delay='200' data-aos-duration="1000">
            <p className="md:text-[1.75rem] text-[1.25rem] text-[#3E4C57] font-bold mb-2">Web Design</p>
            <p className="md:text-[1rem] text-[0.875rem] font-medium">Invest in yourself, Unlock premium user experience and user interface skills,</p>
            <p className="md:text-[2.625rem] text-[2rem] font-extrabold text-[#3E4C57] mt-4 mb-6">#70,000</p>
            <button className="button h-[2.875rem] w-full">Enrol now</button>
            <div className="flex md:text-[1rem] text-[0.875rem] flex-col gap-3 my-2.5">
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Earn a certificate</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Portfolio worthy projects</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Access to conducive workspace</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Installment-based payment plan</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Beginner-friendly! No experience needed</p>
              </div>
            </div>
            <div className="h-20 flex gap-[0.75rem] items-center border-[1px] border-[#00000026] ps-2">
              <div className="h-[2.5rem] w-[4.375rem]">
                <img src={webDesignIcon} alt="" className=""/>
              </div>
              <p className="md:text-[1rem] text-[0.875rem] font-medium max-w-[14.375rem] h-[2.5rem]">Become an expert in these product management tools.</p>
            </div>
          </div>
          <div className="px-[1rem] bg-white py-6" data-aos="fade-right" data-aos-delay='200' data-aos-duration="1000">
            <p className="md:text-[1.75rem] text-[1.25rem] text-[#3E4C57] font-bold mb-2">Graphics Design</p>
            <p className="md:text-[1rem] text-[0.875rem] font-medium">Invest in yourself, Unlock premium user experience and user interface skills,</p>
            <p className="md:text-[2.625rem] text-[2rem] font-extrabold text-[#3E4C57] mt-4 mb-6">#70,000</p>
            <button className="button h-[2.875rem] w-full">Enrol now</button>
            <div className="flex md:text-[1rem] text-[0.875rem] flex-col gap-3 my-2.5">
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Earn a certificate</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Portfolio worthy projects</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Access to conducive workspace</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Installment-based payment plan</p>
              </div>
              <div className="flex items-center">
                <img src={checkIcon} alt="" className="w-6 h-6" />
                <p className="">Beginner-friendly! No experience needed</p>
              </div>
            </div>
            <div className="h-20 flex gap-[0.75rem] items-center border-[1px] border-[#00000026] ps-2">
              <div className="h-[2.5rem] w-[6.5rem]">
                <img src={graphicDesignSchoolIcon} alt="" className=""/>
              </div>
              <p className="md:text-[1rem] text-[0.875rem] font-medium max-w-[11.1875rem] h-[2.5rem]">Become an expert in these design  tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Third Section */}

      <div className="container flex flex-col md:flex-row items-center gap-[3.6875rem] pt-[8.4375rem] pb-[4.5rem]">
        <div className="max-w-[40.25rem] text-center md:text-left" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          <p className="md:text-5xl text-2xl text-[#3E4C57] font-bold md:mb-12 mb-4">ICT Seminars In schools</p>
          <p className="md:text-[1.75rem] text-[1rem] italic font-semibold md:leading-10 md:mb-8 mb-4">Helping kids and teens connect with the possibilities of the digital age</p>
          <p className="md:text-[1.75rem] text-[1rem] font-medium text-[#3E4C57]">Digital literacy is not only computer usage, it is how to navigate an online world safely and in a responsible manner. Our programs enable children to evaluate, communicate and create across a range of digital contexts. We do this to build up those skills that will not just help them get ahead in school but will also get them ahead in life</p>
          <button className="button w-[11.375rem] mt-8 mx-auto md:ml-0">Contact us</button>
        </div>
        <div className="flex md:gap-[1.25rem] gap-[0.7175rem]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="flex flex-col md:gap-[1.25rem] gap-[0.7175rem]">
            <div className="overflow-hidden">
              <img src={testimonialImage5} alt="" className="hover:scale-105 transition-all duration-500" />
            </div>
            <div className="overflow-hidden">
              <img src={testimonialImage4} alt="" className="hover:scale-105 transition-all duration-500" />
            </div>
          </div>
          <div className="flex flex-col md:gap-[1.25rem] gap-[0.7175rem]">
            <div className="overflow-hidden">
              <img src={testimonialImage3} alt="" className="hover:scale-105 transition-all duration-500" />
            </div>
            <div className="overflow-hidden">
              <img src={testimonialImage2} alt="" className="hover:scale-105 transition-all duration-500" />
            </div>
            <div className="overflow-hidden">
              <img src={testimonialImage1} alt="" className="hover:scale-105 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* fourthSection */}
         <div className="container mt-0 md:mt-[6rem]">
              <p className="font-semibold md:text-[2.5rem] text-[1.25rem] text-center" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">Frequently  Asked Questions</p>
              <div className="bg-[#000235]  flex flex-col mt-0 md:mt-24 gap-[2rem] text-white sm:py-[6.625rem] py-[2.5rem]">
                  <div className="max-w-[69.8125rem] container mx-auto">
                      <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between min-h-[4.4375rem]  border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[1] && "border-[2px] border-white"}`} onClick={() => setDropDown({ [1]: !dropDown[1] })}>
                          <p className=" font-semibold md:text-[1.125rem] text-[1rem] max-w-[18.0625rem] sm:max-w-[57.4375rem]">How do I register?</p>
                          {dropDown[1] ? <IoIosArrowUp className="w-6 h-6" /> : <IoIosArrowDown className="w-6 h-6" />}
                      </div>
                      <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[1] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
                          <p className="md:text-[1.125rem] text-[0.875rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
                      </div>
                  </div>
                  <div className="max-w-[69.8125rem] container mx-auto">
                      <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between min-h-[4.4375rem]  border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[2] && "border-[2px] border-white"}`} onClick={() => setDropDown({ [2]: !dropDown[2] })}>
                          <p className=" font-semibold md:text-[1.125rem] text-[1rem] max-w-[18.0625rem] sm:max-w-[57.4375rem]">What is the level of experience required for enrollment?</p>
                          {dropDown[2] ? <IoIosArrowUp className="w-6 h-6" /> : <IoIosArrowDown className="w-6 h-6" />}
                      </div>
                      <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[2] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
                          <p className="md:text-[1.125rem] text-[0.875rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
                      </div>
                  </div>
                  <div className="max-w-[69.8125rem] container mx-auto">
                      <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between min-h-[4.4375rem]  border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[3] && "border-[2px] border-white"}`} onClick={() => setDropDown({ [3]: !dropDown[3] })}>
                          <p className=" font-semibold md:text-[1.125rem] text-[1rem] max-w-[18.0625rem] sm:max-w-[57.4375rem]">What payment options do you offer, and can I pay in installments?</p>
                          {dropDown[3] ? <IoIosArrowUp className="w-6 h-6" /> : <IoIosArrowDown className="w-6 h-6" />}
                      </div>
                      <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[3] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
                          <p className="md:text-[1.125rem] text-[0.875rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
                      </div>
                  </div>
                  <div className="max-w-[69.8125rem] container mx-auto">
                      <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between min-h-[4.4375rem]  border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[4] && "border-[2px] border-white"}`} onClick={() => setDropDown({ [4]: !dropDown[4] })}>
                          <p className=" font-semibold md:text-[1.125rem] text-[1rem] max-w-[18.0625rem] sm:max-w-[57.4375rem]">Are the courses offered online, and if so, what is the format like?Does Xapictech offer online learning?</p>
                          {dropDown[4] ? <IoIosArrowUp className="w-6 h-6" /> : <IoIosArrowDown className="w-6 h-6" />}
                      </div>
                      <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[4] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
                          <p className="md:text-[1.125rem] text-[0.875rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
                      </div>
                  </div>
                  <div className="max-w-[69.8125rem] container mx-auto">
                      <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between min-h-[4.4375rem]  border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[5] && "border-[2px] border-white"}`} onClick={() => setDropDown({ [5]: !dropDown[5] })}>
                          <p className=" font-semibold md:text-[1.125rem] text-[1rem] max-w-[18.0625rem] sm:max-w-[57.4375rem]">What kind of certification or credentials will I receive upon completion?</p>
                          {dropDown[5] ? <IoIosArrowUp className="w-6 h-6" /> : <IoIosArrowDown className="w-6 h-6" />}
                      </div>
                      <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[5] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
                          <p className="md:text-[1.125rem] text-[0.875rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
                      </div>
                  </div>
              </div>
          </div>

        {/* Fifth Section */}
          <div className="bg-[#00011B] h-[25.0625rem]  md:h-[30.5rem]">
            <div className="overflow-hidden container h-full relative pt-[1.5625rem] flex flex-col md:flex-row justify-between items-center  mt-24">
              <div className="max-w-[47.6875rem] text-white" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <p className="font-bold md:text-[2.5rem] text-2xl">Enroll Your Child Today!</p>
                <p className="font-medium md:text-[1.75rem] text-[1rem] md:mt-[3.3125rem] mt-2 leading-9">Empower the next generation with the skills they need to succeed in an increasingly connected world.</p>
                <button className="button md:w-[13.9375rem] w-[6.875rem] md:mt-[1.5rem] mt-[1rem] border-[1px] border-[#F2F2F2CC]">Enroll now</button>
              </div>
              <div className="absolute bottom-0 right-0  w-[14.949375rem] md:w-[26.6875rem]" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <img src={childImage} alt="" className="w-full" />
              </div>
            </div>
          </div>

        {/* footer Section */}
           <div className="bg-[#00011B] relative mt-[8.4375rem] w-full">
                <div className="flex justify-center w-[95%]! md:w-full mx-auto! items-center md[21.875rem]">
                    <div className="flex flex-col md:flex-row justify-center w-[95%] mx-auto md:items-center gap-6 ps-6 md:gap-[3rem] bg-[#000250] max-w-[90.8125rem]  h-[10.875rem] absolute -top-20">
                        <p className="md:text-[1.75rem] text-white font-600 text-[1rem]">We are excited to be part of your educational journey!</p>
                        <div className="flex gap-6">
                            <button className="button bg-[#0096CC] w-[12.4375rem] text-[1.25rem]">
                                <p>APPLY HERE</p>
                                <FaArrowRight />
                            </button>
                            <button className="w-[15.5625rem] hidden md:block text-[1.25rem] text-white cursor-pointer border-white border-[1px]">
                                BOOK A CONSULTATION
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container pt-[12.3125rem] pb-[3.33125rem]">
                    <div className="flex md:flex-col flex-row justify-between">
                        <div className="flex flex-col gap-[3.296875rem]">
                            <div className="flex flex-col md:flex-row justify-between gap-[3.0625rem]">
                                <img src={footerXapicLogo} alt="" className="sm:w-[19rem] w-[7.676875rem] h-10 sm:h-[6.1875rem]" />
                                <div className="flex flex-col md:flex-row sm:gap-[1.25rem] gap-[1.25rem] justify-between text-white text-1rem font-500 md:w-[57.53125rem]">
                                    <div className="w-[11.6875rem]">
                                        <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">Schools</p>
                                        <div className="flex flex-col gap-3">
                                            <p>Design and Product</p>
                                            <p>Engineering and Development</p>
                                            <p>Summer Tech School</p>
                                            <p>NYSC Training Programme</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">Quicklinks</p>
                                        <div className="flex flex-col gap-3 cursor-pointer">
                                            <p className="navLinks"><a href="">About Us</a></p>
                                            <p className="navLinks"><a href="">Our Services</a></p>
                                            <p className="navLinks"><a href="">Career</a></p>
                                            <p className="navLinks"><a href="">Contact Us</a></p>
                                            <p className="navLinks"><a href="">Design and Products</a></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">Top Courses</p>
                                        <div className="flex flex-col gap-3">
                                            <p>Devops Engineering</p>
                                            <p>Product Management</p>
                                            <p>Front-end Engineering</p>
                                            <p>Product Design</p>
                                            <p>Graphics Design</p>
                                            <p>Backend Engineering</p>
                                        </div>
                                    </div>
                                    <div className="w-[14.75rem]">
                                        <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">Top Courses</p>
                                        <div className="flex flex-col gap-3">
                                            <p>Lagos : 2nd floor, Leasing House, C & I Leasing Drive, Off Bisola Durosinmi Etti Drive, Off Admiralty way, Lekki Phase 1, Lagos</p>
                                            <p>Akure: Xapic Technologies Building, Opposite State High Court, Arakale Road, Akure</p>
                                            <p>08167001859</p>
                                            <p>info@xapictech.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="md:text-center font-medium text-[0.75rem]">Copyright © 2024. All right reserved.</p>
                        </div>
                        <div className="flex md:justify-end mb-10 items-start md:items-center gap-[1rem] text-white">
                            <a href=""><FaFacebook className="w-[1rem] h-[1rem]" /></a>
                            <a href=""><FaXTwitter className="w-[1rem] h-[1rem]" /></a>
                            <a href=""><FaInstagram className="w-[1rem] h-[1rem]" /></a>
                            <a href=""><FaLinkedin className="w-[1rem] h-[1rem]" /></a>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SummerSchool
