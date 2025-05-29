import { useContext } from "react";
import { ModalContext } from "../useContext/ModalContext";
import { FaTimes } from "react-icons/fa";

const VideoModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalContext is missing");

  const { isOpen, setIsOpen } = context;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed h-full w-full inset-0 bg-[#bfc1ff]" onClick={() => setIsOpen(false)}></div>
      <div className="bg-black relative rounded-xl container h-[40%] sm:h-[70%] z-10">
        <div className="w-full absolute top-0 left-0 flex justify-end p-4  cursor-pointer" onClick={() => setIsOpen(false)}>
          <FaTimes className="absolute right-8 w-8 h-8 text-white"/>
        </div>
        <iframe width="756" height="425" className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/TE023mMMMJM" title="Xapic Technologies Product Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};
export default VideoModal;
