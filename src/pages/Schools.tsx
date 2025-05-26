import circuitLinesBackground from "../assets/images/circuit-lines@2xl.ee1ad3dd.webp.png"
import { FaArrowRight } from "react-icons/fa6";
import actionKeyImage from "../assets/images/action-key 1.png"
import browseActivityImage from "../assets/images/browse-activity 1.png"
import Typed from 'typed.js';
import { useEffect,useRef, useState } from "react";
import learnFromIndustrialExpertImage1 from "../assets/images/Group 6.png"
import getCertifiedOnCompletionImage1 from "../assets/images/Union.png"
import learnFromIndustrialExpertImage2 from "../assets/images/Frame 72.png"
import getCertifiedOnCompletionImage2 from "../assets/images/Frame 72 (1).png"
import masterDemandSkillsImage from "../assets/images/Frame (3).png"
import careerGrowthImage from "../assets/images/Frame (4).png"
import communityImage from "../assets/images/Frame (5).png"
import startLearningImg from "../assets/images/image (3).png"
import { School } from "../components/SchoolsDetails";
import { FaCircleArrowRight } from "react-icons/fa6";
import { CurveArrowIcon } from "../assets/icons";
import firstTestimonialsVideo from "../assets/videos/AQOi3iCFCuOdUaQi6uLvrB51SbOxrmDKTkM35XubRJ38C3c2JoCojHxPnhooBLhiDckMu_4RwQyj71ZAJjiyOr5Nbh1yGvvOs2ObTnk.mp4"
import ceoImageWithStudent from "../assets/images/Container (4).png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerXapicLogo from "../assets/images/Xapic Logo - Full Colour with White  1.png"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Schools = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null);
 const [dropDown, setDropDown] = useState<{ [key: number] : boolean }>({});

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Transform your Career"],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <>
    {/* heroSection */}

      <div className="md:h-[63.8125rem] bg-[#F2F2F266] w-full relative overflow-hidden">
        <img src={circuitLinesBackground} alt="" className="w-full h-full absolute top-0 left-0" />
        <div className="container pt-[14.375rem] flex flex-col justify-center items-center">
          <div className="max-w-[49.3125rem] h-[31.6875rem] pt-[1.0625rem] text-center relative">
            <img src={actionKeyImage} alt="" className="w-24 h-24 absolute top-0 left-0" />
            <img src={browseActivityImage} alt="" className="w-24 h-24 absolute top-0 right-0" />
            <p className="w-[26.6rem] h-[3.875rem] flex justify-center items-center text-[1.25rem] font-medium mx-auto bg-[#CCCDE7] text-[#00036A]">Master-In Demand Tech Skills</p>
            <div className="flex flex-col justify-center gap-[2rem] items-center mt-[1.4375rem] w-full">
              <h2 className="max-w-[37.3125rem] text-[#3E4C57] text-5xl font-bold" >Elevate Your Skills, <span ref={typedRef}></span>.</h2>
              <p className="font-normal text-[#3E4C57] text-[1.75rem] max-w-[40.8125rem]">Stand out to employers and open doors to new opportunities with certifications that showcase your expertise.</p>
            </div>
            <div className="flex gap-6 justify-center items-center mt-[4.125rem]">
              <button className="button w-[13.5625rem] font-bold">
                <p>Apply Here</p>
                 <FaArrowRight />
              </button>
              <button className="button bg-white border-[1px] border-[#00036A] text-[#00036A] w-[13.5625rem] font-bold">EXPLORE COURSES</button>
            </div>
          </div>
          <div className="flex justify-between md:w-full mt-[6.9375rem] overflow-auto">
              <div className="flex items-center justify-between w-[17.375rem]">
                <img src={learnFromIndustrialExpertImage1} alt="" className="w-[6.25rem] h-[6.25rem]"/>
                <p className="w-[9.625rem]">Learn from Industry experts</p>
              </div>
              <div className="flex items-center justify-between w-[17.375rem]">
                <img src={getCertifiedOnCompletionImage1} alt="" className="w-[6.340625rem] h-[6.25rem]" />
                <p className="w-[9.625rem]">Get certified on completion</p>
              </div>
              <div className="flex items-center justify-between w-[17.375rem]">
                <img src={learnFromIndustrialExpertImage2} alt="" className="w-[6.25rem] h-[6.25rem]" />
                <p className="w-[9.625rem]">Learn from Industry experts</p>
              </div>
              <div className="flex items-center justify-between w-[17.375rem]">
                <img src={getCertifiedOnCompletionImage2} alt="" className="w-[6.25rem] h-[6.25rem]" />
                <p className="w-[9.625rem]">Get certified on completion</p>
              </div>
          </div>
        </div>
		  </div>

      {/* SecondSection */}

      <div className="container  flex flex-col justify-center gap-[4.4375rem] py-[4.5rem] items-center">
        <div className="text-center max-w-[56.4375rem] flex flex-col justify-center items-center gap-8">
          <p className="font-semibold text-5xl max-w-[51.9375rem]">Unlock Your Potential with Expert Software Training</p>
          <p className="text-[1.75rem]"> Our comprehensive software training programs are designed to equip you with the essential skills needed in today’s competitive job market.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-[26.3125rem] h-[18.6875rem] flex flex-col gap-[1rem] justify-center items-center bg-[#EFF0FD66] text-center">
            <img src={masterDemandSkillsImage} alt="" className="w-24 h-24 "/>
            <div className="w-[24.0625rem] flex flex-col gap-[1.0625rem]">
              <p className="font-semibold text-2xl">Master in-Demand Skills</p>
              <p className="font-normal text-[0.875rem]">Learn from industry experts and gain hands-on experience with the latest software tools and technologies.</p>
            </div>
          </div>
          <div className="w-[26.3125rem] h-[18.6875rem] flex flex-col gap-[1rem] justify-center items-center bg-[#EFF0FD66] text-center">
            <img src={careerGrowthImage} alt="" className="w-24 h-24 "/>
            <div className="w-[24.0625rem] flex flex-col gap-[1.0625rem]">
              <p className="font-semibold text-2xl">Accelerate Your Career Growth</p>
              <p className="font-normal text-[0.875rem]">Stand out to employers and open doors to new opportunities with certifications that showcase your expertise</p>
            </div>
          </div>
          <div className="w-[26.3125rem] h-[18.6875rem] flex flex-col gap-[1rem] justify-center items-center bg-[#EFF0FD66] text-center">
            <img src={communityImage} alt="" className="w-24 h-24 "/>
            <div className="w-[24.0625rem] flex flex-col gap-[1.0625rem]">
              <p className="font-semibold text-2xl">Join a Thriving Community</p>
              <p className="font-normal text-[0.875rem]">Connect with fellow learners, share insights, and collaborate on projects that enhance your learning experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}

      <div className="h-[38.375rem] relative">
        <img src={startLearningImg} alt="" className="w-full h-full object-cover"/>
        <div className="w-full h-full absolute top-0 letf-0 text-center text-white gap-[2rem]  flex flex-col justify-center items-center">
          <p className="font-semibold max-w-[49.3125rem] text-[4rem]">Start your Learning Journey Today!</p>
          <button className="button border-[1px] border-white w-[23.609375rem] h-[4.711875rem] bg-transparent">
            <p>Book a consultation</p>
            <CurveArrowIcon />
          </button>
        </div>
      </div>

      {/* Fourth Section */}

      <div className="bg-[#F2F2F266]">
        <div className="container pt-[8.375rem] pb-[3.6875rem]">
          <div className="flex flex-col justify-center mx-auto text-center items-center gap-[2rem] max-w-[75rem]">
            <p className="text-[#3E4C57] text-5xl font-bold">Explore Our Schools</p>
            <p className="text-[1.75rem] max-w-[75rem] font-normal">Whether you're a beginner looking to build foundational skills or an experienced professional seeking advanced training, our diverse course offerings are designed to help you succeed. Dive in and find the perfect course to elevate your expertise!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between mt-[7.5rem]">
            {School.map((school) => (<div className="max-w-[40.1875rem] h-[42.1875rem] bg-white mt-[4.0625rem]">
              <img src={school.imgSrc} alt="" className="h-[25.25rem] w-full" />
              <div className="flex flex-col h-[16.875rem] justify-between pb-[3.3125rem] pt-[1.45875rem] ps-2">
                <p className="text-2xl font-semibold underline">{school.schoolTitle}</p>
                <p className="text-[1rem] font-normal max-w-[36.9375rem]">{school.message}</p>
                <button className="button font-medium text-[1.125rem] p-2 justify-between w-[13.125rem] bg-[#EBECFF] text-[#3E4C57]">
                  <p>Explore School</p>
                  <FaCircleArrowRight className={`${school.btnColor} h-[1.875rem] w-[1.875rem]`} />
                </button>
              </div>
            </div>))}
          </div>
        </div>
      </div>

      {/* Fifth Section */}

      <div className="container py-[4.5rem]">
        <div className="max-w-[81.75rem] flex flex-col text-center justify-center gap-12 items-center mb-16">
          <p className="text-[1.75rem] text-[#FE006F] font-semibold">TESTIMONIALS</p>
          <p className="text-[2.5rem] font-semibold text-[#3E4C57rem] max-w-[73.0625rem]">Don’t Jut Take Our Word For It, Hear From Our Past Students As They Share Their Experience</p>
        </div>
        <div className="w-full">
          <div className="h-[30.0625rem] w-full rounded-tl-2xl rounded-tr-2xl">
            <video src={firstTestimonialsVideo} className="h-full w-full rounded-tl-2xl rounded-tr-2xl object-fill"></video>
            <div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Sixth Section */}

      <div className="container flex flex-col md:flex-row gap-[0.75rem]">
        <img src={ceoImageWithStudent} alt="" className="h-[32.125rem] w-[39.6875rem]" />
        <div className="bg-[#E9F0F666] p-[3.625rem]">
          <div>
            <p className="text-[#1A202C] text-[1.75rem] font-bold">Hear from our CEO</p>
            <p className="text-2xl font-medium">Mr. Daniel Ademeso. MBA</p>
          </div>
          <p className="mt-[1.1875rem] max-w-[37.8125rem] mb-[2.4375rem] leading-8">You are here because you recognize the importance of continuous learning, and I commend you for taking this important step. Our courses are designed by industry experts who bring real-world experience into the classroom, ensuring that you receive not only theoretical knowledge but also practical skills that can be applied immediately.</p>
          <button className="button font-medium text-[1.125rem] p-2 justify-between w-[17.3125rem] text-[white]">
            <p>Begin your journey here</p>
            <FaCircleArrowRight className="text-white w-[1.875rem] h-[1.875rem]" />
          </button>
        </div>
      </div>

      {/* Seventh Section */}

      <div className="container mt-[6rem]">
        <p className="font-semibold text-[2.5rem] text-center">Frequently  Asked Questions</p>
        <div className="bg-[#00011B] flex flex-col mt-24 gap-[2rem] text-white py-[6.625rem]">
          <div className="max-w-[69.8125rem]  mx-auto">
            <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between h-[4.4375rem] border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[1] && "border-[2px] border-white"}`} onClick={() => setDropDown({[1] : true})}>
              <p className="font-bold text-2xl">How do I register?</p>
              {dropDown[1] ? <IoIosArrowUp /> : <IoIosArrowDown /> }
            </div>
            <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[1] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
              <p className="text-[1.125rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
            </div>
          </div>
          <div className="max-w-[69.8125rem] mx-auto">
            <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between h-[4.4375rem] border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[2] && "border-[2px] border-white"}`} onClick={() => setDropDown({[2] : true})}>
              <p className="font-bold text-2xl">How do I register?</p>
              {dropDown[2] ? <IoIosArrowUp /> : <IoIosArrowDown /> }
            </div>
            <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[2] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
              <p className="text-[1.125rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
            </div>
          </div>
          <div className="max-w-[69.8125rem] mx-auto">
            <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between h-[4.4375rem] border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[3] && "border-[2px] border-white"}`} onClick={() => setDropDown({[3] : true})}>
              <p className="font-bold text-2xl">How do I register?</p>
              {dropDown[3] ? <IoIosArrowUp /> : <IoIosArrowDown /> }
            </div>
            <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[3] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
              <p className="text-[1.125rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
            </div>
          </div>
          <div className="max-w-[69.8125rem] mx-auto">
            <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between h-[4.4375rem] border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[4] && "border-[2px] border-white"}`} onClick={() => setDropDown({[4] : true})}>
              <p className="font-bold text-2xl">How do I register?</p>
              {dropDown[4] ? <IoIosArrowUp /> : <IoIosArrowDown /> }
            </div>
            <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[4] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
              <p className="text-[1.125rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
            </div>
          </div>
          <div className="max-w-[69.8125rem] mx-auto">
            <div className={`flex items-center text-2xl cursor-pointer  w-full justify-between h-[4.4375rem] border-b-[2px] border-b-white px-[1.3125rem] ${dropDown[5] && "border-[2px] border-white"}`} onClick={() => setDropDown({[5] : true})}>
              <p className="font-bold text-2xl">How do I register?</p>
              {dropDown ? <IoIosArrowUp /> : <IoIosArrowDown /> }
            </div>
            <div className={`font-normal w-full transition-all duration-500 ease-in-out overflow-hidden ${dropDown[5] ? "max-h-[1000px] ps-[0.75rem] pt-[2.375rem]" : "max-h-0"}`}>
              <p className="text-[1.125rem] ">Our courses vary in duration, ranging from a few weeks to several months. Please check the specific course page for detailed information on duration and schedule.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}

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
        <div className="container pt-[12.3125rem]">
          <div className="flex md:flex-col flex-row justify-between">
            <div className="flex flex-col gap-[3.296875rem]">
              <div className="flex flex-col md:flex-row justify-between">
                <img src={footerXapicLogo} alt="" className="sm:w-[19rem] w-[7.676875rem] h-10 sm:h-[6.1875rem]" />
                <div className="flex flex-col md:flex-row gap-[1.25rem] justify-between text-white text-1rem font-500 md:w-[57.53125rem]">
                  <div className="w-[11.6875rem]">
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold mb-6">Schools</p>
                    <div className="flex flex-col gap-3">
                      <p>Design and Product</p>
                      <p>Engineering and Development</p>
                      <p>Summer Tech School</p>
                      <p>NYSC Training Programme</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold mb-6">Quicklinks</p>
                    <div className="flex flex-col gap-3 cursor-pointer">
                      <p className="navLinks"><a href="">About Us</a></p>
                      <p className="navLinks"><a href="">Our Services</a></p>
                      <p className="navLinks"><a href="">Career</a></p>
                      <p  className="navLinks"><a href="">Contact Us</a></p>
                      <p className="navLinks"><a href="">Design and Products</a></p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold mb-6">Top Courses</p>
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
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold mb-6">Top Courses</p>
                    <div className="flex flex-col gap-3">
                      <p>Lagos : 2nd floor, Leasing House, C & I Leasing Drive, Off Bisola Durosinmi Etti Drive, Off Admiralty way, Lekki Phase 1, Lagos</p>
                      <p>Akure: Xapic Technologies Building, Opposite State High Court, Arakale Road, Akure</p>
                      <p>08167001859</p>
                      <p>info@xapictech.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center">Copyright © 2024. All right reserved.</p>
            </div>
            <div className="flex md:justify-end mb-10 items-start md:items-center  gap-[1rem] text-white">
              <a href=""><FaFacebook className="w-[1rem] h-[1rem]"/></a>
              <a href=""><FaXTwitter className="w-[1rem] h-[1rem]"/></a>
              <a href=""><FaInstagram className="w-[1rem] h-[1rem]"/></a>
              <a href=""><FaLinkedin className="w-[1rem] h-[1rem]"/></a>	
            </div>
          </div>
          


        </div>

		  </div>

    </>
  )
}

export default Schools
