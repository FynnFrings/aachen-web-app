import Image from "next/image";
import { FC } from "react";

interface Props {
  logo: string;
  description: string;
  name: string;
}

const OverviewCArd: FC<Props> = ({ logo, description, name }) => {
  return (
    <>
      <div className="flex flex-col bg-[#22221f] rounded-2xl py-7 px-9  gap-y-6">
        <div className="flex items-center gap-x-5">
          <div className="py-4 px-4 bg-[#fac32029] rounded-xl">
            <Image src={logo} alt="calendar" width={40} height={40} />
          </div>
          <h2 className="font-bold text-3xl">{name}</h2>
        </div>
        <div>
          <p className="font-light text-lg">{description}</p>
        </div>
      </div>
    </>
  );
};

export default OverviewCArd;
