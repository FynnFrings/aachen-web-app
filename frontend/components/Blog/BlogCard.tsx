import { IBlogCard } from "@/pages/blogs/database";
import Link from "next/link";

const BlogCard = ({ title, author, date, text, link }: IBlogCard) => {
  return (
    <>
      <div className="bg-[#22221f] flex flex-col w-[32%] p-5 gap-y-4 rounded-lg">
        <div className="w-full bg-[#fac520] h-44 rounded-lg"></div>
        <div>
          <h2 className="font-bold text-2xl text-white">{title}</h2>
        </div>
        <div>
          <p className="text-slate-300">
            {author} • {date}
          </p>
        </div>
        <div>
          <p className="text-slate-300">{text}</p>
        </div>
        <div>
          <Link href={link}>
            <button className="w-full bg-[#fac520] rounded-lg py-2">
              Weiterlesen
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
