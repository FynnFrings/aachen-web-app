import Link from "next/link";

const ErrorPage = () => {
	return (
		<>
			<div className="text-white w-screen flex flex-col items-center justify-center h-full gap-y-6 bg-[url('../public/gradient.png')] bg-cover bg-top -mx-24">
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
