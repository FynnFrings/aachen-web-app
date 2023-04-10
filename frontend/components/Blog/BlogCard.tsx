// Import required modules
import { IBlogCard } from "../../types/types";
import Link from "next/link";
import Image from "next/image";
import { dateFormat } from "../dateFormat";
import DOMPurify from "isomorphic-dompurify";

// Define the BlogCard component which accepts an article object as a prop with type IBlogCard
const BlogCard = ({ article }: { article: IBlogCard }) => {
  // Sanitize the article content to prevent malicious attacks
  const sanitizedData: string = DOMPurify.sanitize(article.htmlContent);

  // Return JSX to render the blog card
  return (
    <div className="bg-[#22221f] flex flex-col w-full lg:w-[32%] p-5 gap-y-5 rounded-lg">
      {/* Render a placeholder image */}
      <div className="w-full">
        <Image
          className="w-full rounded-lg"
          src={article.imageUrl!}
          alt="photo"
          width={"300"}
          height={"0"}
        />
      </div>
      <div>
        {/* Render the article title */}
        <h2 className="font-bold text-2xl text-white">{article.title}</h2>
      </div>
      <div>
        {/* Render the author and creation date */}
        <p className="text-slate-300">
          {article.author} • {dateFormat(article.createdAt)}
        </p>
      </div>
      {/* Render the sanitized text */}
      <div
        className="text-slate-300 h-36 !overflow-hidden text-ellipsis"
        dangerouslySetInnerHTML={{ __html: sanitizedData }}
      ></div>
      <div>
        {/* Add a link to full blog post */}
        <Link href={`/blog/${article.id}`}>
          <button className="w-full bg-[#fac520] rounded-lg py-2">
            Weiterlesen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
