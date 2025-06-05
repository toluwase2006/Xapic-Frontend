import { useContext, useEffect } from "react";
import { ModalContext} from "../useContext/ModalContext";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoModal = () => {

  const { controlVideoModal, videoValues} = useContext(ModalContext)!


  if (videoValues.videoType === "close") return null
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" >
      <div className="fixed h-full w-full inset-0 bg-transparent" onClick={() => controlVideoModal({url: "", videoType: "close"})}></div>
      <div className="bg-black relative rounded-xl container h-[40%] sm:h-[70%] z-10" data-aos="fade-down" data-aos-delay="100" data-aos-duration="600">
        <div className="w-full absolute top-0 left-0 flex justify-end p-4  cursor-pointer" onClick={() => controlVideoModal({url: "", videoType: "close"})}>
          <FaTimes className="absolute right-8 w-8 h-8 text-white" />
        </div>
        <iframe width="756" height="425" className="w-full h-full rounded-xl" src={videoValues.url} title="Xapic Technologies Product Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};
export default VideoModal;
