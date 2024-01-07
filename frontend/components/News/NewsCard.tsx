import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/news_card.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";

const NewsCard = ({ newsItem }: any) => {
	const { item, feedItem } = newsItem;
	const logoSrc = feedItem.publisher.profilePictureUrl;

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
	return (
		<>
			<Link href={item.link} target="_blank" rel="noreferrer">
				<div className={`${styles.container}`}>
					<div className={styles.item_header}>
						<Image
							alt={feedItem.publisher.name}
							className={styles.logo}
							loader={() => logoSrc}
							src={logoSrc}
							width={65}
							height={65}
							loading="lazy"
							unoptimized
						/>
						<span>
							<h2>{feedItem.publisher.name}</h2>
							<p>{feedItem.publisher.subtitle}</p>
						</span>
					</div>
					<div className={styles.item_content}>
						<Image
							className={styles.content_image}
							alt={item.title}
							loader={() => item?.enclosure?.url || logoSrc}
							src={item?.enclosure?.url || logoSrc}
							width={240}
							height={240}
							key={Math.random()}
							loading="lazy"
							unoptimized
						/>
						<div className={styles.news_body}>
							<h2>{item.title}</h2>
							<p className={`${styles.description} ${styles.cutoff_text}`}>
								{item.contentSnippet}
							</p>
						</div>
					</div>
					<div className={styles.news_footer}>
						<button>Mehr lesen...</button>
						<div className={styles.publication_date}>
							<AiOutlineClockCircle size="19" />
							<span>{diffDateFunc(item.pubDate)}</span>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default NewsCard;
