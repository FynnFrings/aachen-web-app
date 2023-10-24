import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/business_details.module.scss";
import { MouseEventHandler, useState } from "react";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import { IBusinessCard } from "@/types/types";
import InteractiveMap from "@/components/interactiveMap";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiBuilding4Fill } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
import Head from "next/head";
import PopUpOpener from "@/components/popUpContact";

const BusinessDetailsPage = ({ business }: { business: IBusinessCard }) => {
	const [alert, isAlert] = useState<boolean>(false);
	const [open, isOpen] = useState<boolean>(false);

	// onClick function with setTimeout fuction to manage "alert" state
	const handleSubmit: MouseEventHandler = () => {
		isAlert(true);
		setTimeout(() => {
			isAlert(false);
		}, 3000);
	};

	const popUpOpener = () => {
		isOpen(!open);
	};
	//getting the number of months from the date of creation
	const getMonthDifference = (startDate: any, endDate: any) => {
		const start = new Date(startDate);
		const end = new Date(endDate);

		const startYear = start.getFullYear();
		const endYear = end.getFullYear();
		const startMonth = start.getMonth();
		const endMonth = end.getMonth();

		const yearDiff = endYear - startYear;
		const monthDiff = endMonth - startMonth;

		const totalMonths = yearDiff * 12 + monthDiff;

		return totalMonths;
	};

	const currentDate = new Date();

	const creationData = new Date(
		business.createdAt._seconds * 1000 + business.createdAt._nanoseconds / 1000000
	);
	const monthsDifference = getMonthDifference(creationData, currentDate);

	const weekDay = currentDate.getDay();

	const businessOpeningHoursPeriods = () => {
		if (!business.openingHourPeriods) {
			return null;
		}
		const result = business.openingHourPeriods.find((day) => day.open.day == weekDay);
		if (result && result.open.time !== "Geschlossen") {
			const openTimeArray = result.open.time.split("");
			openTimeArray?.splice(2, 0, ":");
			const openTime = openTimeArray?.join("");
			return openTime;
		}
	};

	const weekSchedule = (scheduleData: any) => {
		const daysOfWeekGerman = [
			"Montag",
			"Dienstag",
			"Mittwoch",
			"Donnerstag",
			"Freitag",
			"Samstag",
			"Sonntag",
		];

		// A function that converts time to the "HH:MM" format
		const formatTime = (time: string) => {
			const hours = time.slice(0, 2);
			const minutes = time.slice(2);
			return `${hours}:${minutes}`;
		};

		// Render a list of days of the week and opening & closing times
		const scheduleItems = daysOfWeekGerman.map((dayOfWeek, index) => {
			const scheduleItem = scheduleData.find((item: any) => item.open.day === index);
			if (scheduleItem) {
				const openTime = formatTime(scheduleItem.open.time);
				const closeTime = formatTime(scheduleItem.close.time);
				return (
					<p key={index}>
						{dayOfWeek}:{" "}
						<span>
							{openTime.length && closeTime.length == 5
								? `${openTime} - ${closeTime} Uhr`
								: "Geschlossen"}
						</span>
					</p>
				);
			} else {
				return (
					<p key={index}>
						{dayOfWeek}: <span>Geschlossen</span>
					</p>
				);
			}
		});
		return scheduleItems;
	};

	const hrefValidator = (href: any) => {
		return href == "" || href == null
			? "/404"
			: href.slice(0, 3) == "www"
			? "http://" + `${href}`
			: `${href}`;
	};

	const businessContacts = {
		instagram: business.instagram ?? null,
		telegram: business.telegram ?? null,
		whatsapp: business.whatsapp ?? null,
		email: business.email ?? null,
		phoneNum: business.number ?? null,
	};
	return (
		<>
			<Head>
				<title>{business.name} | Aachen App</title>
			</Head>

			<div className={styles.business_header}>
				<div className={styles.image_container}>
					<Image
						className={styles._image}
						src={business.bannerImageUrl ?? business.bigPhotoURL}
						alt="business_image"
						width={976}
						height={350}
						loading="lazy"
					/>
					{/* Render a placeholder logo */}
					<Image
						className={styles._logo}
						src={business.logoImageUrl ?? business.photoURL}
						alt="business_logo"
						width={200}
						height={200}
						loading="lazy"
					/>
				</div>
				<div className={styles.title}>
					<h1>{business.name}</h1>
					<p>
						{business.category}{" "}
						<span className={styles.opening_time}>
							{businessOpeningHoursPeriods()
								? `Öffnet ${businessOpeningHoursPeriods()} Uhr`
								: ""}
						</span>
					</p>
					<p className={styles.description}>{`${business.description}`}</p>
				</div>
				<div className={styles.buttons}>
					<button onClick={handleSubmit} className={styles.notification}>
						<IoIosNotificationsOutline style={{ marginRight: "0.2rem" }} size={"24"} />
						Merken
					</button>
					{alert ? <BusinessMerkenResponseMessage /> : ""}
					<button onClick={popUpOpener} className={styles.contact}>
						Kontaktieren
					</button>
					{open ? (
						<PopUpOpener
							popUpOpener={popUpOpener}
							open={open}
							businessContacts={businessContacts}
						/>
					) : (
						""
					)}
				</div>
			</div>
			<div className={styles.business_details}>
				<div className={styles.information}>
					<h2>Information</h2>
					<p>
						<RiBuilding4Fill size={28} className={styles.react_icons} />
						{business.name}
					</p>
					<p>
						<AiFillPieChart size={28} className={styles.react_icons} />
						{business.category}
					</p>
					<p>
						<Image
							alt=""
							height={"28"}
							width={"28"}
							className={styles.react_icons}
							src={"/shop-remove.svg"}
						/>{" "}
						{monthsDifference > 1
							? `seit ${monthsDifference} Monaten Mitglied der Aachen App`
							: `seit ${monthsDifference} Monat Mitglied der Aachen App`}
					</p>
					<p>
						<BiSolidCoupon size={28} className={styles.react_icons} />
						{business.totalCouponCount <= 0
							? "Noch keine Coupons erstellt"
							: `${business.totalCouponCount} Coupons erstellt`}
					</p>
					<p>
						<FaCalendarDays size={28} className={styles.react_icons} />
						{business.totalEventCount <= 0
							? "Noch keine Events erstellt"
							: `${business.totalEventCount} Events erstellt`}
					</p>
				</div>
				<div className={styles.opening_time_table}>
					<h2>Öffnungszeiten</h2>
					{weekSchedule(
						business.openingHourPeriods != null
							? business.openingHourPeriods
							: business.dayList
					)}
				</div>
				<div className={styles.location}>
					<h2>Standort</h2>
					<InteractiveMap
						location={business.location}
						latitude={business.latitude}
						longitude={business.longitude}
					/>
					<div className={styles.route}>
						<Link
							target="_blank"
							rel="noreferrer"
							href={`https://maps.google.com/?q=${business.location}`}
						>
							Route planen
						</Link>
						<span>{business.formattedAddress ?? business.location}</span>
					</div>
				</div>
				<div className={styles.website_link}>
					<h2>Soziale Medien</h2>
					<div className={styles.item}>
						<Image
							src={business.logoImageUrl ?? business.photoURL}
							width="56"
							height="56"
							alt="Business logo"
							className={styles.logo}
						/>
						<div>
							<h2>Website</h2>
							<Link
								target="_blank"
								rel="noreferrer"
								href={hrefValidator(business.website) ?? `/*`}
							>
								{business.website == "" || business.website == null
									? "Unbekannt"
									: business.website}
							</Link>
						</div>
					</div>
					{business.instagram ? (
						<div className={styles.item}>
							<Image
								src={"/instagram_logo.svg"}
								width="56"
								height="56"
								alt="instagram logo"
								className={styles.logo}
							/>
							<div>
								<h2>Instagram</h2>
								<Link
									target="_blank"
									rel="noreferrer"
									href={`https://www.instagram.com/${business.instagram.replace(
										/\s/g,
										""
									)}/`}
									style={{ textDecoration: "none" }}
								>
									@{business.instagram}
								</Link>
							</div>
						</div>
					) : null}
					{business.whatsapp ? (
						<div className={styles.item}>
							<Image
								src={"/whatsApp_logo.svg"}
								width="56"
								height="56"
								alt="instagram logo"
								className={styles.logo}
								style={{ borderRadius: "10%" }}
							/>
							<div>
								<h2>WhatsApp</h2>
								<Link
									target="_blank"
									rel="noreferrer"
									href={`https://wa.me/${business.whatsapp}`}
									style={{ textDecoration: "none" }}
								>
									{business.whatsapp}
								</Link>
							</div>
						</div>
					) : null}
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
		"https://us-central1-aachen-app.cloudfunctions.net/getBusinessById"; //`http://localhost:5050/business/${id}`;

	// Fetching data
	const res = await fetch(`${businessUrlId}`, {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ id: id }),
	});

	// Store in "data" as json file
	const data = await res.json();

	// Pass data to the page via props
	return { props: { business: data } };
}

export default BusinessDetailsPage;
