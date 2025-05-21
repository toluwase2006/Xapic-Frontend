import { LongArrowIcon } from "../assets/icons";
import VideoPlayerBg from "../assets/images/videoplayer.png";
import heroImage from "../assets/images/Mask group (2).png";
import { RiArrowRightUpLine } from "react-icons/ri";
import heroVector from "../assets/images/Vector 165.png"
import secondSectionleftImage from "../assets/images/Group 17.png"
import { FaArrowRight } from "react-icons/fa6";
import secondSectionRightImage from "../assets/images/Vision.png"
import recruitmentIcon from "../assets/images/fluent-mdl2_recruitment-management.png"
import softwareDevelopmentIcon from "../assets/images/carbon_development.png"
import cloudSolutionIcon from "../assets/images/eos-icons_cloud-computing-outlined.png"
import trainingDevelopmentIcon from "../assets/images/oui_training.png" 
import desktopAgapeSpringSiteImg from "../assets/images/Group 45.png"
import mobileAgapeSpringSiteImg from "../assets/images/Group 40.png"
import edulyncxaSiteImg from "../assets/images/Group 44.png"
import circuitLinesBackground from "../assets/images/circuit-lines@2xl.ee1ad3dd.webp.png"
import companiesLogo1 from "../assets/Logos/Frame 313.png"
import companiesLogo2 from "../assets/Logos/Frame 314.png"
import clientImage from "../assets/images/Group 14 (2).png"
import footerXapicLogo from "../assets/images/Xapic Logo - Full Colour with White  1.png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const LandingPage = () => {
  return (
	<>
	{/* Hero Section */}
		<div className="bg-gradient-to-br from-[#00BBFF1A] to-[#FE006F1A] sm:h-[66.625rem] w-full overflow-hidden">
			<div className="container pt-[10.375rem]">
			<div className="relative">
				<div className="relative z-1">
					<h1 className="font-extrabold text-[2rem] sm:text-[4.75rem] max-w-[59.625rem]  sm:leading-24 mb-[1.125rem] sm:mb-10">
					Your Partner in Innovation and Learning
					</h1>
					<div className="sm:flex justify-end w-full max-w-[62rem] gap-14">
					<LongArrowIcon className="mt-6 hidden sm:flex"/>
					<p className="text-[1rem] sm:text-2xl font-medium w-full max-w-[38.875rem]">We empower businesses and individuals through cutting-edge technology solutions and comprehensive learning programs. </p>
					</div>
				</div>

				<div className="hero-img absolute h-[23.375rem] w-[23.375rem] top-0 -right-20 ">
				<img src={VideoPlayerBg} alt="" className="w-full hidden sm:block" />
				</div>
			</div>
			<div className="relative sm:flex items-center mt-[1.625rem] sm:mt-[5.8125rem] justify-between">
				<div className="w-full h-[9.25rem] sm:w-[48.5625rem] sm:h-[20.4375rem] z-5 relative">
					<img src={heroImage} alt="" className="w-full h-full object-cover" />
					<button className="hidden sm:flex button w-[13.4375rem] absolute bottom-0 -right-0">
						<p>Know More</p>
						<RiArrowRightUpLine />
					</button>
				</div>
				<div className="-top-[2rem] relative w-full h-[16.136875rem] sm:w-[27.6875rem] sm:h-[21.8125rem]">
					<img src={heroVector} alt="" className="w-full h-full" />
					<div className="absolute top-[4.5625rem] left-[2.5rem]">
						<p className="font-semibold text-[1rem] sm:text-[1.25rem] w-80 text-[#1E254C]">We are shaping the future by harnessing the power of technology.</p>
						<div className="flex items-center mt-[2.625rem] gap-[2.2rem]">
							<div className="leading-10">
								<p className="text-5xl font-extrabold text-[#101010]">20+</p>
								<p className="">Projects Done</p>
							</div>
							<div className="h-12 w-1 bg-[#D6D6D6]"></div>
							<div className="leading-10">
								<p className="text-5xl font-extrabold text-[#101010]">1000+</p>
								<p>Students Trained</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button className="flex sm:hidden button mt-[1.0875rem] mb-[1.3125rem] sm:w-[13.4375rem] w-[8.375rem]  h-10">
					<p>Know More</p>
					<RiArrowRightUpLine />
			</button>
			</div>
		</div>

	  {/* Second Section */}

		<div className="container pt-[3.625rem]">
			<div className="flex justify-between items-center sm:items-start">
				<p className="sm:text-5xl text-[1.75rem] sm:w-56 w-[13.375rem] font-bold ">See What Drives Us</p>
				<button className="button w-[14.25rem]">
					<p>Learn more</p>
					<FaArrowRight />
				</button>
			</div>
			<div className="flex flex-col sm:flex-row justify-between mt-[1.125rem]">
				<div className="sm:w-[40.1875rem] flex flex-col gap-[0rem] sm:gap-[12.5625rem] mb-5">
					<div className="text-[1.25rem] flex justify-end">
						<p className="sm:w-[23.9375rem] w-full">As a leading software and training company in Africa, we are dedicated to fostering a culture of innovation, collaboration, and continuous learning</p>
					</div>
					<img src={secondSectionleftImage} alt="" className="h-[44.125rem] max-w-[40.1875rem] w-full object-contain"/>
				</div>
				<div className="flex sm:flex-col flex-col-reverse gap-[4.3125rem] sm:w-[34.8125rem]">
					<div className="relative sm:w-full w-full h-[27.625rem] sm:h-[44.0625rem]">
						<img src={secondSectionRightImage} alt="" className="w-full h-full smobject-contain object-cover" />
					</div>
					<div className="">
						<p className="text-[#3E4C57] text-[1.25rem] font-bold sm:text-[2.5rem] w-[9.5rem] sm:w-full">The Mission we are on</p>
						<p className="mt-8 text-[1.25rem] font-medium w-full"> Our commitment is to simplify technology, making it accessible and impactful for everyone, while nurturing a community of skilled professionals who drive change and inspire innovation.  </p>
					</div>
				</div>
			</div>
		</div>

		{/* Third Section */}


		<div className="sm:h-[62.625rem] h-[83.375rem] bg-[#00011B] mt-[10.0625rem] sm:pt-[10.625rem] pt-[2.4375rem]">
			<div className="container flex flex-col sm:flex-row   gap-[1.375rem] sm:justify-between">
				<div className="w-[24.1875rem] leading-[1.75rem]">
					<p className="sm:text-5xl text-[1.75rem] font-bold text-white">What We Do</p>
					<p className="mt-8 sm:text-[1.75rem] text-[0.875rem] font-light text-white">As a leading sottware and training company in Africa, we offer a range of services designed to meet the diverse needs of our clients.</p>
					<button className="button bg-[#CCCDE7] mt-16 w-[12.875rem] sm:flex hidden text-[#00036A]">
						<p className="font-bold">View our Services</p>
						<FaArrowRight />
					</button>
				</div>
				<div className="flex flex-col gap-[1.25rem] sm:gap-0">
					<div className="flex flex-col sm:flex-row gap-[1.25rem] sm:gap-0">
						<div className="sm:w-[23.8125rem] flex flex-col gap-[1.25rem] sm:gap-[5.375rem] sm:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem] bg-[#2F2F2F66]">
							<div className="w-20 h-20   rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={recruitmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="sm:text-2xl text-white sm:w-[10.125rem] text-[1.125rem]">Technical Recruitment</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Our recruitment services ensure you find the right candidates who fit your company culture and technical requirements.</p>
							</div>
						</div>
						<div className="sm:w-[23.8125rem] flex flex-col gap-[1.25rem] sm:gap-[5.375rem] sm:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem] ">
							<div className="w-20 h-20    rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={softwareDevelopmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="sm:text-2xl text-white sm:w-[10.125rem] text-[1.125rem]">Software Development</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Custom software solutions tailored to your business needs. </p>
							</div>
						</div>
					</div>
					<div className="flex flex-col-reverse gap-[1.25rem] sm:gap-0 sm:flex-row">
						<div className="sm:w-[23.8125rem] flex flex-col gap-[1.25rem] sm:gap-[5.375rem] sm:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem]">
							<div className="w-20 h-20   rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={cloudSolutionIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="sm:text-2xl text-white sm:w-[10.125rem] text-[1.125rem]">Cloud Solutions</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">We help you leverage cloud technology for improved scalability, flexibility, and cost-effectiveness</p>
							</div>
						</div> 
						<div className="sm:w-[23.8125rem] flex flex-col gap-[1.25rem] sm:gap-[5.375rem] sm:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem] bg-[#2F2F2F66]">
							<div className="w-20 h-20   rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={trainingDevelopmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="sm:text-2xl text-white sm:w-[10.125rem] text-[1.125rem]">Training and Development</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Comprehensive training programs in various fields, including web development, cloud computing, product and design, data analysis etc </p>
							</div>
						</div>
					</div>
					<button className="button bg-[#CCCDE7] mt-0 sm:mt-16 w-[12.875rem] sm:hidden flex text-[#00036A]">
						<p className="font-bold">View our Services</p>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</div>

		{/* Fourth Section */}

		<div className="relative">
			<img src={circuitLinesBackground} alt="" className="w-full h-full hidden sm:block absolute top-0 left-0"  />
			<div className="container pt-[3.875rem] ">
				<div className="flex flex-col-reverse sm:flex-row gap-[1rem] sm: text-[1.125rem] justify-between">
					<div>
						<p className="sm:text-[2.5rem] w-full text-2xl font-bold sm:font-extrabold">Things we are currently building</p>
						<p className="sm:w-[48.0625rem] w-full text-[1rem] sm:text-[1.75rem]">Explore our expanding portfolio of products we are building and start-ups we are growing.</p>
					</div>
					<a href="" className="w-[13.9375rem] h-14 border-[1px] border-[#3E4C57] flex justify-center items-center text-2xl cursor-pointer">See more</a>
				</div>
				<div className="flex flex-col h-full w-full sm:flex-row item-center justify-between mt-[5.6875rem] gap-[2rem] sm:border-b-[#C9C5C5CC] sm:border-b-8 pb-5">
					<div className="sm:w-[40.1875rem] w-full">
						<div className="w-full sm:h-[32.6875rem]  h-[28.125rem]  flex justify-center items-center sm:bg-[#CCCDE74D] rounded-[4px] sm:shadow-md">
							{/* Mobile image */}
							<img src={mobileAgapeSpringSiteImg} alt="" className="sm:hidden w-full sm:w-[37.25rem] sm:h-[28.75rem] object-contain"/>

							{/* Desktop image */}
							<img src={desktopAgapeSpringSiteImg} alt="" className="hidden sm:block sm:w-[37.25rem] sm:h-[28.75rem] object-contain"/>
						</div>

						<div className="mt-[1.375rem] sm:w-[35rem] w-full ">
							<p className="sm:text-[1.75rem] text-[1.125rem] text-[#323D46] font-bold">Agapesprings</p>
							<p className="sm:text-[1.125rem] text-[0.875rem] font-medium w-full">Informational website for Agapesprings ministries international</p>
						</div>
					</div>
					<div className="sm:w-[40.1875rem] w-full">
						<div className="w-full sm:h-[32.6875rem] flex justify-center items-center bg-white rounded-[4px] shadow-md">
							<img src={edulyncxaSiteImg} alt="" className="sm:w-[37.25rem] sm:h-[28.75rem] w-full object-contain"/>
						</div>
						<div className="mt-[1.375rem] sm:w-[35rem] w-full">
							<p className="sm:text-[1.75rem] text-[1.125rem] text-[#323D46] font-bold">Edulyncx: software management tool</p>
							<p className="sm:text-[1.125rem] text-[0.875rem] font-medium w-full">EdulyncX is a comprehensive school management application designed to enhance efficiency, transparency, and collaboration within the educational ecosystem</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Fifth Section */}

		<div className="sm:h-[28.0625rem] h-[10.625rem] mt-16 bg-[#000000]">
			<div className="container text-center flex flex-col justify-center sm:gap-[2.21875rem]  h-full sm:pt-[3.875rem]">
				<p className="sm:text-[2.5rem] text-[1rem] text-[#F2F2F2CC] w-[20rem] sm:w-full mx-auto font-bold">Our services are trusted by  companies around the world</p>
				<div className="sm:flex hidden flex-col  justify-center items-center gap-[2.34375rem]">
					<img src={companiesLogo1} alt="" className="w-[45.496875rem] h-[6.25rem]"/>
					<img src={companiesLogo2} alt="" className="w-[45.496875rem] h-[6.25rem]"/>
				</div>
				<Marquee className="sm:hidden flex flex-row  justify-center items-center gap-[2.34375rem]" speed={50} >
					<img src={companiesLogo1} alt="" className="w-[25.068125rem] h-[3.5rem] sm:w-0 sm:h-0"/>
					<img src={companiesLogo2} alt="" className="w-[25.068125rem] h-[3.5rem] sm:w-0 sm:h-0"/>
				</Marquee>
			</div>
		</div>

		{/* Sixth Section */}

		<div className="bg-[#F7F7F8]">
			<div className="container py-[5.8125rem]">
				<div className="sm:w-[44.3125rem] w-full text-center mx-auto">
					<p className="text-[#FE006F] sm:text-2xl text-[0.875rem]">WHAT PEOPLE ARE SAYING</p>
					<p className="mt-10 sm:text-[2.5rem] text-2xl text-[#323D46] font-bold">Don’t Just Take Our Words For It, Hear Our Client’s Review</p>
				</div>
				<div className="mt-16 flex gap-[1.5625rem]">
					<div className="sm:grid hidden sm:grid-cols-2 grid-cols-4 overflow-hidden gap-[1.5625rem]">
						<div className="flex gap-2 items-center w-[40rem] h-[9.625rem] bg-white">
							<img src={clientImage} alt="" className="w-[9.5625rem] h-full"/>
							<div className="">
								<p className="text-[#3E4C57] text-[1rem] mb-2 font-bold">DR. Summy Smart Francis</p>
								<p className="text-[0.875rem] mb-4">SA to the Ondo State Governor on Entrepreneurship and youth Development</p>
								<p className="text-[#3E4C57] w-[26.75rem]">I commend Xapictech for their dedication to excellence and for partnering with us to create opp...</p>
							</div>
						</div>
						<div className="flex gap-2 items-center w-[40rem] h-[9.625rem] bg-white">
							<img src={clientImage} alt="" className="w-[9.5625rem] h-full"/>
							<div className="">
								<p className="text-[#3E4C57] text-[1rem] mb-2 font-bold">DR. Summy Smart Francis</p>
								<p className="text-[0.875rem] mb-4">SA to the Ondo State Governor on Entrepreneurship and youth Development</p>
								<p className="text-[#3E4C57] w-[26.75rem]">I commend Xapictech for their dedication to excellence and for partnering with us to create opp...</p>
							</div>
						</div>
						<div className="flex gap-2 items-center w-[40rem] h-[9.625rem] bg-white">
							<img src={clientImage} alt="" className="w-[9.5625rem] h-full"/>
							<div className="">
								<p className="text-[#3E4C57] text-[1rem] mb-2 font-bold">DR. Summy Smart Francis</p>
								<p className="text-[0.875rem] mb-4">SA to the Ondo State Governor on Entrepreneurship and youth Development</p>
								<p className="text-[#3E4C57] w-[26.75rem]">I commend Xapictech for their dedication to excellence and for partnering with us to create opp...</p>
							</div>
						</div>
						<div className="flex gap-2 items-center w-[40rem] h-[9.625rem] bg-white">
							<img src={clientImage} alt="" className="w-[9.5625rem] h-full"/>
							<div className="">
								<p className="text-[#3E4C57] text-[1rem] mb-2 font-bold">DR. Summy Smart Francis</p>
								<p className="text-[0.875rem] mb-4">SA to the Ondo State Governor on Entrepreneurship and youth Development</p>
								<p className="text-[#3E4C57] w-[26.75rem]">I commend Xapictech for their dedication to excellence and for partnering with us to create opp...</p>
							</div>
						</div>
					</div>
					<div className="flex sm:hidden gap-[1rem] overflow-x-auto ">
						{[...Array(4)].map((_, i) => (
							<div key={i} className="flex-shrink-0 h-[13.3125rem] w-[13.9375rem] bg-white p-[0.75rem]">
								<p className="text-[#3E4C57] text-[0.875rem]">I commend Xapictech for their dedication to excellence and for partnering with us to create opp...</p>
								<div className="flex mt-[1.25rem] gap-[0.625rem] items-center">
									<img src={clientImage} alt="" className="w-[2.75rem] h-[2.75rem] rounded-[12px]" />
									<div>
									<p className="text-[1rem] font-bold">Dr. Summy Smart</p>
									<p className="text-[0.875rem] font-medium">SA to the Ondo State Governor</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>

		{/* Seventh Section */}

		<div className="bg-[#00011B] mt-[6.9375rem] h-[18.375rem] flex justify-center items-center">
			<div className="container flex flex-col sm:flex-row  justify-between h-[9rem]">
				<p className="max-w-[36.0625rem] w-full sm:text-[2.5rem] text-[1.25rem] text-white">Interested in joining Xapic team or partnering with us for a project?</p>
				<div className="flex items-center text-[#F2F2F2CC] gap-[1.9375rem]">
					<p className="text-[1.25rem] border-b-[#F2F2F2CC] border-b-2"><a href="">Join our Team</a></p>
					<a href="" className="w-[15.9375rem] h-14 border-[1px] border-[#F2F2F2CC] font-medium justify-center items-center text-2xl cursor-pointer hidden sm:flex">Send a message</a>
				</div>
			</div>
		</div>

		{/* Footer Section */}

		<div className="bg-[#00011B] relative mt-[8.4375rem] w-full">
			<div className="flex justify-center w-full items-center">
				<div className="flex justify-center items-center gap-[3rem] bg-[#000250] sm:w-[90.8125rem] w-full h-[10.875rem] absolute -top-20">
					<p className="text-[1.75rem] text-white font-600">We are excited to be part of your educational journey!</p>
					<div className="flex gap-6">
						<button className="button bg-[#0096CC] w-[12.4375rem] text-[1.25rem]">
							<p>APPLY HERE</p>
							<FaArrowRight />
						</button>
						<button className="w-[15.5625rem] hidden sm:block text-[1.25rem] text-white cursor-pointer border-white border-[1px]">
							BOOK A CONSULTATION
						</button>
					</div>
				</div>
			</div>
			<div className="container pt-[12.3125rem]">
				<div className="flex sm:flex-col flex-row ">
					<div className="flex flex-col gap-[3.296875rem]">
						<div className="flex flex-col sm:flex-row justify-between ">
							<img src={footerXapicLogo} alt="" className="w-[19rem] h-[6.1875rem]" />
							<div className="flex flex-col sm:flex-row sm:gap-[1.25rem] justify-between text-white text-1rem font-500 sm:w-[57.53125rem]">
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
					<div className="flex justify-end items-center gap-[1rem] text-white">
						<a href=""><FaFacebook className="w-[1rem] h-[1rem]"/></a>
						<a href=""><FaXTwitter className="w-[1rem] h-[1rem]"/></a>
						<a href=""><FaInstagram className="w-[1rem] h-[1rem]"/></a>
						<a href=""><FaLinkedin className="w-[1rem] h-[1rem]"/></a>	
					</div>
				</div>
				


			</div>

		</div>

	</>
  );
};

export default LandingPage;
