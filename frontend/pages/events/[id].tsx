import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/event_details.module.scss";
import { MouseEventHandler, useState } from "react";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import InteractiveMap from "@/components/interactiveMap";
import { AiFillClockCircle } from "react-icons/ai";
import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import banner from "@/public/aachen_pic_2.png";

const EventDetailsPage = ({ event }: any) => {
	const [alert, isAlert] = useState<boolean>(false);

	// onClick function with setTimeout fuction to manage "alert" state
	const handleSubmit: MouseEventHandler = () => {
		isAlert(true);
		setTimeout(() => {
			isAlert(false);
		}, 3000);
	};

	const eventDate = () => {
		const fullStartDate = new Date(
			event.startDate._seconds * 1000 +
				event.startDate._nanoseconds / 1000000
		);
		const fullEndDate = new Date(
			event.endDate._seconds * 1000 + event.endDate._nanoseconds / 1000000
		);
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
		return (
			<span>
				{validStartDate}, {validStartTime}uhr - {validEndDate},{" "}
				{validEndTime}uhr
			</span>
		);
	};

	const hrefValidator = (href: any) => {
		return href == "" || href == null
			? "/404"
			: href.slice(0, 3) == "www"
			? "http://" + `${href}`
			: `${href}`;
	};

	return (
		<>
			<div className={styles.business_header}>
				<div className={styles.image_container}>
					<Image
						className={styles._image}
						src={event.imageUrl ?? banner}
						alt="business_image"
						width={976}
						height={350}
						loading="lazy"
					/>
					{/* Render a placeholder logo */}
				</div>
				<div className={styles.title}>
					<h1>{event.title}</h1>
					<div className={styles.event_location}>
						<FaLocationDot
							size={20}
							className={styles.react_icons}
						/>
						<span>{event.location}</span>
					</div>
					<div className={styles.event_time}>
						<AiFillClockCircle
							size={20}
							className={styles.react_icons}
						/>
						{eventDate()}
					</div>
				</div>
				<div className={styles.button}>
					<button onClick={handleSubmit} className={styles.order}>
						<FaBagShopping
							style={{ marginRight: "0.2rem" }}
							size={"24"}
						/>
						Bestellen
					</button>
					{alert ? <BusinessMerkenResponseMessage /> : ""}
				</div>
			</div>
			<div className={styles.business_details}>
				<div className={styles.information}>
					<h2>Information</h2>
					<p>{event.description}</p>
				</div>
				<div className={styles.location}>
					<h2>Standort</h2>
					<InteractiveMap
						location={event.location}
						latitude={event.latitude}
						longitude={event.longitude}
					/>{" "}
					<div className={styles.route}>
						<Link
							target="_blank"
							rel="noreferrer"
							href={`https://maps.google.com/?q=${event.latitude},${event.longitude}`}
						>
							Route planen
						</Link>
						<span></span>
					</div>
				</div>
				<div className={styles.website_link}>
					<div className={styles.item}>
						<Image
							src={event.imageUrl ?? banner}
							width="56"
							height="56"
							alt="Business logo"
							className={styles.logo}
						/>
						<span>
							<h2>Inhaber</h2>
							<Link
								target="_blank"
								rel="noreferrer"
								href={`/business/${event.businessId}`}
							>
								Link to business
							</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps(context: { params: { id: string } }) {
	// Fetch data from  API
	const id = context.params.id;

	// Declared url of events id
	const EventUrlId: string =
		"https://us-central1-aachen-app.cloudfunctions.net/getEventById"; //`http://localhost:5050/business/${id}`;

	// Fetching data
	const res = await fetch(`${EventUrlId}`, {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ id: id }),
	});

	// Store in "data" as json file
	const data = await res.json();

	// Pass data to the page via props
	return { props: { event: data } };
}

export default EventDetailsPage;
