import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  photo: StaticImageData;
}

const BlogCard: FC<Props> = ({ photo }) => {
  return (
    <>
      <div className="bg-[#22221f] flex flex-col mx-4 px-4 py-4 gap-y-4 rounded-2xl lg:mx-0 lg:px-10 lg:py-10 lg:whitespace-normal">
        <div className="flex justify-center">
          <Image
            className="rounded-2xl text-center w-full"
            src={photo}
            alt="aachen"
            width={400}
            height={400}
          />
        </div>
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
    </>
  );
};

export default BlogCard;
