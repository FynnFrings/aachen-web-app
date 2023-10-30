import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<meta name="robots" content="none" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
