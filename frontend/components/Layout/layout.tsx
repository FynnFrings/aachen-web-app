import React from "react";
import Header from "./header";
import Footer from "./footer";

interface Props {
	children?: React.ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
	return (
		//Set for all pages height and width to full screen
		<div className="h-screen w-screen">
			<Header />
			<main className="px-20 lg:px-24 pt-[7rem] lg:pt-[8rem]" {...props}>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
