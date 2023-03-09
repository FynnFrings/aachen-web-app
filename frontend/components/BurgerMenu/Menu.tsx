import Link from "next/link";
import Image from "next/image";
import CloseButton from "../../public/close.png";

export default function Menu({ menu, setMenu }: any) {
  function handleOnClick() {
    setMenu(!menu);
  }

  return (
    <div>
      {!menu ? (
        ""
      ) : (
        <div className="bg-[#010012] absolute top-0 right-0 z-10 flex flex-col justify-start items-center w-[60%] h-full">
          <div className="w-full flex flex-col items-end">
            <button onClick={handleOnClick} className="mx-3 my-3">
              <Image src={CloseButton} alt="close" width={40} height={40} />
            </button>
          </div>
          <div className="flex flex-col items-start text-white text-xl  gap-5 mb-5">
            <Link
              onClick={handleOnClick}
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/"}
            >
              Unternehmen
            </Link>
            <a onClick={handleOnClick} className="" href={"/"}>
              Events
            </a>
            <a onClick={handleOnClick} className="" href="#projects">
              Coupons
            </a>
            <Link onClick={handleOnClick} className="" href={"/"}>
              Nachrichtem
            </Link>
            <Link onClick={handleOnClick} className="" href={"/"}>
              Download
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
