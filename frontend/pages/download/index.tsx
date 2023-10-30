import Head from "next/head";
import { BsApple, BsAndroid2 } from "react-icons/bs";

const Download = () => {
	return (
		<>
			<Head>
				<title>Download | Aachen App</title>
				<meta
					name="description"
					content="Download | Aachen App. Aachen App herunterladen."
				/>
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Aachen App" />
				<meta
					property="og:description"
					content="Download | Aachen App. Aachen App herunterladen."
				/>
				<meta property="og:url" content="https://www.aachen-app.de/download" />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content="/logo_yellow.jpg" />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content="Aachen App" />
				<meta property="og:image:width" content="700" />
				<meta property="og:image:height" content="700" />
			</Head>

			<div className="text-white w-screen flex justify-center  h-full bg-[url('../public/gradient.png')] bg-cover bg-top -mx-10 md:-mx-20 lg:-mx-24 py-48">
				<div className="px-[5%] flex flex-col items-center justify-center gap-y-6 ">
					<h1 className="font-bold text-5xl">Aachen App</h1>
					<p>Die App für Aachen</p>
					<a
						className="w-full"
						href={"https://apps.apple.com/de/app/aachen-app-deine-stadt/id1554053875"}
					>
						<button className="w-full flex items-center justify-center gap-x-3 rounded-lg bg-[#FAC520] px-4 py-4 text-black hover:scale-95 transition duration-200">
							<BsApple />
							Apple App Store
						</button>
					</a>
					<a
						className="w-full"
						href={
							"https://play.google.com/store/apps/details?id=com.swibble.aachen_app"
						}
					>
						<button className="w-full flex items-center justify-center gap-x-3 rounded-lg bg-[#FAC520] px-4 py-4 text-black hover:scale-95 transition duration-200">
							<BsAndroid2 />
							Google Play Store
						</button>
					</a>
				</div>
			</div>
		</>
	);
};

export default Download;
