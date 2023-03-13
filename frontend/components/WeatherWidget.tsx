import Image from "next/image";
import Rain from "../public/rain.svg";

const WeatherWidget = () => {
  return (
    <>
      <div className="py-20">
        <div className="bg-[#447894] flex flex-col items-center text-white rounded-2xl gap-y-8 py-8 px-4">
          <div>
            <Image
              className="text-center"
              src={Rain}
              alt="weather"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full flex flex-col items-start">
            <h2 className="font-bold text-6xl">Aachen</h2>
            <p className="font-light text-gray-200">
              Wetter 09.12.2022, Freitag 16:21 Uhr
            </p>
          </div>
          <div className="w-full flex flex-row justify-between gap-x-8">
            <div className="bg-[#50819c] py-4 px-4 rounded-lg">
              <h3 className="font-bold text-4xl">-1°C</h3>
            </div>
            <div className=" w-full bg-[#50819c] rounded-lg py-4 px-4 flex items-center justify-center">
              <h3 className="text-xl font-normal">Blitz mit Regen</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherWidget;
