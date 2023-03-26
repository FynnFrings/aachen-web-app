import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full sticky top-[100vh] bg-transparent  text-white px-[4%] lg:px-[5%]">
        <div className="flex flex-col items-center border-y border-slate-600 py-8 gap-y-8">
          <div>
            <Image src={"/logo.svg"} alt="logo" width={120} height={120} />
          </div>
          <div className="w-full flex flex-col lg:flex-row text-center gap-y-8 lg:justify-center lg:gap-x-16">
            <div>
              <h2 className="font-bold text-md mb-4">Mehr von uns</h2>
              <Link className="font-light text-xs" href={"/"}>
                Aachen App API
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-md mb-4">Aachen App</h2>
              <Link className="font-light text-xs" href={"/"}>
                Download
              </Link>
              <Link className="font-light text-xs" href={"/"}>
                Allgemeinfeedback
              </Link>
              <Link className="font-light text-xs" href={"/"}>
                Feedback als Unternehmen
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-md mb-4">Rechtliches</h2>
              <Link className="font-light text-xs" href={"/"}>
                Impressum
              </Link>
              <Link className="font-light text-xs" href={"/datenschutz"}>
                Datenschutz
              </Link>
              <Link className="font-light text-xs" href={"/agb"}>
                AGB
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
