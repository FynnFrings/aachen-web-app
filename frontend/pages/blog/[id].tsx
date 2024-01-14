import { dateFormat } from "@/helpers/dateFormat";
import { useRouter } from "next/router";
import { IBlogCard } from "@/types/types";
import DOMPurify from "isomorphic-dompurify";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({ article }: { article: IBlogCard }) => {
	// Sanitize the article content and short description to prevent malicious attacks
	const sanitizedData: string = DOMPurify.sanitize(article.htmlContent);
	const sanitizedShortDescription: string = DOMPurify.sanitize(article.shortDescription);

	// Get an id of the page
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Head>
				<title>{`${article.title} | Aachen App`}</title>
				<meta name="description" content={sanitizedShortDescription} />
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={`${article.title} | Aachen App`} key="title" />
				<meta property="og:site_name" content="Aachen App" />
				<meta property="og:description" content={sanitizedShortDescription} />
				<meta property="og:url" content={`https://www.aachen-app.de/blog/blog/${id}`} />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content={article.imageUrl} />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content={article.title} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</Head>
			<div className="flex flex-col gap-5 items-start my-16">
				<div className="relative w-full flex justify-center">
					<Image src={article.imageUrl!} alt="background" width={300} height={300} className="object-cover w-full h-64 bg-cover opacity-20 rounded-lg" />
					<div className="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] text-center">
						<h1 className="text-3xl lg:text-5xl font-bold text-white">{article.title}</h1>
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
					<div className="text-slate-300 text-xl" dangerouslySetInnerHTML={{ __html: sanitizedData }} />
				</div>
				<Link href={"/blog"}>
					<button className="text-white text-xl font-light text-center border border-solid rounded-lg py-4 px-9 my-5 hover:scale-95 transition duration-200">Weitere Beiträge</button>
				</Link>
			</div>
		</>
	);
};

export async function getServerSideProps(context: { params: { id: string } }) {
	// Fetch data from  API
	const id = context.params.id;

	// Declared url of events id
	const blogUrlId: string = "https://us-central1-aachen-app.cloudfunctions.net/getBlogById"; //`http://localhost:5050/blog/${id}`;

	// Fetching data
	const res = await fetch(`${blogUrlId}`, {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ id: id }),
	});

	// Store in "data" as json file
	const data = await res.json();

	// Pass data to the page via props
	return { props: { article: data } };
}

export default BlogDetails;
