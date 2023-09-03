import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/business_details.module.scss";
import EventMap from "../../components/map";
import MockupImage from "@/public/AachenPics/aachen6.png";
import MockupImage2 from "@/public/aachen_pic_2.png";
import { MouseEventHandler, useState } from "react";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";

const BusinessDetailsPage = ({ company }: any) => {
	const [alert, isAlert] = useState<boolean>(false);
	// onClick function with setTimeout fuction to manage "alert" state
	const handleSubmit: MouseEventHandler = () => {
		isAlert(true);
		setTimeout(() => {
			isAlert(false);
		}, 3000);
	};
	return (
		<>
			<div className={styles.business_header}>
				<div className={styles.image_container}>
					<Image
						className={styles._image}
						src={MockupImage}
						alt="business_image"
						width={0}
						height={0}
					/>
					{/* Render a placeholder logo */}
					<Image
						className={styles._logo}
						src={MockupImage2}
						alt="business_logo"
						width={0}
						height={0}
					/>
				</div>
				<div className={styles.title}>
					<h1>{company.name}</h1>
					<p>
						Einzelhandel{" "}
						<span className={styles.opening_time}>
							Öffnet 9 Uhr
						</span>
					</p>
					<p className={styles.description}>
						Fairtrade Artikel, Geschenkideen und Kindsthandwerk aus
						aller Welt. Ehrenamtlich geführt!
					</p>
				</div>
				<div className={styles.buttons}>
					<button
						onClick={handleSubmit}
						className={styles.notification}
					>
						<Image
							alt="notification icon"
							src={"/notification_icon.svg"}
							height={"24"}
							width={"24"}
						/>
						Merken
					</button>
					{alert ? <BusinessMerkenResponseMessage /> : ""}
					<Link href={"/kontaktiren"}>
						<button className={styles.contact}>Kontaktieren</button>
					</Link>
				</div>
			</div>
			<div className={styles.business_details}>
				<div className={styles.information}>
					<h2>Information</h2>
					<p>
						<Image
							alt=""
							height={"28"}
							width={"28"}
							src={"/building.svg"}
						/>{" "}
						{company.name}
					</p>
					<p>
						<Image
							alt=""
							height={"28"}
							width={"28"}
							src={"/graph.svg"}
						/>{" "}
						{company.category}
					</p>
					<p>
						<Image
							alt=""
							height={"28"}
							width={"28"}
							src={"/shop-remove.svg"}
						/>{" "}
						seit 24 Monaten Mitglied der Aachen App
					</p>
					<p>
						<Image
							alt=""
							height={"28"}
							width={"28"}
							src={"/ticket-star.svg"}
						/>{" "}
						Noch keine Coupons erstellt
					</p>
					<p>
						<Image
							alt=""
							height={"28"}
							width={"28"}
							src={"/calendar.svg"}
						/>{" "}
						Noch keine Events erstellt
					</p>
				</div>
				<div className={styles.opening_time_table}>
					<h2>Öffnungszeiten</h2>
					<p>
						Montag:<span>Unbekannt</span>
					</p>
					<p>
						Dienstag:<span>Unbekannt</span>
					</p>
					<p>
						Mittwoch:<span>Unbekannt</span>
					</p>
					<p>
						Donnerstag:<span>Unbekannt</span>
					</p>
					<p>
						Freitag:<span>Unbekannt</span>
					</p>
					<p>
						Samstag:<span>Unbekannt</span>
					</p>
					<p>
						Sonntag:<span>Unbekannt</span>
					</p>
				</div>
				<div className={styles.location}>
					<h2>Standort</h2>
					<EventMap latitude={1} longitude={1} />
					<div className={styles.route}>
						<Link
							target="_blank"
							rel="noreferrer"
							href={`https://maps.google.com/?q=${1},${1}`}
						>
							Route planen
						</Link>
						<span>
							&quot;{"company.name"}&quot;, {"address.street"},{" "}
							{"address.city"}
						</span>
					</div>
				</div>
				<div className={styles.website_link}>
					<Image
						src={"/business_logo.png"}
						width="56"
						height="56"
						alt="Business logo"
						className={styles.logo}
					/>
					<span>
						<h2>Website</h2>
						<a target="_blank" href={`http:/*`} rel="noreferrer">
							{/* {website} */}
						</a>
					</span>
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps(context: { params: { id: string } }) {
	// Fetch data from  API
	const id = context.params.id;

	// Declared url of events id
	const businessUrlId: string =
		"https://us-central1-aachen-app.cloudfunctions.net/getBusinessById"; //`http://localhost:5050/blog/${id}`;

	// Fetching data
	const res = await fetch(`${businessUrlId}`, {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ id: id }),
	});

	// Store in "data" as json file
	const data = await res.json();

	// Pass data to the page via props
	return { props: { company: data } };
}

export default BusinessDetailsPage;
