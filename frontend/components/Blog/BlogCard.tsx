import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  photo: StaticImageData;
}

const BlogCard: FC<Props> = ({ photo }) => {
  return (
    <>
      <div className="w-full bg-[#22221f] flex flex-col mx-4 px-4 py-4 gap-y-4 rounded-2xl md:w-[45%] md:flex md:flex-col md:justify-between lg:w-full lg:mx-0 lg:px-10 lg:py-10 lg:whitespace-normal">
        <div className="flex justify-center w-full h-full items-center">
          <Image
            className="rounded-2xl text-center lg:w-full"
            src={photo}
            alt="aachen"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-white font-medium text-2xl">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-white  font-light">
            In die Aachen App kannst di aktuelle und zukünftige Events in Aachen
            entdecken. Wir informieren dich ...
          </p>
          <Link className="w-fit" href={"/"}>
            <button className="text-[#FAC520] text-left">weiterlesen</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
