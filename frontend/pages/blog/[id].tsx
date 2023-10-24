import { dateFormat } from "@/components/dateFormat";
import { IBlogCard } from "@/types/types";
import DOMPurify from "isomorphic-dompurify";
import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

const BlogDetails = ({ article }: { article: IBlogCard }) => {
	// Sanitize the article content to prevent malicious attacks
	const sanitizedData: string = DOMPurify.sanitize(article.htmlContent);
	return (
		<>
			<Head>
				<title>{article.title} | Aachen App</title>
			</Head>
			<div className="flex flex-col gap-5 items-start my-16">
				<div className="relative w-full flex justify-center">
					<Image
						src={article.imageUrl!}
						alt="background"
						width={300}
						height={300}
						className="object-cover w-full h-64 bg-cover opacity-20 rounded-lg"
					/>
					<div className="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] text-center">
						<h1 className="text-3xl lg:text-5xl font-bold text-white">
							{article.title}
						</h1>
						<p className="text-slate-300 text-lg lg:text-2xl font-light">
							{article.author} • {dateFormat(article.createdAt)}
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-white text-4xl font-bold mt-7">{article.title}</h2>
					<p className="text-slate-300 text-xl mb-7">
						{article.author} • {dateFormat(article.createdAt)}
					</p>
					<div
						className="text-slate-300 text-xl"
						dangerouslySetInnerHTML={{ __html: sanitizedData }}
					/>
				</div>
				<Link href={"/blog"}>
					<button className="text-white text-xl font-light text-center border border-solid rounded-lg py-4 px-9 my-5 hover:scale-95 transition duration-200">
						Weitere Beiträge
					</button>
				</Link>
			</div>
		</>
	);
};

// This function gets called at build time
export async function getStaticPaths() {
	const BlogUrl: string = "https://us-central1-aachen-app.cloudfunctions.net/getAllBlogs";
	// Call an external API endpoint to get posts
	const res = await fetch(BlogUrl);
	const data = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths: IBlogCard[] = data.map((blog: IBlogCard) => ({
		params: { id: blog.id },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
	// Fetch data from  API

	// Declared url of events id
	const blogUrlId: string = "https://us-central1-aachen-app.cloudfunctions.net/getBlogById"; //`http://localhost:5050/blog/${id}`;

	// Fetching data
	const res = await fetch(`${blogUrlId}`, {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ id: params.id }),
	});

	// Store in "data" as json file
	const data = await res.json();

	// Pass data to the page via props
	return { props: { article: data } };
}

export default BlogDetails;
