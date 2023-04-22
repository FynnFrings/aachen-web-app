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
      <div className="flex flex-col bg-[#22221f] rounded-2xl py-7 px-9  gap-y-6 lg:basis-[43%] lg:px-6 lg:py-6">
        <div className="flex flex-row items-center gap-x-4 lg:flex-col lg:items-start lg:gap-y-4">
          <div className="py-3 px-3 bg-[#fac32029] rounded-lg lg:py-6 lg:px-6">
            <Image src={logo} alt="calendar" width={40} height={40} />
          </div>
          <h2 className="font-bold text-3xl lg:text-2xl">{name}</h2>
        </div>
        <div>
          <p className="font-light text-lg lg:text-base">{description}</p>
        </div>
      </div>
    </>
  );
};

export default OverviewCArd;
