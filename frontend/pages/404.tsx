import Head from "next/head";
import Link from "next/link";

const ErrorPage = () => {
	return (
		<>
			<Head>
				<title>404 | Aachen App</title>
			</Head>
			<div className="text-white w-screen py-24 lg:py-32 flex flex-col items-center justify-center h-full gap-y-6 bg-[url('../public/gradient.png')] bg-cover bg-top -mx-10 md:-mx-20 lg:-mx-24">
				<h1 className="font-bold text-5xl">404</h1>
				<p>Kaiser Karl ist veschwunden</p>
				<Link href="/">
					<p className="rounded-lg bg-[#FAC520] px-4 py-4 text-black">
						Zurück zur Startseite
					</p>
				</Link>
			</div>
		</>
	);
};

export default ErrorPage;
