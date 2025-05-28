import { LongArrowIcon } from "../assets/icons";
import VideoPlayerBg from "../assets/images/videoplayer.png";
import heroImage from "../assets/images/Mask group (2).png";
import { RiArrowRightUpLine } from "react-icons/ri";
import heroVector from "../assets/images/Vector 165.png"
import secondSectionleftImage from "../assets/images/Group 17 (1) (2).png"
import { FaArrowRight } from "react-icons/fa6";
import secondSectionRightImage from "../assets/gif/xap gif 1.gif"
import recruitmentIcon from "../assets/images/fluent-mdl2_recruitment-management.png"
import softwareDevelopmentIcon from "../assets/images/carbon_development.png"
import cloudSolutionIcon from "../assets/images/eos-icons_cloud-computing-outlined.png"
import trainingDevelopmentIcon from "../assets/images/oui_training.png" 
import desktopAgapeSpringSiteImg from "../assets/images/Group 45.png"
import mobileAgapeSpringSiteImg from "../assets/images/Frame 1618872418 (1).png"
import edulyncxaSiteImg from "../assets/images/Group 44.png"
import circuitLinesBackground from "../assets/images/circuit-lines@2xl.ee1ad3dd.webp.png"
import companiesLogo1 from "../assets/Logos/Frame 313.png"
import companiesLogo2 from "../assets/Logos/Frame 314.png"
import footerXapicLogo from "../assets/images/Xapic Logo - Full Colour with White  1.png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Testimonial } from "../components/Testimonial";
import { Link } from "react-router-dom";

const LandingPage = () => {

  return (
	<>
	{/* Hero Section */}

		<div className="bg-gradient-to-br from-[#00BBFF1A] to-[#FE006F1A] md:h-[66.625rem] w-full overflow-hidden">
			<div className="container pt-[10.375rem]">
				<div className="relative">
					<div className="relative z-1">
						<h1 className="font-extrabold text-[2rem] md:text-[4.75rem] max-w-[59.625rem]  md:leading-24 mb-[1.125rem] md:mb-10">
						Your Partner in Innovation and Learning
						</h1>
						<div className="md:flex justify-end w-full max-w-[62rem] gap-14">
						<LongArrowIcon className="mt-6 hidden md:flex"/>
						<p className="text-[1rem] md:text-2xl font-medium w-full max-w-[38.875rem]">We empower businesses and individuals through cutting-edge technology solutions and comprehensive learning programs. </p>
						</div>
					</div>

					<div className="hero-img absolute h-[23.375rem] w-[23.375rem] top-0 -right-20 ">
					<img src={VideoPlayerBg} alt="" className="animate-ping duration-[30s] w-full hidden md:block" />
					</div>
				</div>
				<div className="relative md:flex items-center mt-[1.625rem] md:mt-[5.8125rem] justify-between">
					<div className="w-full h-[9.25rem] md:w-[48.5625rem] md:h-[20.4375rem] z-5 relative">
						<img src={heroImage} alt="" className="w-full h-full object-cover" />
						<button className="hidden md:flex button w-[13.4375rem] absolute bottom-0 -right-0">
							<p>Know More</p>
							<RiArrowRightUpLine />
						</button>
					</div>
					<div className="-top-[2rem] sm:top-0 relative w-full h-[16.136875rem] md:w-[27.6875rem] md:h-[21.8125rem]">
						<img src={heroVector} alt="" className="w-full h-full" />
						<div className="absolute top-[4.5625rem] left-[2.5rem]">
							<p className="font-semibold text-[1rem] md:text-[1.25rem] w-80 text-[#1E254C]">We are shaping the future by harnessing the power of technology.</p>
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
				<button className="flex md:hidden items-center button mt-[1.0875rem] mb-[1.3125rem] w-[13.4375rem]">
						<p>Know More</p>
						<RiArrowRightUpLine />
				</button>
			</div>
		</div>

	  {/* Second Section */}

		<div className="container pt-[3.625rem]">
			<div className="flex justify-between items-center md:items-start">
				<p className="md:text-5xl text-[1.75rem] md:w-56 w-[13.375rem] font-bold ">See What Drives Us</p>
				<Link className="button w-[14.25rem]" to="/AboutUs">
					<p>Learn more</p>
					<FaArrowRight />
				</Link>
			</div>
			<div className="flex flex-col md:flex-row justify-between mt-[1.125rem]">
				<div className="md:w-[40.1875rem] flex flex-col gap-[0rem] md:gap-[12.5625rem] mb-5">
					<div className="text-[1.25rem] flex justify-end">
						<p className="md:w-[23.9375rem] w-full">As a leading software and training company in Africa, we are dedicated to fostering a culture of innovation, collaboration, and continuous learning</p>
					</div>
					<img src={secondSectionleftImage} alt="" className="h-[44.125rem] max-w-[40.1875rem] w-full object-contain"/>
				</div>
				<div className="flex md:flex-col flex-col-reverse gap-[4.3125rem] md:w-[34.8125rem]">
					<div className="relative md:w-full w-full bg-[#00011B] md:h-[44.0625rem] pt-24 ">
						<img src={secondSectionRightImage} alt="" className="h-96 w-96  mx-auto rounded-full"/>
						<div className="ms-6 my-10 md:mt-10  max-w-96">
							<p className="text-[#F2F2F2CC] text-[2rem]">Our Vision</p>
							<p className="text-white font-medium text-[1.25rem]">Our vision is to be the leading catalyst for technological advancement and personal growth across Africa.</p>
						</div>
					</div>
					<div className="">
						<p className="text-[#3E4C57] text-[1.25rem]! font-bold md:text-[2.5rem] w-[9.5rem] md:w-full">The Mission we are on</p>
						<p className="mt-8 text-[1.25rem] font-medium w-full"> Our commitment is to simplify technology, making it accessible and impactful for everyone, while nurturing a community of skilled professionals who drive change and inspire innovation.  </p>
					</div>
				</div>
			</div>
		</div>

		{/* Third Section */}

		<div className="md:h-[62.625rem] h-[83.375rem] bg-[#00011B] mt-[10.0625rem] md:pt-[10.625rem] pt-[2.4375rem]">
			<div className="container flex flex-col md:flex-row gap-[1.375rem] md:justify-between">
				<div className="max-w-[24.1875rem] w-full leading-[1.75rem]">
					<p className="md:text-5xl text-[1.75rem] font-bold text-white">What We Do</p>
					<p className="mt-8 md:text-[1.75rem] text-[0.875rem] font-light w-full text-white">As a leading sottware and training company in Africa, we offer a range of services designed to meet the diverse needs of our clients.</p>
					<Link to="/services" className="button bg-[#CCCDE7] mt-16 w-[12.875rem] md:flex hidden text-[#00036A]">
						<p className="font-bold">View our Services</p>
						<FaArrowRight />
					</Link>
				</div>
				<div className="flex flex-col gap-[1.25rem] md:gap-0">
					<div className="flex flex-col md:flex-row gap-[1.25rem] md:gap-0">
						<div className="md:w-[23.8125rem] flex flex-col gap-[1.25rem] md:gap-[5.375rem] md:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem] bg-[#2F2F2F66]">
							<div className="w-20 h-20   rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={recruitmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="md:text-2xl text-white md:w-[10.125rem] text-[1.125rem]">Technical Recruitment</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Our recruitment services ensure you find the right candidates who fit your company culture and technical requirements.</p>
							</div>
						</div>
						<div className="md:w-[23.8125rem] flex flex-col gap-[1.25rem] md:gap-[5.375rem] md:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem] ">
							<div className="w-20 h-20    rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={softwareDevelopmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="md:text-2xl text-white md:w-[10.125rem] text-[1.125rem]">Software Development</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Custom software solutions tailored to your business needs. </p>
							</div>
						</div>
					</div>
					<div className="flex flex-col-reverse gap-[1.25rem] md:gap-0 md:flex-row">
						<div className="md:w-[23.8125rem] flex flex-col gap-[1.25rem] md:justify-between md:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem]">
							<div className="w-20 h-20   rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={cloudSolutionIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="md:text-2xl text-white md:w-[10.125rem] text-[1.125rem]">Cloud Solutions</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">We help you leverage cloud technology for improved scalability, flexibility, and cost-effectiveness</p>
							</div>
						</div> 
						<div className="md:w-[23.8125rem] flex flex-col gap-[1.25rem] md:justify-between md:h-[23.8125rem] h-[14.25rem] px-[1.25rem] py-[2.5rem] bg-[#2F2F2F66]">
							<div className="w-20 h-20   rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={trainingDevelopmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="w-full">
								<p className="md:text-2xl text-white md:w-[10.125rem] text-[1.125rem]">Training and Development</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Comprehensive training programs in various fields, including web development, cloud computing, product and design, data analysis etc </p>
							</div>
						</div>
					</div>
					<Link to="/services" className="button bg-[#CCCDE7] mt-0 md:mt-16 w-[12.875rem] md:hidden flex text-[#00036A]">
						<p className="font-bold">View our Services</p>
						<FaArrowRight />
					</Link>
				</div>
			</div>
		</div>

		{/* Fourth Section */}

		<div className="relative">
			<img src={circuitLinesBackground} alt="" className="w-full h-full hidden md:block absolute top-0 left-0"  />
			<div className="container pt-[3.875rem] ">
				<div className="flex flex-col-reverse md:flex-row gap-[1rem] md: text-[1.125rem] justify-between">
					<div>
						<p className="md:text-[2.5rem] w-full text-2xl font-bold md:font-extrabold">Things we are currently building</p>
						<p className="md:w-[48.0625rem] w-full text-[1rem] md:text-[1.75rem]">Explore our expanding portfolio of products we are building and start-ups we are growing.</p>
					</div>
					<Link to="/portfolio" className="w-[13.9375rem] h-14 border-[1px] border-[#3E4C57] flex justify-center items-center text-2xl cursor-pointer">See more</Link>
				</div>
				<div className="flex flex-col h-full w-full md:flex-row item-center justify-between mt-[5.6875rem] gap-[2rem] md:border-b-[#C9C5C5CC] md:border-b-8 pb-5">
					<div className="md:w-[40.1875rem] w-full">
						<div className="w-full md:h-[32.6875rem] flex justify-center items-center bg-white md:bg-[#CCCDE74D] rounded-[4px] shadow-md">
							{/* Mobile image */}
							<img src={mobileAgapeSpringSiteImg} alt="" className="md:hidden md:w-[37.25rem] md:h-[28.75rem] h-full w-full object-contain"/>

							{/* Desktop image */}
							<img src={desktopAgapeSpringSiteImg} alt="" className="hidden md:block md:w-[37.25rem] md:h-[28.75rem] w-full object-contain"/>
						</div>

						<div className="my-[1.5rem] p-6 md:p-0 md:w-[35rem] w-full bg-[#CCCDE74D] md:bg-white ">
							<p className="md:text-[1.75rem] text-[1.125rem] text-[#323D46] font-bold">Agapesprings</p>
							<p className="md:text-[1.125rem] text-[0.875rem] font-medium w-full">Informational website for Agapesprings ministries international</p>
						</div>
					</div>
					<div className="md:w-[40.1875rem] w-full ">
						<div className="w-full md:h-[32.6875rem] flex justify-center items-center bg-white rounded-[4px] shadow-md">
							<img src={edulyncxaSiteImg} alt="" className="md:w-[37.25rem] md:h-[28.75rem] w-full object-contain"/>
						</div>
						<div className="mt-[1.5rem] p-6 md:p-0 md:w-[35rem] w-full bg-[#CCCDE74D] md:bg-white">
							<p className="md:text-[1.75rem] text-[1.125rem] text-[#323D46] font-bold">Edulyncx: software management tool</p>
							<p className="md:text-[1.125rem] text-[0.875rem] font-medium w-full">EdulyncX is a comprehensive school management application designed to enhance efficiency, transparency, and collaboration within the educational ecosystem</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Fifth Section */}

		<div className="md:h-[28.0625rem] h-[10.625rem] mt-16 bg-[#000000]">
			<div className="container text-center flex flex-col justify-center md:gap-[2.21875rem]  h-full md:pt-[3.875rem]">
				<p className="md:text-[2.5rem] text-[1rem] text-[#F2F2F2CC] w-[20rem] md:w-full mx-auto font-bold">Our services are trusted by  companies around the world</p>
				<div className="md:flex hidden flex-col  justify-center items-center gap-[2.34375rem]">
					<img src={companiesLogo1} alt="" className="w-[45.496875rem] h-[6.25rem]"/>
					<img src={companiesLogo2} alt="" className="w-[45.496875rem] h-[6.25rem]"/>
				</div>
				<Marquee className="md:hidden flex flex-row  justify-center items-center gap-[2.34375rem]" speed={50} >
					<img src={companiesLogo1} alt="" className="w-[25.068125rem] h-[3.5rem] md:w-0 md:h-0"/>
					<img src={companiesLogo2} alt="" className="w-[25.068125rem] h-[3.5rem] md:w-0 md:h-0"/>
				</Marquee>
			</div>
		</div>

		{/* Sixth Section */}

		<div className="bg-[#F7F7F8]">
			<div className="container py-[5.8125rem]">
				<div className="md:w-[44.3125rem] w-full text-center mx-auto">
					<p className="text-[#FE006F] md:text-2xl text-[0.875rem]">WHAT PEOPLE ARE SAYING</p>
					<p className="mt-10 md:text-[2.5rem] text-2xl text-[#323D46] font-bold">Don’t Just Take Our Words For It, Hear Our Client’s Review</p>
				</div>
				<div className="mt-16 flex gap-[1.5625rem]">
					<div className="md:grid hidden md:grid-cols-2 grid-cols-4 overflow-hidden gap-[1.5625rem]">
							{Testimonial.map((testimonial,index) => (
								<div key={index} className="flex gap-2 items-center w-[40rem] h-[9.625rem] bg-white">
									<img src={testimonial.imgSrc} alt="" className="w-[9.5625rem] h-full"/>
									<div className="">
										<p className="text-[#3E4C57] text-[1rem] mb-2 font-bold">{testimonial.name}</p>
										<p className="text-[0.875rem] mb-4">{testimonial.position}</p>
										<p className="text-[#3E4C57] w-[26.75rem]">{testimonial.message}</p>
									</div>
								</div>
							))}
						
					</div>
					<div className="flex md:hidden gap-[1rem] overflow-x-auto ">
						{Testimonial.map((testimonial,index) => (
							<div key={index} className="flex-shrink-0 my-5 w-[13.9375rem] bg-white p-[0.75rem]">
								<p className="text-[#3E4C57] text-[0.875rem] ">{testimonial.message}</p>
								<div className="flex mt-[1.25rem] gap-[0.625rem] items-center">
									<img src={testimonial.imgSrc} alt="" className="w-[2.75rem] h-[2.75rem] rounded-[12px]" />
									<div>
									<p className="text-[1rem] font-bold">{testimonial.name}</p>
									<p className="text-[0.875rem] font-medium">{testimonial.position}</p>
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
			<div className="container flex flex-col md:flex-row  justify-between h-[9rem]">
				<p className="max-w-[36.0625rem] w-full md:text-[2.5rem] text-[1.25rem] text-white">Interested in joining Xapic team or partnering with us for a project?</p>
				<div className="flex items-center text-[#F2F2F2CC] gap-[1.9375rem]">
					<p className="text-[1.25rem] border-b-[#F2F2F2CC] border-b-2"><a href="">Join our Team</a></p>
					<a href="" className="w-[15.9375rem] h-14 border-[1px] border-[#F2F2F2CC] font-medium justify-center items-center text-2xl cursor-pointer hidden md:flex">Send a message</a>
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
  );
};

export default LandingPage;
