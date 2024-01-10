import Parser from "rss-parser";

export const FEEDS: any = [
	{
		link: "https://www.aachener-zeitung.de/lokales/aachen/feed.rss",
		publisher: {
			name: "Aachener Zeitung",
			subtitle: "Offizieller Account",
			description: "Die Aachener Zeitung",
			id: "aachener-zeitung",
			profilePictureUrl:
				"https://assets.aachen-app.de/app/logos/aachener-zeitung.jpg",
			redirect: true,
		},
	},
	{
		link: "https://www.aachen.de/RSS_Feeds/pressemitteilung.html",
		publisher: {
			name: "Presseportal Aachen",
			subtitle: "Offizieller Account",
			description: "Die Aachener Zeitung",
			id: "presseportal-aachen",
			profilePictureUrl:
				"https://assets.aachen-app.de/app/logos/stadt-aachen.jpg",
			redirect: false,
		},
	},
	{
		link: "https://www.presseportal.de/rss/dienststelle_11559.rss2",
		publisher: {
			name: "Polizei Aachen",
			subtitle: "Offizieller Account",
			description: "Presseberichte der Polizei Aachen",
			id: "polizei-aachen-presse",
			profilePictureUrl:
				"https://assets.aachen-app.de/app/logos/polizei-aachen.jpg",
			redirect: true,
		},
	},
	{
		link: "http://www1.wdr.de/kultur/uebersicht-kultur-100.feed",
		publisher: {
			name: "WDR Aachen",
			subtitle: "Offizieller Account",
			description: "WDR Aachen",
			id: "wdr-aachen",
			profilePictureUrl:
				"https://assets.aachen-app.de/app/logos/wdr-aachen.jpg",
			redirect: true,
		},
	},
	{
		link: "https://www.europedirect-aachen.de/aachen/news/?format=feed&type=rss",
		publisher: {
			name: "Europe Direct Aachen",
			subtitle: "Offizieller Account",
			description: "Europe Direct für Aachen",
			id: "europe-direct-aachen",
			profilePictureUrl:
				"https://assets.aachen-app.de/app/logos/europe-direct-aachen.jpg",
			redirect: false,
		},
	},
];
export async function getFeed(feedUrl: string) {
	debugger;
	let parser = new Parser();
	let feed = await parser.parseURL(feedUrl);

	return feed;
}
