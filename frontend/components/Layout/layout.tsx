import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

interface Props {
	children?: React.ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
	return (
		//Set for all pages height and width to full screen
		<>
			<Head>
				<title>Aachen App</title>
				<meta charSet="UTF-8" />
				<meta name="robots" content="index, follow" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Aachen App" />
				<meta
					property="og:description"
					content="Aachen App. Events. Angebote. Nachrichten. Dein Aachen"
				/>
				<meta property="og:url" content="https://aachen-web-app.vercel.app/" />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content="/logo_yellow.jpg" />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content="Aachen App" />
			</Head>
			<div className="h-screen w-screen">
				<Header />
				<main className="px-10 md:px-20 lg:px-24 pt-[7rem] lg:pt-[8rem]" {...props}>
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
