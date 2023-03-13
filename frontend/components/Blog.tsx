import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div className="text-white py-20 flex flex-col items-center gap-y-14">
        <h1 className="font-bold text-5xl text-center">Unser Blog</h1>
        <BlogCard />
        <BlogCard />
        <button className="border-2 py-5 px-14 rounded-xl font-medium text-2xl">
          mehr anzeigen
        </button>
      </div>
    </>
  );
};

export default Blog;
