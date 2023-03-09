import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <>
      <header className="bg-black w-screen flex flex-nowrap justify-between items-center px-[4%] py-[4%]">
        <div>
          <Image src={"/logo.svg"} alt="logo" width={55} height={55} />
        </div>
        <div className="visible lg:invisible">
          <BurgerMenu />
        </div>
        {/* <div className="invisible lg:visible text-white font-sans font-normal text-md">
          <ul className="w-full flex flex-nowrap gap-x-12 items-center">
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
        </div> */}
      </header>
    </>
  );
};

export default Header;
