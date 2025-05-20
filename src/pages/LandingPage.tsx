import { LongArrowIcon } from "../assets/icons";
import VideoPlayerBg from "../assets/images/videoplayer.png";
import heroImage from "../assets/images/Mask group (2).png";
import { RiArrowRightUpLine } from "react-icons/ri";
import heroVector from "../assets/images/Vector 165.png"
import secondSectionleftImage from "../assets/images/Group 17.png"
import { FaArrowRight } from "react-icons/fa6";
import imgGif1 from "../assets/gif/xap gif 1.gif"
import recruitmentIcon from "../assets/images/fluent-mdl2_recruitment-management.png"
import softwareDevelopmentIcon from "../assets/images/carbon_development.png"
import cloudSolutionIcon from "../assets/images/eos-icons_cloud-computing-outlined.png"
import trainingDevelopmentIcon from "../assets/images/oui_training.png" 
import agapeSpringSiteImg from "../assets/images/Group 45.png"
import edulyncxaSiteImg from "../assets/images/Group 44.png"
import circuitLinesBackground from "../assets/images/circuit-lines@2xl.ee1ad3dd.webp.png"
import companiesLogo1 from "../assets/Logos/Frame 313.png"
import companiesLogo2 from "../assets/Logos/Frame 314.png"
import clientImage from "../assets/images/Group 14 (2).png"

const LandingPage = () => {
  return (
	<>
	{/* Hero Section */}
		<div className="bg-gradient-to-br from-[#00BBFF1A] to-[#FE006F1A] sm:h-[66.625rem] h-[55rem] w-full overflow-hidden">
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
					<img src={heroImage} alt="" className="w-full h-full object-center" />
					<button className="hidden sm:flex button w-[13.4375rem] absolute bottom-0 -right-0">
						<p>Know More</p>
						<RiArrowRightUpLine />
					</button>
				</div>
				<div className="-top-[3rem] sm:top-0 relative w-full h-[16.136875rem] sm:w-[27.6875rem] sm:h-[21.8125rem]">
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
			<button className="flex sm:hidden button sm:w-[13.4375rem] w-[8.375rem] h-10">
					<p>Know More</p>
					<RiArrowRightUpLine />
			</button>
			</div>
		</div>

	  {/* Second Section */}

		<div className="container pt-[3.625rem]">
			<div className="flex justify-between">
				<p className="text-5xl w-56 ">See What Drives Us</p>
				<button className="button w-[14.25rem]">
					<p>Learn more</p>
					<FaArrowRight />
				</button>
			</div>
			<div className="flex justify-between ">
				<div className="w-[40.1875rem] mb-5">
					<div className="mb-[12.5625rem] text-[1.25rem] flex justify-end">
						<p className="w-[23.9375rem]">As a leading software and training company in Africa, we are dedicated to fostering a culture of innovation, collaboration, and continuous learning</p>
					</div>
					<img src={secondSectionleftImage} alt="" className="h-[44.125rem] max-w-[40.1875rem] w-full object-contain"/>
				</div>
				<div className="w-[34.8125rem]">
					<div className="relative w-[34.8125rem] h-[44.0625rem]">
						<img src={imgGif1} alt="" className="w-full h-full" />
						<div className="absolute left-10 bottom-10">
							<p className="text-[#F2F2F2CC] text-3xl">Our Vision</p>
							<p className="text-[1.25rem] font-light text-white max-w-[25rem] mt-1.5">Our vision is to be the leading catalyst for technological advancement and personal growth across Africa.</p>
						</div>
					</div>
					<div className="mt-[4.3125rem]">
						<p className="text-[#3E4C57] text-[2.5rem]">The Mission we are on</p>
						<p className="mt-8 text-[1.25rem] font-medium"> Our commitment is to simplify technology, making it accessible and impactful for everyone, while nurturing a community of skilled professionals who drive change and inspire innovation.  </p>
					</div>
				</div>
			</div>
		</div>

		{/* Third Section */}

		<div className="h-[62.625rem] bg-[#00011B] mt-[10.0625rem] pt-[10.625rem]">
			<div className="container flex justify-between">
				<div className="w-[24.1875rem] leading-[1.75rem]">
					<p className="text-5xl font-bold text-white">What We Do</p>
					<p className="mt-8 text-[1.75rem] font-light text-white">As a leading sottware and training company in Africa, we offer a range of services designed to meet the diverse needs of our clients.</p>
				<button className="button bg-[#CCCDE7] mt-16 w-[12.875rem] text-[#00036A]">
						<p className="font-bold">View our Services</p>
						<FaArrowRight />
					</button>
				</div>
				<div>
					<div className="flex">
						<div className="w-[23.8125rem] h-[23.8125rem] px-[1.25rem] py-[2.5rem] bg-[#2F2F2F66]">
							<div className="w-20 h-20 rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={recruitmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="mt-[5.375rem]">
								<p className="text-2xl text-white w-[10.125rem]">Technical Recruitment</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Our recruitment services ensure you find the right candidates who fit your company culture and technical requirements.</p>
							</div>
						</div>
						<div className="w-[23.8125rem] h-[23.8125rem] px-[1.25rem] py-[2.5rem] ">
							<div className="w-20 h-20 rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={softwareDevelopmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="mt-[5.375rem]">
								<p className="text-2xl text-white w-[10.125rem]">Software Development</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Custom software solutions tailored to your business needs. </p>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-[23.8125rem] h-[23.8125rem] px-[1.25rem] py-[2.5rem]">
							<div className="w-20 h-20 rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={cloudSolutionIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="mt-[5.375rem]">
								<p className="text-2xl text-white w-[10.125rem]">Cloud Solutions</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">We help you leverage cloud technology for improved scalability, flexibility, and cost-effectiveness</p>
							</div>
						</div>
						<div className="w-[23.8125rem] h-[23.8125rem] px-[1.25rem] py-[2.5rem] bg-[#2F2F2F66]">
							<div className="w-20 h-20 rounded-[62.5rem] flex justify-center items-center bg-[#2F2F2F99]">
								<img src={trainingDevelopmentIcon} alt="" className="w-12 h-12"/>
							</div>
							<div className="mt-[5.375rem]">
								<p className="text-2xl text-white w-[10.125rem]">Training and Development</p>
								<p className="text-[0.875rem] text-white font-extralight mt-2">Comprehensive training programs in various fields, including web development, cloud computing, product and design, data analysis etc </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Fourth Section */}

		<div className="h-[69.5rem] relative">
			<img src={circuitLinesBackground} alt="" className="w-full h-full absolute top-0 left-0"  />
			<div className="container pt-[3.875rem] ">
				<div className="flex justify-between">
					<div>
						<p className="text-[2.5rem] font-extrabold">Things we are currently building</p>
						<p className="w-[48.0625rem] text-[1.75rem]">Explore our expanding portfolio of products we are building and start-ups we are growing.</p>
					</div>
					<a href="" className="w-[13.9375rem] h-14 border-[1px] border-[#3E4C57] flex justify-center items-center text-2xl cursor-pointer">See more</a>
				</div>
				<div className="flex justify-between mt-[5.6875rem] border-b-[#C9C5C5CC] border-b-8 pb-5">
					<div className="w-[40.1875rem]">
						<div className="w-[40.1875rem] h-[32.6875rem] flex justify-center items-center bg-[#CCCDE74D] rounded-[4px] shadow-md">
							<img src={agapeSpringSiteImg} alt="" className="w-[37.25rem] h-[28.75rem]"/>
						</div>
						<div className="mt-[1.375rem] w-[35rem]">
							<p className="text-[1.75rem] text-[#323D46] font-bold">Agapesprings</p>
							<p className="text-[1.125rem]">Informational website for Agapesprings ministries international</p>
						</div>
					</div>
					<div className="w-[40.1875rem]">
						<div className="w-[40.1875rem] h-[32.6875rem] flex justify-center items-center bg-white rounded-[4px] shadow-md">
							<img src={edulyncxaSiteImg} alt="" className="w-[37.25rem] h-[28.75rem]"/>
						</div>
						<div className="mt-[1.375rem] w-[35rem]">
							<p className="text-[1.75rem] text-[#323D46] font-bold">Edulyncx: software management tool</p>
							<p className="text-[1.125rem]">EdulyncX is a comprehensive school management application designed to enhance efficiency, transparency, and collaboration within the educational ecosystem</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Fifth Section */}

		<div className="h-[28.0625rem] mt-16 bg-[#000000]">
			<div className="container text-center pt-[3.875rem]">
				<p className="text-[2.5rem] text-[#F2F2F2CC] ">Our services are trusted by  companies around the world</p>
				<div className="flex flex-col justify-center items-center gap-[2.34375rem] mt-[2.21875rem]">
					<img src={companiesLogo1} alt="" className="w-[45.496875rem] h-[6.25rem]"/>
					<img src={companiesLogo2} alt="" className="w-[45.496875rem] h-[6.25rem]"/>
				</div>
			</div>
		</div>

		{/* Sixth Section */}
		<div className="bg-[#F7F7F8] h-[68.3125rem]">
			<div className="container pt-[5.8125rem]">
				<div className="w-[44.3125rem] text-center mx-auto">
					<p className="text-[#FE006F] text-2xl">WHAT PEOPLE ARE SAYING</p>
					<p className="mt-10 text-[2.5rem] text-[#323D46] font-bold">Don’t Just Take Our Words For It, Hear Our Client’s Review</p>
				</div>
				<div className="mt-16 flex gap-[1.5625rem]">
					<div className="flex flex-col gap-[1.5625rem]">
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
					<div className="flex flex-col gap-[1.5625rem]">
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
				</div>
			</div>
		</div>

		{/* Seventh Section */}

		<div className="bg-[#00011B] mt-[6.9375rem] h-[18.375rem] flex justify-center items-center">
			<div className="container flex justify-between h-[9rem]">
				<p className="w-[36.0625rem] text-[2.5rem] text-white">Interested in joining Xapic team or partnering with us for a project?</p>
				<div className="flex items-center text-[#F2F2F2CC] gap-[1.9375rem]">
					<p className="text-[1.25rem] border-b-[#F2F2F2CC] border-b-2"><a href="">Join our Team</a></p>
					<a href="" className="w-[15.9375rem] h-14 border-[1px] border-[#F2F2F2CC] font-medium flex justify-center items-center text-2xl cursor-pointer  ">Send a message</a>
				</div>
			</div>
		</div>

		{/* Footer Section */}

	</>
  );
};

export default LandingPage;
