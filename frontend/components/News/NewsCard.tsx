import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/news_card.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";

const NewsCard = ({ newsItem }: any) => {
	const { item, feedItem } = newsItem;
	const logoSrc = feedItem.publisher.profilePictureUrl;
	console.log("🚀 ~ file: NewsCard.tsx:9 ~ NewsCard ~ logoSrc:", logoSrc);

	const diffDateFunc = (pubDate: any) => {
		const publicationDate: any = new Date(pubDate);
		const currentDate: any = new Date();
		const differenceInDays = Math.floor(
			(currentDate - publicationDate) / (1000 * 60 * 60 * 24)
		);
		if (differenceInDays === 0) {
			return `Heute`;
		}
		if (differenceInDays === 1) {
			return `Vor 1 Tag`;
		} else {
			return `Vor ${differenceInDays} Tagen`;
		}
	};

	const truncateText = (text: string, limit: number) => {
		const words = text.split(" ");
		if (words.length > limit) {
			return words.slice(0, limit).join(" ") + "...";
		}
		return text;
	};
	return (
		<>
			<Link href={item.link} target="_blank" rel="noreferrer">
				<div
					className={`${styles.container} ${
						item.enclosure == undefined
							? styles.short_container
							: ""
					}`}
				>
					<div className={styles.item_header}>
						<Image
							alt={feedItem.publisher.name}
							className={styles.logo}
							loader={() => logoSrc}
							src={logoSrc}
							width={65}
							height={65}
						/>
						<span>
							<h2>{feedItem.publisher.name}</h2>
							<p>{feedItem.publisher.subtitle}</p>
						</span>
					</div>
					<div className={styles.item_content}>
						{item.enclosure != undefined ? (
							<Image
								alt={item.title}
								loader={() => item.enclosure.url}
								src={item.enclosure.url}
								width="424"
								height="295"
								key={Math.random()}
							/>
						) : (
							""
							// <Image
							// 	src="/aachen_pic_2.png"
							// 	alt={`${Math.random()}`}
							// 	width="424"
							// 	height="295"
							// />
						)}
						<div className={styles.news_body}>
							<h2>{item.title}</h2>
							<p className={styles.description}>
								{truncateText(item.contentSnippet, 15)}
							</p>
						</div>
						<div className={styles.news_footer}>
							<button>Mehr lesen...</button>
							<div className={styles.publication_date}>
								<AiOutlineClockCircle size="19" />
								<span>{diffDateFunc(item.pubDate)}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default NewsCard;
