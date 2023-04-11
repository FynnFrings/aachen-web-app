import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full sticky top-[100vh] bg-transparent  text-white px-[4%] lg:px-[5%]">
        <div className="flex flex-col items-center border-y border-slate-600 py-8 gap-y-8">
          <div className="hover:scale-95 transition duration-200">
            <Link href={"/"}>
              <Image src={"/logo_hd.png"} alt="logo" width={120} height={120} />
            </Link>
          </div>
          <div className="w-full flex flex-col lg:flex-row text-center gap-y-8 lg:justify-center lg:gap-x-16">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-md mb-4">Mehr von uns</h2>
              <Link
                className="font-light text-xs"
                href={" https://api.aachen-app.de"}
              >
                <p className="hover:text-[#FAC520] relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
                  Aachen App API
                </p>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-md mb-4">Aachen App</h2>
              <Link className="font-light text-xs" href={"/download"}>
                <p className="hover:text-[#FAC520] relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
                  Download
                </p>
              </Link>
              <Link
                className="font-light text-xs"
                href={" https://www.aachen-app.de/feedback"}
              >
                <p className="hover:text-[#FAC520] relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
                  Feedback
                </p>
              </Link>
              <Link
                className="font-light text-xs"
                href={"https://www.aachen-app.de/feedback/unternehmen-ideen/"}
              >
                <p className="hover:text-[#FAC520] relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
                  Feedback als Unternehmen
                </p>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-md mb-4">Rechtliches</h2>
              <Link className="font-light text-xs" href={"/impressum"}>
                <p className="hover:text-[#FAC520] relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
                  Impressum
                </p>
              </Link>
              <Link className="font-light text-xs" href={"/datenschutz"}>
                <p className="hover:text-[#FAC520] relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
                  Datenschutz
                </p>
              </Link>
              <Link className="font-light text-xs" href={"/agb"}>
                <p className="hover:text-[#FAC520] relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
                  AGB
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left py-8 font-thin text-xs">
          <h3>©2023 copyright. Alle rechte vorbehalten.</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
