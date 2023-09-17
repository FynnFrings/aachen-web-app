import { BsApple, BsAndroid2 } from "react-icons/bs";

const Download = () => {
	return (
		<div className="text-white w-screen flex justify-center  h-full bg-[url('../public/gradient.png')] bg-cover bg-top -mx-24 py-48">
			<div className="px-[5%] flex flex-col items-center justify-center gap-y-6 ">
				<h1 className="font-bold text-5xl">Aachen App</h1>
				<p>Die App für Aachen</p>
				<a
					className="w-full"
					href={
						"https://apps.apple.com/de/app/aachen-app-deine-stadt/id1554053875"
					}
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
	);
};

export default Download;
