import Layout from "@/components/Layout/layout";
import Spinner from "@/components/Spinner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { wrapper } from "@/redux/store";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
	const { store } = wrapper.useWrappedStore(pageProps);
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const handleRouteChange = () => {
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
			<Provider store={store}>
				<Layout>{loading ? <Spinner /> : <Component {...pageProps} />}</Layout>
			</Provider>
		</>
	);
}
export default App;
