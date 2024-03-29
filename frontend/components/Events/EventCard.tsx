import styles from "@/styles/event_card.module.scss";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/AachenPics/aachen6.png";
import { FaBagShopping } from "react-icons/fa6";
import { MouseEventHandler } from "react";

// Define the EventCard component
const EventCard = ({ handleSubmit, event }: { handleSubmit: MouseEventHandler<HTMLButtonElement>; event: any }) => {
	// Function to format event date and time
	const eventData = () => {
		const fullStartDate = new Date(event.startDate._seconds * 1000 + event.startDate._nanoseconds / 1000000);
		const fullEndDate = new Date(event.endDate._seconds * 1000 + event.endDate._nanoseconds / 1000000);
		const dataOption: {} = {
			year: "numeric",
			month: "2-digit",
			day: "numeric",
		};
		const timeOption: {} = {
			hour: "numeric",
			minute: "numeric",
			hour12: false,
		};
		const validStartDate = fullStartDate.toLocaleDateString("de-DE", dataOption);
		const validStartTime = fullStartDate.toLocaleTimeString("de-DE", timeOption);
		const validEndDate = fullEndDate.toLocaleDateString("de-DE", dataOption);
		const validEndTime = fullEndDate.toLocaleTimeString("de-DE", timeOption);
		return {
			openTime: validStartTime,
			openDate: validStartDate,
			closeTime: validEndTime,
			closeDate: validEndDate,
		};
	};

	// Function to check if the event has a payment option
	const hasPayment = () => {
		if (event.hasPayment == null || event.hasPayment == false || event.hasPayment == undefined) {
			return false;
		} else {
			return true;
		}
	};

	return (
		// Wrap the entire card in a link, which will redirect to event details page
		<Link className="animate-fade" target="_blank" href={`/events/${event.itemId}`}>
			<div className={`${styles.container} ${styles.scale_in_center}`}>
				{/* Render the event image */}
				<div className={styles.event_image_container}>
					<Image className={styles.event_image} src={event.imageUrl ?? banner} alt="event_image" loading="lazy" width={379} height={176} />
				</div>
				{/* Render the event name, category, opening hours, and "Mehr anzeigen" button */}
				<div className={styles.info}>
					<div className={styles.event_name}>
						{event.title}
						<div className={styles.text}>{event.description}</div>
						<div className={styles.more}>Mehr anzeigen</div>
					</div>
					{event.startDate || event.endDate !== null ? (
						<div className={styles.event_time}>
							<div>
								<h2>Beginn</h2>
								<p>
									{eventData().openTime} Uhr, {eventData().openDate}
								</p>
							</div>
							<div>
								<h2>Ende</h2>
								<p>
									{eventData().closeTime} Uhr, {eventData().closeDate}
								</p>
							</div>
						</div>
					) : (
						<div className={styles.event_time_unknown}>Datum unbekannt</div>
					)}
				</div>
				{/* Render the "Bestellen" button if the event has a payment option */}
				<button className={styles.event_button} style={!hasPayment() ? { display: "none" } : { display: "flex" }} onClick={handleSubmit}>
					<FaBagShopping size={20} />
					Bestellen
				</button>
			</div>
		</Link>
	);
};

export default EventCard;
