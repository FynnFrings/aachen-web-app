import Layout from "@/components/Layout/layout";
import Spinner from "@/components/Spinner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { wrapper } from "@/redux/store";
import { Provider } from "react-redux";
import getAllEvents from "@/helpers/getAllEvents";

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

	// useEffect(() => {
	// 	const fetchAllEvents = async () => {
	// 		const allEventsFromHelpers = await getAllEvents();
	// 		console.log(
	// 			"🚀 ~ file: _app.tsx:34 ~ useEffect ~ allEventsFromHelpers:",
	// 			allEventsFromHelpers
	// 		);
	// 	};
	// 	try {
	// 		fetchAllEvents();
	// 	} catch (error) {
	// 		console.log("🚀 ~ file: _app.tsx:40 ~ useEffect ~ error:", error);
	// 	}
	// }, []);
	return (
		<>
			<Provider store={store}>
				<Layout>{loading ? <Spinner /> : <Component {...pageProps} />}</Layout>
			</Provider>
		</>
	);
}
export default App;
