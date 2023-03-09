import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <>
      <header className="bg-black lg:bg-transparent w-full flex flex-nowrap justify-between items-center px-[4%] py-[4%] lg:px-[5%] lg:py-[2%]">
        <div>
          <Image src={"/logo.svg"} alt="logo" width={60} height={60} />
        </div>
        <div className="lg:hidden">
          <BurgerMenu />
        </div>
        <div className="hidden lg:block text-white font-sans font-normal text-md">
          <ul className="flex flex-nowrap items-center gap-x-8">
            <li>
              <Link href={"/unternehmens"}>Unternehmens</Link>
            </li>
            <li>
              <Link href={"/events"}>Events</Link>
            </li>
            <li>
              <Link href={"/coupons"}>Coupons</Link>
            </li>
            <li>
              <Link href={"/nachrichten"}>Nachrichten</Link>
            </li>
            <li>
              <Link
                className="bg-[#FAC520] rounded-lg py-4 px-8 last:ml-10 text-black"
                href={"/download"}
              >
                Download
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
