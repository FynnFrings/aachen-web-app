import type { NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import NewsBanner from "@/public/news/news_banner.png";
import styles from "@/styles/news.module.scss";
import { FEEDS, getFeed } from "@/lib/rss";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import { useState } from "react";
import searchByDate from "@/helpers/filterByDate";
import Nothing from "@/components/Nothing";
import Pagination from "@/components/Pagination";
import { paginate } from "@/helpers/paginate";
import NewsCard from "@/components/News/NewsCard";
import NewsCarousel from "@/components/News/NewsCarousel";

const News: NextComponentType = ({ news }: any) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 8;

	const onPageChange = (page: any) => {
		setCurrentPage(page);
	};

	const [selectItem, setSelectItem] = useState<string>(
		"vom neusten zu ältesten"
	);
	//* functions to update selectItem state based on user selection
	const itemSelection = (item: string): void => {
		setSelectItem(item);
	};
	// declaring list of items, which will be displayed in DropdownList component (category filter)
	const listOfItems = ["vom neusten zu ältesten", "vom ältesten zu neusten"];

	const filteredNews = [...(news || [])].sort((a, b) =>
		searchByDate(selectItem, a, b)
	);
	const paginatedPosts = paginate(filteredNews, currentPage, pageSize);
	console.log("🚀 ~ file: index.tsx:38 ~ paginatedPosts:", paginatedPosts);

	return (
		<>
			<Head>
				<title>News | Aachen App</title>
				<meta
					name="description"
					content="News | Aachen App. Entdecken Sie mehr über News in Aachen."
				/>
				<meta
					property="og:title"
					content="News | Aachen App"
					key="title"
				/>
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="News" />
				<meta property="og:site_name" content="Aachen App" />
				<meta
					property="og:description"
					content="News | Aachen App. Entdecken Sie mehr über News in Aachen."
				/>
				<meta
					property="og:url"
					content="https://www.aachen-app.de/news"
				/>
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content="/logo_yellow.jpg" />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content="Aachen App" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</Head>
			<div className={styles.container}>
				<div className={styles.banner}>
					<Image
						className={styles.news_banner}
						src={NewsBanner}
						alt="business-banner"
						width={0}
						height={0}
					/>
					<h1 className={styles.banner_text}>News</h1>
				</div>
				<NewsCarousel news={paginatedPosts} />
				<div className={styles.select_filters}>
					<ListOfCategoryItems
						selectItem={selectItem}
						itemSelection={itemSelection}
						listOfItems={listOfItems}
					/>
				</div>

				<div
					className={
						paginatedPosts.length
							? styles.list_of_news
							: "w-full flex flex-row justify-center"
					}
				>
					{paginatedPosts.length ? (
						paginatedPosts.map((news: any, index: any) => (
							<NewsCard key={news.item.pubDay} newsItem={news} />
						))
					) : (
						<Nothing list_name="News" />
					)}
				</div>

				{paginatedPosts.length ? (
					<Pagination
						items={filteredNews.length}
						currentPage={currentPage}
						pageSize={pageSize}
						onPageChange={onPageChange}
					/>
				) : (
					""
				)}
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const news: any = [];
	await Promise.all(
		FEEDS.map(async (feedItem: any) => {
			const { items } = await getFeed(feedItem.link);
			items.forEach((item) => news.push({ item, feedItem }));
		})
	);

	return {
		props: {
			news,
		},
	};
};

export default News;
