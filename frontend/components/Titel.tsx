import { ITitel } from "@/types/types";
import { FC } from "react";

const Titel: FC<ITitel> = ({ titel, addInfo, background }) => {
  return (
    <>
      <div
        className={`${background} bg-cover bg-opacity-75 w-full flex flex-col justify-center items-center gap-y-5 py-28 rounded-lg`}
      >
        <h1 className="text-5xl font-bold text-white opa ">{titel}</h1>
        <p className="text-slate-300 text-2xl font-light">{addInfo}</p>
      </div>
    </>
  );
};

export default Titel;
