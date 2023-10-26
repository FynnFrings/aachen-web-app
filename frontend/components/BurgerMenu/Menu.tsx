import Link from "next/link";

export default function Menu({ handleOnClick }: any) {
	return (
		<>
			<div className="flex flex-col items-start text-white text-xl gap-y-5 pt-10 pb-5">
				<Link
					onClick={handleOnClick}
					className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
					href={"/business"}
				>
					Business
				</Link>
				<Link
					onClick={handleOnClick}
					className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
					href={"/events"}
				>
					Events
				</Link>
				<Link
					onClick={handleOnClick}
					className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
					href={"/coupons"}
				>
					Coupons
				</Link>
				{/* <Link
					onClick={handleOnClick}
					className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
					href={"/"}
				>
					Nachrichtem
				</Link> */}
				<Link
					onClick={handleOnClick}
					className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
					href={"/blog"}
				>
					Blog
				</Link>
				<Link
					onClick={handleOnClick}
					className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300"
					href={"/download"}
				>
					Download
				</Link>
			</div>
		</>
	);
}
