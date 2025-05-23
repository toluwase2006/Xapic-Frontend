import circuitLinesBackground from "../assets/images/circuit-lines@2xl.ee1ad3dd.webp.png"
import { FaArrowRight } from "react-icons/fa6";
import actionKeyImage from "../assets/images/action-key 1.png"
import browseActivityImage from "../assets/images/browse-activity 1.png"
import Typed from 'typed.js';
import { useEffect,useRef } from "react";
import learnFromIndustrialExpertImage1 from "../assets/images/Group 6.png"
import getCertifiedOnCompletionImage1 from "../assets/images/Union.png"
import learnFromIndustrialExpertImage2 from "../assets/images/Frame 72.png"
import getCertifiedOnCompletionImage2 from "../assets/images/Frame 72 (1).png"
import masterDemandSkillsImage from "../assets/images/Frame (3).png"
import careerGrowthImage from "../assets/images/Frame (4).png"
import communityImage from "../assets/images/Frame (5).png"
import startLearningImg from "../assets/images/image (3).png"
import { CircleRightArrowIcon, CurveArrowIcon } from "../assets/icons";
import { School } from "../components/SchoolsDetails";
import { FaCircleArrowRight } from "react-icons/fa6";

const Schools = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Transform your Career"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <>
    {/* heroSection */}

      <div className="md:h-[63.8125rem] w-full relative overflow-hidden">
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
          <div className="flex justify-between w-full mt-[6.9375rem]">
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
        <div className="text-center w-[56.4375rem] flex flex-col justify-center items-center gap-8">
          <p className="font-semibold text-5xl w-[51.9375rem]">Unlock Your Potential with Expert Software Training</p>
          <p className="text-[1.75rem]"> Our comprehensive software training programs are designed to equip you with the essential skills needed in today’s competitive job market.</p>
        </div>
        <div className="flex items-center justify-between w-full">
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
        <img src={startLearningImg} alt="" className="w-full h-full"/>
        <div className="w-full h-full absolute top-0 letf-0 text-center text-white gap-[2rem]  flex flex-col justify-center items-center">
          <p className="font-semibold w-[49.3125rem] text-[4rem]">Start your Learning Journey Today!</p>
          <button className="button border-[1px] border-white w-[23.609375rem] h-[4.711875rem] bg-transparent">
            <p>Book a consultation</p>
            <CurveArrowIcon />
          </button>
        </div>
      </div>

      {/* Fourth Section */}

      <div className="bg-[#F2F2F266]">
        <div className="container pt-[8.375rem] pb-[3.6875rem]">
          <div className="flex flex-col justify-center items-center gap-[2rem] w-[75rem]">
            <p className="text-[#3E4C57] text-5xl font-bold">Explore Our Schools</p>
            <p className="text-[1.75rem] max-w-[75rem] font-normal">Whether you're a beginner looking to build foundational skills or an experienced professional seeking advanced training, our diverse course offerings are designed to help you succeed. Dive in and find the perfect course to elevate your expertise!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between mt-[7.5rem]">
            {School.map((school) => (<div className="w-[40.1875rem] h-[42.1875rem] bg-white mt-[4.0625rem]">
              <img src={school.imgSrc} alt="" className="h-[25.25rem] w-full" />
              <div className="flex flex-col h-[16.875rem] justify-between pb-[3.3125rem] pt-[1.45875rem] ps-2">
                <p className="text-2xl font-semibold underline">{school.schoolTitle}</p>
                <p className="text-[1rem] font-normal">{school.message}</p>
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

      <div>
        <p></p>
      </div>

    </>
  )
}

export default Schools
