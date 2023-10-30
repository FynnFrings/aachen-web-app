import AdDownload from "@/components/AdDowmload";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Overview from "@/components/Overview/Overview";
import Reviews from "@/components/Reviews/Reviews";
import { IBlogCard } from "@/types/types";
import Head from "next/head";

export default function Home({ articles }: { articles: IBlogCard[] }) {
	return (
		<>
			<Head>
				<title>Aachen App</title>
				<meta name="robots" content="none" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Aachen App" />
				<meta
					property="og:description"
					content="Aachen App. Events. Angebote. Nachrichten. Dein Aachen"
				/>
				<meta property="og:url" content="https://aachen-web-app.vercel.app/" />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content="../public/logo_yellow.jpg" />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content="Aachen App" />
			</Head>
			<AdDownload />
			<Reviews />
			<Overview />
			<Blog articles={articles} />
			<Gallery />
			<Contact />
		</>
	);
}

//Using Server Side Rendering function
export async function getServerSideProps() {
	// Fetch data from  API
	const res = await fetch(`https://us-central1-aachen-app.cloudfunctions.net/getAllBlogs`); //http://localhost:5050/blog/
	const data = await res.json();
	// Pass data to the page via props
	return { props: { articles: data } };
}
