import Layout from "@/components/Layout/layout";
import Spinner from "@/components/Spinner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const handleRouteChange = (url: any) => {
			setLoading(true);
		};

		const handleRouteChangeComplete = () => {
			setLoading(false);
		};

		router.events.on("routeChangeStart", handleRouteChange);
		router.events.on("routeChangeComplete", handleRouteChangeComplete);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
			router.events.off("routeChangeComplete", handleRouteChangeComplete);
		};
	}, [router.events]);
	return (
		<>
			<Layout>{loading ? <Spinner /> : <Component {...pageProps} />}</Layout>
		</>
	);
}
