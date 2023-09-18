import styles from "@/styles/event_card.module.scss";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/AachenPics/aachen6.png";
import { FaBagShopping } from "react-icons/fa6";

const EventCard = ({ event }: any) => {
	const todaysDate = new Date();

	const eventData = () => {
		const fullStartDate = new Date(
			event.startDate._seconds * 1000 +
				event.startDate._nanoseconds / 1000000
		);
		const fullEndDate = new Date(
			event.endDate._seconds * 1000 + event.endDate._nanoseconds / 1000000
		);
		const dataOption: {} = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const timeOption: {} = {
			hour: "numeric",
			minute: "numeric",
			hour12: false,
		};
		const validStartDate = fullStartDate.toLocaleDateString(
			"de-DE",
			dataOption
		);
		const validStartTime = fullStartDate.toLocaleTimeString(
			"de-DE",
			timeOption
		);
		const validEndDate = fullEndDate.toLocaleDateString(
			"de-DE",
			dataOption
		);
		const validEndTime = fullEndDate.toLocaleTimeString(
			"de-DE",
			timeOption
		);
		return {
			openTime: validStartTime,
			openDate: validStartDate,
			closeTime: validEndTime,
			closeDate: validEndDate,
		};
	};
	const truncateText = (text: string, maxWords: number) => {
		const words = text.split(" "); // Розділити рядок на слова
		if (words.length <= maxWords) {
			return text; // Повернути весь текст, якщо він менше або дорівнює maxWords
		}
		const truncatedText = words.slice(0, maxWords).join(" "); // Вибрати перші maxWords слова і з'єднати їх назад у рядок
		return `${truncatedText}...`; // Додати маркер "..." для позначення обрізаного тексту
	};

	return (
		//Wrap an entire card in a link, which will redirect to event details page
		<Link href={`/events/${event.itemId}`}>
			<div className={styles.container}>
				{/* Render a placeholder image */}
				<div className={styles.event_image_container}>
					<Image
						className={styles.event_image}
						src={event.imageUrl ?? banner}
						alt="event_image"
						loading="lazy"
						width={379}
						height={176}
					/>
				</div>
				{/* Render the name, category, opening hours, button */}
				<div className={styles.info}>
					<div className={styles.event_name}>
						&quot;{event.title}&quot;
						<div className={styles.posts}>
							<p className={styles.text}>
								{truncateText(event.description, 11)}
							</p>
						</div>
					</div>
					{event.startDate || event.endDate !== null ? (
						<div className={styles.event_time}>
							<div>
								<h2>Beginn</h2>
								<p>{eventData().openTime} Uhr</p>
								<p>{eventData().openDate}</p>
							</div>
							<div>
								<h2>Ende</h2>
								<p>{eventData().closeTime} Uhr</p>
								<p>{eventData().closeDate}</p>
							</div>
						</div>
					) : (
						<div className={styles.event_time_unknown}>
							Datum unbekannt
						</div>
					)}
				</div>
				{/* Render the additional information about distance and number of posts */}
				<div className={styles.add_info}>
					<button className={styles.event_button}>
						<FaBagShopping size={20} />
						Bestellen
					</button>
				</div>
			</div>
		</Link>
	);
};

export default EventCard;
