import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/business_details.module.scss";
import { MouseEventHandler, useRef, useState } from "react";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import { IBusinessCard } from "@/types/types";
import InteractiveMap from "@/components/interactiveMap";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiBuilding4Fill } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import Head from "next/head";
import PopUpOpener from "@/components/popUpContact";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useRouter } from "next/router";
import getMonthDifference from "@/helpers/getMonthDifference";
import hrefValidator from "@/helpers/hrefValidator";
import weekSchedule from "@/helpers/weekSchedule";

const BusinessDetailsPage = ({ business }: { business: IBusinessCard }) => {
	// States to control visibility of components.
	const [alert, isAlert] = useState<boolean>(false);

	const [open, isOpen] = useState<boolean>(false);

	// onClick function with setTimeout fuction to manage "alert" state

	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		isAlert(true);

		// Clearing the previous timeout (if already set)
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Setting a new timeout
		timeoutRef.current = setTimeout(() => {
			isAlert(false);
		}, 3000);
	};

	// Function to open "Kontaktieren" notification
	const popUpOpener = () => {
		isOpen(!open);
	};

	const currentDate = new Date();

	const creationData = new Date(business.createdAt._seconds * 1000 + business.createdAt._nanoseconds / 1000000);

	//TODO: This function is imported from /helpers folder. Please check this and optimize if its needed;
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

	const businessContacts = {
		instagram: business.instagram ?? null,
		telegram: business.telegram ?? null,
		whatsapp: business.whatsapp ?? null,
		email: business.email ?? null,
		phoneNum: business.number ?? null,
	};

	const ref: any = useOutsideClick(handleClickOutside);

	function handleClickOutside() {
		isOpen(false);
	}

	// Get an id of the page
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			{/* Meta tags */}
			<Head>
				<title>{`${business.name} | Aachen App`}</title>
				<meta name="description" content={business.description} />
				<meta property="og:title" content={`${business.name} | Aachen App`} key="title" />
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="businesses" />
				<meta property="og:site_name" content="Aachen App" />
				<meta property="og:description" content={business.description} />
				<meta property="og:url" content={`https://www.aachen-app.de/business/${id}`} />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content={business.logoImageUrl ?? business.photoURL} />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content={business.name} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</Head>
			{/* Meta tags */}

			<div className={styles.business_header}>
				<div className={styles.image_container}>
					<Image className={styles._image} src={business.bannerImageUrl ?? business.bigPhotoURL} alt="business_image" width={976} height={350} loading="lazy" />
					{/* Render a placeholder logo */}
					<Image className={styles._logo} src={business.logoImageUrl ?? business.photoURL} alt="business_logo" width={200} height={200} loading="lazy" />
				</div>
				<div className={styles.title}>
					<h1>{business.name}</h1>
					<p>
						{business.category} <span className={styles.opening_time}>{businessOpeningHoursPeriods() ? `Öffnet ${businessOpeningHoursPeriods()} Uhr` : ""}</span>
					</p>
					<p className={styles.description}>{`${business.description}`}</p>
				</div>
				<div className={styles.buttons}>
					<button onClick={handleSubmit} className={styles.notification}>
						<IoIosNotificationsOutline style={{ marginRight: "0.2rem" }} size={"24"} />
						Merken
					</button>
					{alert ? <BusinessMerkenResponseMessage /> : ""}
					<button onClick={popUpOpener} className={styles.contact} ref={ref}>
						Kontaktieren
					</button>
					{open ? <PopUpOpener popUpOpener={popUpOpener} open={open} businessContacts={businessContacts} /> : ""}
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
						<Image alt="" height={"28"} width={"28"} className={styles.react_icons} src={"/shop-remove.svg"} />{" "}
						{monthsDifference > 1 ? `seit ${monthsDifference} Monaten Mitglied der Aachen App` : `seit ${monthsDifference} Monat Mitglied der Aachen App`}
					</p>
					<p>
						<BiSolidCoupon size={28} className={styles.react_icons} />
						{business.totalCouponCount <= 0 ? "Noch keine Coupons erstellt" : `${business.totalCouponCount} Coupons erstellt`}
					</p>
					<p>
						<FaCalendarDays size={28} className={styles.react_icons} />
						{business.totalEventCount <= 0 ? "Noch keine Events erstellt" : `${business.totalEventCount} Events erstellt`}
					</p>
				</div>
				<div className={styles.opening_time_table}>
					<h2>Öffnungszeiten</h2>
					{/* //TODO: This function is imported from /helpers folder. Please check this and optimize if its needed; */}
					{weekSchedule(business.openingHourPeriods != null ? business.openingHourPeriods : business.dayList)}
				</div>
				<div className={styles.location}>
					<h2>Standort</h2>
					<InteractiveMap location={business.location} latitude={business.latitude} longitude={business.longitude} />
					<div className={styles.route}>
						<Link target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${business.location}`}>
							Route planen
						</Link>
						<span>{business.formattedAddress ?? business.location}</span>
					</div>
				</div>
				<div className={styles.website_link}>
					<h2>Soziale Medien</h2>
					<div className={styles.item}>
						<Image src={business.logoImageUrl ?? business.photoURL} width="56" height="56" alt="Business logo" className={styles.logo} />
						<div>
							<h2>Website</h2>
							<Link
								target="_blank"
								rel="noreferrer"
								//TODO: This function is imported from /helpers folder. Please check this and optimize if its needed;
								href={hrefValidator(business.website) ?? `/*`}
							>
								{business.website == "" || business.website == null ? "Unbekannt" : business.website}
							</Link>
						</div>
					</div>
					{business.instagram ? (
						<div className={styles.item}>
							<Image src={"/instagram_logo.svg"} width="56" height="56" alt="instagram logo" className={styles.logo} />
							<div>
								<h2>Instagram</h2>
								<Link target="_blank" rel="noreferrer" href={`https://www.instagram.com/${business.instagram.replace(/\s/g, "")}/`} style={{ textDecoration: "none" }}>
									@{business.instagram}
								</Link>
							</div>
						</div>
					) : null}
					{business.whatsapp ? (
						<div className={styles.item}>
							<Image src={"/whatsApp_logo.svg"} width="56" height="56" alt="instagram logo" className={styles.logo} style={{ borderRadius: "10%" }} />
							<div>
								<h2>WhatsApp</h2>
								<Link target="_blank" rel="noreferrer" href={`https://wa.me/${business.whatsapp}`} style={{ textDecoration: "none" }}>
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
	const businessUrlId: string = "https://us-central1-aachen-app.cloudfunctions.net/getBusinessById";

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
