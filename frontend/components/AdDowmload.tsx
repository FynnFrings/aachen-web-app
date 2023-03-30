import Image from "next/image";
import Link from "next/link";
import iphoneLarge from "../public/iphoneLarge.png";
const AdDownload = () => {
  return (
    <>
      {/* START UI for small devices (up to 1024px) */}
      <div className="py-20 lg:hidden">
        <div className="w-full flex flex-col items-center gap-y-16 text-white">
          <Image
            className="rounded-full"
            src={"/logo_yellow.jpg"}
            alt="logo"
            width={120}
            height={120}
          />
          <div className="text-center font-bold text-2xl">
            <h1>Alles was Aachen zu bieten hat in nur einer App!</h1>
            <h1> Die App für Aachen.</h1>
          </div>
          <div className="text-center font-light px-2">
            <p>
              Die Aachen App informiert über wichtige lokale Ereignisse, so dass
              du dir keine Sorgen mehr machen musst, etwas zu verpassen.
            </p>
          </div>
          <div>
            <Link href={"/"}>
              <button className=" text-black px-14 py-4 bg-[#FAC520] font-semibold text-xl rounded-lg">
                Download
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* END UI for small devices (up to 1024px) */}
      {/* START UI for large devices (from 1024px) */}
      <div className="hidden lg:block py-20">
        <div className="bg-[url('../public/gradient.png')] bg-cover bg-top w-screen -mx-[6%]">
          <div className="flex justify-between items-center px-[5%]">
            <div className="text-white w-[60%] flex flex-col gap-y-8">
              <h1 className="font-bold text-5xl">
                Discover Everything Aachen Has to Offer with Our Comprehensive
                City App!
              </h1>
              <p className="font-light text-2xl">
                Our city app is the ultimate guide to Aachen, providing you with
                all the information you need to make the most of your visit.
              </p>
              <div>
                <Link href={"/"}>
                  <button className=" text-black px-14 py-4 bg-[#FAC520] font-semibold text-xl rounded-lg hover:scale-95 transition duration-200">
                    Download
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={iphoneLarge}
                alt="big_iphone"
                width={338}
                height={840}
              />
            </div>
          </div>
        </div>
      </div>
      {/* END UI for large devices (from 1024px) */}
    </>
  );
};

export default AdDownload;
