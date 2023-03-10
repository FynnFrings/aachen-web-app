import Image from "next/image";
import Link from "next/link";

const AdDownload = () => {
  return (
    <div className="py-[15%]">
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
            <button className=" text-black px-14 py-4 bg-[#FAC520] font-semibold text-xl rounded-xl">
              Download
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdDownload;
