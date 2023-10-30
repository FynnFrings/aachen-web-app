import Image from "next/image";
import Logo from "@/public/logo_hd.png";
import { useEffect } from "react";

const Spinner = () => {
	useEffect(() => {
		window.scrollTo({
			top: 20,
			behavior: "smooth",
		});
	});
	return (
		<>
			<div className="h-screen w-full">
				<div className="absolute w-2/5 lg:w-1/4 left-1/2 -translate-x-1/2 top-1/2 flex flex-col items-center">
					<Image src={Logo} alt="Aachen App" width={200} height={200} className="" />
					<div className="h-3 w-full bg-transparent rounded-lg overflow-hidden">
						<div className="h-full w-1/2 bg-[#FAC520] animate-loader rounded-lg"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Spinner;
