import BlogCard from "./BlogCard";
import BlogDesktop from "./BlogDesktop";
import AachenPic2 from "../../public/AachenPics/aachen3.jpg";
import Aachen5 from "../../public/AachenPics/aachen5.jpg";
const Blog = () => {
  return (
    <>
      <div className="py-20 flex flex-col items-center gap-y-14">
        <h1 className="text-white font-bold text-5xl text-center">
          Unser Blog
        </h1>
        <div className="flex flex-col items-center gap-y-14 lg:hidden md:flex-row md:flex-wrap md:justify-center md:items-stretch">
          <BlogCard photo={Aachen5} />
          <BlogCard photo={AachenPic2} />
        </div>
        <div className="hidden lg:w-full lg:flex lg:justify-center">
          <BlogDesktop />
        </div>
        <button className="text-white border-2 py-5 px-14 rounded-xl font-medium text-2xl">
          mehr anzeigen
        </button>
      </div>
    </>
  );
};

export default Blog;
