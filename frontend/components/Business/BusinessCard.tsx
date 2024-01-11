import styles from "@/styles/business_card.module.scss"; // Import the SCSS styles
import Image from "next/image"; // Import the Next.js Image component
import Notification from "@/public/business/notification.svg"; // Import the notification icon
import Link from "next/link"; // Import the Next.js Link component
import { MouseEventHandler } from "react"; // Import MouseEventHandler from React
import { IBusinessCard } from "@/types/types"; // Import the IBusinessCard type from the specified module

// Define the BusinessCard component
const BusinessCard = ({ handleSubmit, business }: { handleSubmit: MouseEventHandler<HTMLButtonElement>; business: IBusinessCard }) => {
	// Get the current date and time
	const todaysDate = new Date();
	const time = Date.now();
	const weekDay = todaysDate.getDay();

	// Function to determine business opening hours based on day of the week
	const businessOpeningHoursPeriods = () => {
		if (!business.openingHourPeriods) {
			return null;
		}
		const result = business.openingHourPeriods.find((day) => day.close.day == weekDay);
		if (result && result.close.time !== "Geschlossen") {
			const closeTimeArray = result.close.time.split("");
			closeTimeArray?.splice(2, 0, ":");
			const closeTime = closeTimeArray?.join("");
			return closeTime;
		} else {
			return "Geschlossen";
		}
	};

	// Function to determine business opening hours based on day of the week (alternative)
	const businessDayList = () => {
		if (!business.dayList) {
			return null;
		}
		const result = business.dayList.find((day) => day.close.day === weekDay);
		if (result && result.close.time !== "Geschlossen") {
			const closeTimeArray = result?.close.time.split("");
			closeTimeArray?.splice(2, 0, ":");
			const closeTime = closeTimeArray?.join("");
			return closeTime;
		} else {
			return "Geschlossen";
		}
	};

	// Determine the closing time of the business for the current day
	const closeTime = businessOpeningHoursPeriods() ?? businessDayList();

	// Check if the business is open and determine the closing time
	const checkTime = () => {
		if (closeTime !== null && closeTime !== undefined) {
			// Split the time string into hours and minutes
			const [hours, minutes] = closeTime.split(":");

			// Create a new Date object with the current date and the specified time
			const currentDate = new Date();
			currentDate.setHours(Number(hours), Number(minutes), 0, 0);

			// Get the timestamp
			const timestamp = currentDate.getTime();

			if (timestamp < time) {
				return "Geschlossen";
			} else {
				return closeTime;
			}
		}
	};

	return (
		// Wrap the entire card in a link, which redirects to the business details page
		<Link className="animate-fade" target="_blank" href="/business/[id]" as={`/business/${business.itemId}`}>
			<div className={styles.container}>
				{/* Render a placeholder image */}
				<div className={styles.business_image_container}>
					<Image className={styles.business_image} src={business.bannerImageUrl ?? business.bigPhotoURL} alt="business_image" loading="lazy" width={379} height={176} />
					{/* Render a placeholder logo */}
					<div className={styles.business_logo_container}>
						<Image className={styles.business_logo} src={business.logoImageUrl ?? business.photoURL} alt="business_image" loading="lazy" width={80} height={80} />
					</div>
				</div>
				{/* Render the name, category, opening hours, and a button */}
				<div className={styles.info}>
					<div className={styles.business_name}>{business.name}</div>
					<div className={styles.business_category}>{business.category}</div>
					<p className={styles.dot}>•</p>
					{closeTime !== null ? (
						<div className={checkTime() !== "Geschlossen" ? styles.business_time_open : styles.business_time_close}>
							{checkTime() !== "Geschlossen" ? `Geöffnet bis ${checkTime()}` : checkTime()}
						</div>
					) : (
						<div className={styles.business_time_unknown}>Öffnungszeiten unbekannt</div>
					)}
				</div>
				{/* Render additional information about distance and the number of posts */}
				<div className={styles.add_info}>
					<div className={styles.posts}>
						<p className={styles.number}>{(business.eventList.length ?? 0) + (business.couponList.length ?? 0)}</p>
						<p className={styles.text}>Beiträge</p>
					</div>
					<button className={styles.business_button} onClick={handleSubmit}>
						Merken
						<Image src={Notification} alt={"notification"} width={20} height={20} />
					</button>
				</div>
			</div>
		</Link>
	);
};

export default BusinessCard;
