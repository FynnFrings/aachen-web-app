import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/event_details.module.scss";
import { MouseEventHandler, useEffect, useState } from "react";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import InteractiveMap from "@/components/interactiveMap";
import { AiFillClockCircle } from "react-icons/ai";
import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import banner from "@/public/aachen_pic_2.png";
import Head from "next/head";

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
			event.startDate._seconds * 1000 + event.startDate._nanoseconds / 1000000
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
		const validStartDate = fullStartDate.toLocaleDateString("de-DE", dataOption);
		const validStartTime = fullStartDate.toLocaleTimeString("de-DE", timeOption);
		const validEndDate = fullEndDate.toLocaleDateString("de-DE", dataOption);
		const validEndTime = fullEndDate.toLocaleTimeString("de-DE", timeOption);
		return (
			<span>
				{validStartDate}, {validStartTime}uhr - {validEndDate}, {validEndTime}uhr
			</span>
		);
	};
	const validLocation = () => {
		const obj = {
			location: "Aachen, Deutschland",
			latitude: 50.775555,
			longitude: 6.083611,
		};
		if (event.location == "" || event.location == undefined || event.location == null) {
			obj.location = event.timeFrames[0].location;
		} else {
			obj.location = event.location;
		}

		if (event.latitude == "" || event.latitude == undefined || event.latitude == null) {
			obj.latitude = event.timeFrames[0].latitude;
		} else {
			obj.latitude = event.latitude;
		}
		if (event.longitude == "" || event.longitude == undefined || event.longitude == null) {
			obj.longitude = event.timeFrames[0].longitude;
		} else {
			obj.longitude = event.longitude;
		}
		return obj;
	};

	// const hrefValidator = (href: any) => {
	// 	return href == "" || href == null
	// 		? "/404"
	// 		: href.slice(0, 3) == "www"
	// 		? "http://" + `${href}`
	// 		: `${href}`;
	// };

	const hasPayment = () => {
		if (
			event.hasPayment == null ||
			event.hasPayment == false ||
			event.hasPayment == undefined
		) {
			return false;
		} else {
			return true;
		}
	};

	return (
		<>
			<Head>
				<title>{event.title} | Aachen App</title>
			</Head>
			<div className={styles.event_header}>
				<div className={styles.image_container}>
					<Image
						className={styles._image}
						src={event.imageUrl ?? banner}
						alt="event_image"
						width={976}
						height={350}
						loading="lazy"
					/>
					{/* Render a placeholder logo */}
				</div>
				<div className={styles.title}>
					<h1>{event.title}</h1>
					<div className={styles.event_location}>
						<FaLocationDot size={20} className={styles.react_icons} />
						<span>{validLocation().location}</span>
					</div>
					<div className={styles.event_time}>
						<AiFillClockCircle size={20} className={styles.react_icons} />
						{eventDate()}
					</div>
				</div>
				<div className={styles.button}>
					<button
						onClick={handleSubmit}
						className={styles.order}
						style={!hasPayment() ? { display: "none" } : { display: "flex" }}
					>
						<FaBagShopping style={{ marginRight: "0.2rem" }} size={"24"} />
						Bestellen
					</button>
					{alert ? <BusinessMerkenResponseMessage /> : ""}
				</div>
			</div>
			<div className={styles.event_details}>
				<div className={styles.information}>
					<h2>Information</h2>
					<p>{event.description}</p>
				</div>
				<div className={styles.location}>
					<h2>Standort</h2>
					<InteractiveMap
						location={validLocation().location}
						latitude={validLocation().latitude}
						longitude={validLocation().longitude}
					/>{" "}
					<div className={styles.route}>
						<Link
							target="_blank"
							rel="noreferrer"
							href={`https://maps.google.com/?q=${validLocation().location}`}
						>
							Route planen
						</Link>
						<span>{validLocation().location}</span>
					</div>
				</div>
				<div className={styles.business_link}>
					<div className={styles.item}>
						<Image
							src={event.imageUrl ?? banner}
							width="56"
							height="56"
							alt="event logo"
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

// This function gets called at build time
export async function getStaticPaths() {
	const EventUrl: string = "https://us-central1-aachen-app.cloudfunctions.net/getAllEvents";
	// Call an external API endpoint to get posts
	const res = await fetch(EventUrl);
	const data = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = data.map((event: any) => ({
		params: { id: event.id },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
	// Fetch data from  API

	// Declared url of events id
	const EventUrlId: string = "https://us-central1-aachen-app.cloudfunctions.net/getEventById";

	// Fetching data
	const res = await fetch(`${EventUrlId}`, {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ id: params.id }),
	});

	// Store in "data" as json file
	const data = await res.json();

	// Pass data to the page via props
	return { props: { event: data } };
}

export default EventDetailsPage;
