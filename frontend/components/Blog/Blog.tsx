import Link from "next/link";
import BlogCard from "./BlogCardCarousel";
import BlogDesktop from "./BlogDesktop";
import { IBlogCard } from "@/types/types";
const Blog = ({ articles }: { articles: IBlogCard[] }) => {
  return (
    <>
      <div className="py-20 flex flex-col items-center gap-y-14">
        <h1 className="text-white font-bold text-5xl text-center">
          Unser Blog
        </h1>
        <div className="flex flex-col items-center gap-y-14 lg:hidden md:flex-row md:flex-wrap md:justify-center md:items-stretch">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
        <div className="hidden lg:w-full lg:flex lg:justify-center">
          <BlogDesktop articles={articles} />
        </div>
        <Link href={"blog/"}>
          <button className="text-white border-2 py-5 px-14 rounded-xl font-medium text-2xl hover:scale-95 transition duration-200">
            mehr anzeigen
          </button>
        </Link>
      </div>
    </>
  );
};

export default Blog;
