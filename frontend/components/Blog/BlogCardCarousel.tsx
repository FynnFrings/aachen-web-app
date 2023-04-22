import { IBlogCard } from "@/types/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const BlogCardCarousel = ({ article }: { article: IBlogCard }) => {
  // Sanitize the article content to prevent malicious attacks
  const sanitizedData: string = DOMPurify.sanitize(article.shortDescription);
  return (
    <>
      <div className="w-full bg-[#22221f] flex flex-col mx-4 px-4 py-4 gap-y-4 rounded-2xl md:w-[45%] md:flex md:flex-col md:justify-between lg:w-full lg:mx-0 lg:px-10 lg:py-10 lg:whitespace-normal">
        <div className="flex justify-center w-full items-center">
          <Image
            className="block rounded-2xl w-full text-center lg:hidden"
            src={article.imageUrl!}
            alt="aachen"
            width={300}
            height={300}
          />
          <Image
            className="lg:block rounded-2xl text-center w-full hidden"
            src={article.imageUrl!}
            alt="aachen"
            width={300}
            height={0}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-white font-medium text-2xl">{article.title}</h2>
          <div
            className="text-white  font-light h-24 lg:h-12 !overflow-hidden text-ellipsis"
            dangerouslySetInnerHTML={{ __html: sanitizedData }}
          ></div>
          <Link className="w-fit" href={`/blog/${article.id}`}>
            <button className="text-[#FAC520] text-left">weiterlesen</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCardCarousel;
