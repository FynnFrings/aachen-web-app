import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import CloseButton from "../../public/close.png";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import HamburgerMenu from "../../public/menu.svg";
import { useState } from "react";

const Header = () => {
	const [menu, setMenu] = useState<boolean>(false);

	const handleOnClick = (): void => {
		setMenu(!menu);
	};
	const scrollPosition = useScrollPosition();
	return (
		<>
			<header
				className={`w-full bg-[#131311] fixed top-0 z-50 flex justify-between items-center px-5 py-5 lg:px-10 lg:py-5 transition-all ease-in-out
                ${
					scrollPosition > 0 && menu === false
						? "shadow-lg"
						: "shadow-none"
				}`}
			>
				<div>
					<Link href={"/"}>
						<Image
							src={"/logo_hd.png"}
							alt="logo"
							width={80}
							height={80}
						/>
					</Link>
				</div>
				<div className="lg:hidden block">
					{/* <BurgerMenu menu={menu} handleOnClick={handleOnClick} /> */}
					{/* The hamburger button that toggles the menu */}
					<button type="button" onClick={(): void => handleOnClick()}>
						{menu ? (
							<Image
								src={CloseButton}
								alt="close"
								width={40}
								height={40}
							/>
						) : (
							<Image
								src={HamburgerMenu}
								alt="menu"
								width={40}
								height={40}
							/>
						)}
					</button>
				</div>
				<div className="hidden lg:block text-white font-sans font-normal text-md">
					<ul className="flex flex-nowrap items-center gap-x-8">
						<li className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
							<Link href={"/business"}>Business</Link>
						</li>
						<li className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
							<Link href={"/events"}>Events</Link>
						</li>
						<li className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
							<Link href={"/coupons"}>Coupons</Link>
						</li>
						<li className="relative hover:after:w-full hover:after:transition-[width] hover:after:duration-300 after:absolute after:w-[0%] after:bg-[#FAC520] after:left-0 after:bottom-0 after:h-[2px] after:transition-[width] after:duration-300">
							<Link href={"/blog"}>Blog</Link>
						</li>
						<li>
							<Link
								className="bg-[#FAC520] rounded-lg py-4 px-8 last:ml-10 text-black"
								href={"/download"}
							>
								Download
							</Link>
						</li>
					</ul>
				</div>
			</header>
			<BurgerMenu menu={menu} handleOnClick={handleOnClick} />
		</>
	);
};

export default Header;
