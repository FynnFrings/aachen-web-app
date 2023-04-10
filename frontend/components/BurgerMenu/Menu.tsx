import Link from "next/link";
import Image from "next/image";
import CloseButton from "../../public/close.png";
import { useEffect, useState } from "react";

export default function Menu({ setMenu }: any) {
  const [slide, setSlide] = useState<boolean>(true);
  function handleOnClick() {
    setSlide(false);
    setTimeout(() => {
      setMenu(false);
    }, 1000);
  }
  return (
    <>
      <div
        className={`bg-[#010012] fixed top-0 right-0 z-10 flex flex-col justify-start items-center w-[70%] md:w-[40%] h-fit ${
          slide ? "animate-slide" : "animate-slideBack"
        } rounded-bl-xl`}
      >
        <div className="w-full flex flex-col items-end">
          <button onClick={handleOnClick} className="mx-3 my-3">
            <Image src={CloseButton} alt="close" width={40} height={40} />
          </button>
        </div>
        <div className="flex flex-col items-start text-white text-xl  gap-5 mb-5">
          {/* <Link
            onClick={handleOnClick}
            className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
            href={"/"}
          >
            Unternehmen
          </Link>
          <a
            onClick={handleOnClick}
            className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
            href={"/"}
          >
            Events
          </a>
          <a
            onClick={handleOnClick}
            className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
            href="#projects"
          >
            Coupons
          </a>
          <Link
            onClick={handleOnClick}
            className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
            href={"/"}
          >
            Nachrichtem
          </Link> */}
          <Link
            onClick={handleOnClick}
            className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
            href={"/blog"}
          >
            Blog
          </Link>
          <Link
            onClick={handleOnClick}
            className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
            href={"/"}
          >
            Download
          </Link>
        </div>
      </div>
    </>
  );
}
