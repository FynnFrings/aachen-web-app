import Image from "next/image";
import AachenPic from "../public/aachen_pic_2.png";
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
      <div className="bg-[#22221f] flex flex-col mx-4 px-4 py-4 gap-y-4 rounded-2xl">
        <div className="w-full flex justify-center">
          <Image
            className="rounded-2xl text-center"
            src={AachenPic}
            alt="aachen"
            width={500}
            height={500}
          />
        </div>
        <h2 className="font-medium text-2xl">Lorem ipsum dolor sit amet</h2>
        <p className="font-light">
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
