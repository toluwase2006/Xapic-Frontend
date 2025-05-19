import { LongArrowIcon } from "../assets/icons";
import VideoPlayerBg from "../assets/images/videoplayer.png";
import heroImage from "../assets/images/Mask group (2).png";
import { RiArrowRightUpLine } from "react-icons/ri";
import heroVector from "../assets/images/Vector 165.png"

const LandingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#00BBFF1A] to-[#FE006F1A] h-[66.625rem] w-full overflow-hidden">
        <div className="container pt-[10.375rem]">
          <div className="relative">
            <div className="relative z-1">
                <h1 className="font-extrabold text-[4.75rem] max-w-[59.625rem] leading-24 mb-10">
                Your Partner in Innovation and Learning
                </h1>
                <div className="flex justify-end w-full max-w-[62rem] gap-14">
                <LongArrowIcon className="mt-6"/>
                <p className="text-2xl w-full max-w-[38.875rem]">We empower businesses and individuals through cutting-edge technology solutions and comprehensive learning programs. </p>
                </div>
            </div>

            <div className="hero-img absolute h-[23.375rem] w-[23.375rem] top-0 -right-20 ">
              <img src={VideoPlayerBg} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex items-center mt-[5.8125rem] justify-between">
            <div className="w-[48.5625rem] h-[20.4375rem]  relative">
                <img src={heroImage} alt="" className="w-full h-full" />
                <button className="button w-[13.4375rem] absolute bottom-0 -right-0">
                    <p>Know More</p>
                    <RiArrowRightUpLine />
                </button>
            </div>
            <div className="relative w-[27.6875rem] h-[21.8125rem]">
                <img src={heroVector} alt="" className="w-full h-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <p className="font-semibold text-[1.25rem] w-80 text-[#1E254C]">We are shaping the future by harnessing the power of technology.</p>
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
        </div>
      </div>

      <div className="container">
        uuguivj
      </div>
    </>
  );
};

export default LandingPage;
