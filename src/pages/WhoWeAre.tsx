import heroImage1 from "../assets/images/654d32a3c70833d9812a979a_image1.jpg.webp"
import heroImage2 from "../assets/images/Listitem → 654d327593d3994b0abc4be8_image3.jpg.webp"
import heroImage3 from "../assets/images/Listitem → 67923b4003bcccfc0c9b36b6_nosochki-min-p-2000.jpg.webp"
import heroImage4 from "../assets/images/Listitem.webp"
import { FaArrowRight } from "react-icons/fa6";
import { IntegrityIcon, MinusBtnIcon } from "../assets/icons";
import { PlusBtnIcon } from "../assets/icons";
import { useState, useEffect } from "react";
import { teamBios } from "../components/TeamBio";
import whoWeAreJoinTeamImage from "../assets/images/image (12).webp"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerXapicLogo from "../assets/images/Xapic Logo - Full Colour with White  1.png";
import { InnovationIcon } from "../assets/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {
  const [openBios, setOpenBios] = useState<{ [key in string]: boolean }>({})
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
  AOS.init({
    duration: 800,
  });
	}, []);
  return (
    <>
      {/* heroSection */}
       <div className="container md:pt-[17rem] pt-[8.5rem]">
        <div className="flex flex-col md:flex-row md:items-center justify-between text-[#3E4C57]">
          <div className="lg:text-5xl md:text-3xl text-2xl md:mb-0 mb-[1rem] font-semibold md:leading-14">
            <p>Reshaping the</p>
            <div className="flex items-center">
              <p>Future Through</p>
              <p className="md:h-[1.0625rem] w-[4.5rem] md:w-[10.125rem] bg-[#00011B] h-[0.875rem]"></p>
            </div>
            <p>Simplified Technology</p>
          </div>
          <p className="md:text-[1.75rem] text-[1rem] md:mb-0 mb-6 font-medium max-w-[40.1875rem] leading-[100%] md:leading-[2.625rem]">
            Our vision is to be the leading catalyst for technological advancement and personal growth across Africa.
          </p>
          <button className="button flex md:hidden h-[2.5rem] w-[11rem]">
            <p>View openings</p>
            <FaArrowRight className="w-6 h-6 RightArrow" />
          </button>
        </div>
        <div className="flex gap-[0.9375rem] mt-[4.4375rem]">
          <div>
            <div className="overflow-hidden">
              <img src={heroImage1} alt="" className="hover:scale-105 transition-all duration-500" />
            </div>
            <div className="flex gap-2.5 mt-[0.625rem]">
              <div className="w-[9.125rem] h-[9.875rem] sm:h-[21.6875rem] bg-[#FE338C]"></div>
              <div className="overflow-hidden w-full lg:h-[19.1875rem] lg:w-[18.25rem] relative">
                <div className="absolute h-full w-full">
                  <img src={heroImage2} alt="" className="hover:scale-105 transition-all duration-500" />
                </div>
                <div className="absolute bottom-[0.75px] left-0">
                  <button className="button hidden md:flex w-[12.375rem]">
                    <p>View openings</p>
                    <FaArrowRight className="w-6 h-6 RightArrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden h-[15.875rem] md:h-full">
            <img src={heroImage3} alt="" className="hover:scale-105 transition-all duration-500" />
          </div>
          <div className="lg:block hidden">
            <div className="overflow-hidden">
              <img src={heroImage4} alt="" className="hover:scale-105 transition-all duration-500"/>
            </div>
            <div className="h-[7.6875rem] w-[33.0625rem] bg-[#006AFF] mt-[0.625rem]"></div>
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div className="container flex flex-col md:flex-row gap-[1.375rem] md:gap-[3.125rem] bg-[#FFCCE226] pt-[4.125rem] pb-[2.75rem] mt-[5.1875rem]">
        <div className="max-w-[24.4375rem] ">
          <div className="flex items-center mb-2 md:mb-[1.375rem]">
            <div className="w-[1.37625rem] border-[3px] boder-[#00036A]"></div>
            <p className="sm:text-[1.25rem] font-semibold text-[1rem]">WHO WE ARE</p>
          </div>
          <div className="max-w-[19.4375rem] leading-14">
            <p className="md:text-[2.5rem] text-2xl font-bold">Xapic Founding Story</p>
          </div>
        </div>
        <div className="max-w-[48.625rem]">
          <p className="md:text-[1.75rem] font-medium text-[1rem] leading-[100%] md:leading-[2.625rem]">Xapictech was founded out of a passion for bridging the technology gap in Africa and empowering individuals through education. Our journey began when a group of tech enthusiasts recognized the immense potential of local talent and the pressing need for innovative software solutions tailored to our unique challenges.</p>
        </div>
      </div>

      {/* Third Section */}
      <div className="container bg-[#044B651A] mt-[5.125rem] pt-[7.5rem] md:pe-[6.0625rem] md:ps-[2.6875rem] gap-[1.875rem] pb-[10.1875rem] mx-auto grid grid-cols-1 md:grid-cols-3 ">
            <div >
              <div className="flex items-center mb-[1.375rem]">
                <div className="w-[1.37625rem] border-[3px] boder-[#00036A]"></div>
                <p className="text-[1.25rem] font-bold">OUR VALUE</p>
              </div>
              <div className="min-w-[10.9375rem] leading-14">
                <p className="text-[2.5rem] w-full font-semibold">The Core of Xapic</p>
              </div>
            </div>
            <div className="">
              <IntegrityIcon className="w-12 h-12 mb-6" />
              <p className="text-[1.75rem] font-bold mb-[1rem]">Integrity</p>
              <p className="md:text-[1.25rem] text-[1rem] font-medium leading-7 mt-4">Integrity is the foundation of our relationships with clients, partners, and team members. We believe in doing the right thing, even when it’s difficult, and we take responsibility for our action</p>
            </div>
            <div className="">
              <InnovationIcon className="w-12 h-12 mb-6" />
              <p className="text-[1.75rem] font-bold mb-[1rem]">Innovation</p>
              <p className="md:text-[1.25rem] text-[1rem] font-medium leading-7 mt-4">Innovation drives us to continuously improve and adapt in a fast-paced digital landscape.</p>
            </div>
            <div className=" mt-[1.875rem]">
              <IntegrityIcon className="w-12 h-12 mb-6" />
              <p className="text-[1.75rem] font-bold mb-[1rem]">Empowerment</p>
              <p className="md:text-[1.25rem] text-[1rem] font-medium leading-7 mt-4">We believe that everyone should have the opportunity to learn, grow, and thrive. This we do by By providing accessible training programs and resources needed to succeed in the digital age.</p>
            </div>
            <div className=" mt-[1.875rem]">
              <IntegrityIcon className="w-12 h-12 mb-6" />
              <p className="text-[1.75rem] font-bold mb-[1rem]">Collaboration</p>
              <p className="md:text-[1.25rem] text-[1rem] font-medium leading-7 mt-4">Teamwork is at the heart of our success. We foster a collaborative environment where diverse ideas and perspectives are valued.</p>
            </div>
            <div className=" mt-[1.875rem]">
              <IntegrityIcon className="w-12 h-12 mb-6" />
              <p className="text-[1.75rem] font-bold mb-[1rem]">Excellence</p>
              <p className="md:text-[1.25rem] text-[1rem] font-medium leading-7 mt-4">Our commitment to quality ensures that we deliver exceptional products and services that exceed expectations. We continuously seek improvement and take pride in our work, aiming for the highest achievements in the tech industry.</p>
            </div>
          </div>

      {/* Fourth Section */}
      <div className="container mt-[7.5rem]">
        <p className="font-bold max-w-[40.25rem] mx-auto text-5xl mb-[3rem] leading-14 text-center">Meet Our Team of Experts shaping the Future</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {teamBios.map((teamBio) => (
            <div key={teamBio.id} className="mt-[2.3125rem]">
              <div className="overflow-hidden">
                <img src={teamBio.memberImg} alt="" className={`h-full transition-all duration-500 hover:scale-105 w-full object-cover inset-0 ${openBios[teamBio.id] ? '' : 'sample'}`} />
              </div>
              <div className="flex justify-between mt-[1rem]">
                <div className="max-w-[12.375rem] h-[4.75rem]">
                  <p className="text-[1.25rem] font-semibold">{teamBio.memberName}</p>
                  <p className="font-medium text-[1.125rem] leading-5">{teamBio.memberTitle}</p>
                </div>
                {openBios[teamBio.id] ? (
                  <MinusBtnIcon onClick={() =>
                    setOpenBios((prev) => ({ ...prev, [teamBio.id]: false }))
                  } />
                ) : (
                  <PlusBtnIcon onClick={() =>
                    setOpenBios((prev) => ({ ...prev, [teamBio.id]: true }))
                  } />
                )}
              </div>
              <div className={`overflow-hidden transition-all text-[#657079] font-semibold text-[1.25rem] duration-500 ${openBios[teamBio.id] ? "max-h-[1000px]" : "max-h-0"}`}>
                <p className="leading-7">{teamBio.memberBio}</p>
                <p className="underline mt-4 cursor-pointer">LinkedIn</p>
              </div>
            </div>
          ))}
          <div className="mt-[4.3125rem]">
            <div className="overflow-hidden">
              <img src={whoWeAreJoinTeamImage} alt="" className="w-full h-full hover:scale-105 transition-all duration-500 inset-0 sample" />
            </div>
            <div className="mt-[1rem] h-[4.75rem]">
              <p className="underline text-[#00036A] font-semibold text-[1.25rem] cursor-pointer">Join the Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section */}

      <div className="bg-[#00011B] mt-[6.9375rem] h-[18.375rem] flex justify-center items-center">
        <div className="container flex flex-col md:flex-row  justify-between h-[9rem]">
          <p className="max-w-[36.0625rem] w-full md:text-[2.5rem] text-[1.25rem] text-white">
            Interested in joining Xapic team or partnering with us for a
            project?
          </p>
          <div className="flex items-center text-[#F2F2F2CC] gap-[1.9375rem]">
            <p className="text-[1.25rem] border-b-[#F2F2F2CC] border-b-2">
              <a href="">Join our Team</a>
            </p>
            <a
              href=""
              className="w-[15.9375rem] h-14 border-[1px] border-[#F2F2F2CC] font-extralight justify-center items-center text-2xl cursor-pointer hidden md:flex"
            >
              Send a message
            </a>
          </div>
        </div>
      </div>


      {/* Footer Section */}

      <div className="bg-[#00011B] relative mt-[8.4375rem] w-full">
        <div className="flex justify-center w-[95%]! md:w-full mx-auto! items-center md[21.875rem]">
          <div className="flex flex-col md:flex-row justify-center w-[95%] mx-auto md:items-center gap-6 ps-6 md:gap-[3rem] bg-[#000250] max-w-[90.8125rem]  h-[10.875rem] absolute -top-20">
            <p className="md:text-[1.75rem] text-white font-600 text-[1rem]">
              We are excited to be part of your educational journey!
            </p>
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
                <img
                  src={footerXapicLogo}
                  alt=""
                  className="sm:w-[19rem] w-[7.676875rem] h-10 sm:h-[6.1875rem]"
                />
                <div className="flex flex-col md:flex-row sm:gap-[1.25rem] gap-[1.25rem] justify-between text-white text-1rem font-500 md:max-w-[57.53125rem]">
                  <div className="w-[11.6875rem]">
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">
                      Schools
                    </p>
                    <div className="flex flex-col gap-3">
                      <p>Design and Product</p>
                      <p>Engineering and Development</p>
                      <p>Summer Tech School</p>
                      <p>NYSC Training Programme</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">
                      Quicklinks
                    </p>
                    <div className="flex flex-col gap-3 cursor-pointer">
                      <p className="navLinks">
                        <a href="">About Us</a>
                      </p>
                      <p className="navLinks">
                        <a href="">Our Services</a>
                      </p>
                      <p className="navLinks">
                        <a href="">Career</a>
                      </p>
                      <p className="navLinks">
                        <a href="">Contact Us</a>
                      </p>
                      <p className="navLinks">
                        <a href="">Design and Products</a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">
                      Top Courses
                    </p>
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
                    <p className="text-[#CCCDE7] text-[1.25rem] font-semibold sm:mb-6 mb-2 ">
                      Top Courses
                    </p>
                    <div className="flex flex-col gap-3">
                      <p>
                        Lagos : 2nd floor, Leasing House, C & I Leasing Drive,
                        Off Bisola Durosinmi Etti Drive, Off Admiralty way,
                        Lekki Phase 1, Lagos
                      </p>
                      <p>
                        Akure: Xapic Technologies Building, Opposite State High
                        Court, Arakale Road, Akure
                      </p>
                      <p>08167001859</p>
                      <p>info@xapictech.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="md:text-center font-extralight text-[0.75rem]">
                Copyright © 2024. All right reserved.
              </p>
            </div>
            <div className="flex md:justify-end mb-10 items-start md:items-center gap-[1rem] text-white">
              <a href="">
                <FaFacebook className="w-[1rem] h-[1rem]" />
              </a>
              <a href="">
                <FaXTwitter className="w-[1rem] h-[1rem]" />
              </a>
              <a href="">
                <FaInstagram className="w-[1rem] h-[1rem]" />
              </a>
              <a href="">
                <FaLinkedin className="w-[1rem] h-[1rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeAre
