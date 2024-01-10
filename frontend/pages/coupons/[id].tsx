import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/event_details.module.scss";
import { MouseEventHandler, useState } from "react";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import InteractiveMap from "@/components/interactiveMap";
import { AiFillClockCircle } from "react-icons/ai";
import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import banner from "@/public/aachen_pic_2.png";
import Head from "next/head";
import DOMPurify from "isomorphic-dompurify";
import { useRouter } from "next/router";

const CouponDetailsPage = ({ coupon }: any) => {
	//TODO: Please optimie this page if it is possible;

	const [alert, isAlert] = useState<boolean>(false);

	// onClick function with setTimeout fuction to manage "alert" state
	const handleSubmit: MouseEventHandler = () => {
		isAlert(true);
		setTimeout(() => {
			isAlert(false);
		}, 3000);
	};

	const eventDate = () => {
		const fullStartDate = new Date(coupon.startDate._seconds * 1000 + coupon.startDate._nanoseconds / 1000000);
		const fullEndDate = new Date(coupon.endDate._seconds * 1000 + coupon.endDate._nanoseconds / 1000000);
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
				{validStartDate} {validStartTime} Uhr - {validEndDate} {validEndTime} Uhr
			</span>
		);
	};
	const validLocation = () => {
		const obj = {
			location: "Aachen, Deutschland",
			latitude: 50.775555,
			longitude: 6.083611,
		};
		if (coupon.location == "" || coupon.location == undefined || coupon.location == null) {
			obj.location = coupon.timeFrames[0].location;
		} else {
			obj.location = coupon.location;
		}

		if (coupon.latitude == "" || coupon.latitude == undefined || coupon.latitude == null) {
			obj.latitude = coupon.timeFrames[0].latitude;
		} else {
			obj.latitude = coupon.latitude;
		}
		if (coupon.longitude == "" || coupon.longitude == undefined || coupon.longitude == null) {
			obj.longitude = coupon.timeFrames[0].longitude;
		} else {
			obj.longitude = coupon.longitude;
		}
		return obj;
	};

	const hasPayment = () => {
		if (coupon.hasPayment == null || coupon.hasPayment == false || coupon.hasPayment == undefined) {
			return false;
		} else {
			return true;
		}
	};

	// Sanitize the article content and short description to prevent malicious attacks
	const sanitizedData: string = DOMPurify.sanitize(coupon.description);

	// Get an id of the page
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Head>
				<title>{`${coupon.title} | Aachen App`}</title>
				<meta name="description" content={coupon.description} />
				<meta property="og:title" content={`${coupon.title} | Aachen App`} key="title" />
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="coupon" />
				<meta property="og:site_name" content="Aachen App" />
				<meta property="og:description" content={coupon.description} />
				<meta property="og:url" content={`https://www.aachen-app.de/coupons/${id}`} />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content={coupon.imageUrl ?? banner} />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content={coupon.title} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</Head>
			<div className={styles.event_header}>
				<div className={styles.image_container}>
					<Image className={styles._image} src={coupon.imageUrl ?? banner} alt="event_image" width={976} height={350} loading="lazy" />
					{/* Render a placeholder logo */}
				</div>
				<div className={styles.title}>
					<h1>{coupon.title}</h1>
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
					<button onClick={handleSubmit} className={styles.order} style={!hasPayment() ? { display: "none" } : { display: "flex" }}>
						<FaBagShopping style={{ marginRight: "0.2rem" }} size={"24"} />
						Bestellen
					</button>
					{alert ? <BusinessMerkenResponseMessage /> : ""}
				</div>
			</div>
			<div className={styles.event_details}>
				<div className={styles.information}>
					<h2>Information</h2>
					<p>{coupon.description}</p>
					<input type="checkbox" className={styles.expand_btn} />
				</div>
				<div className={styles.location}>
					<h2>Standort</h2>
					<InteractiveMap location={validLocation().location} latitude={validLocation().latitude} longitude={validLocation().longitude} />{" "}
					<div className={styles.route}>
						<Link target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${validLocation().location}`}>
							Route planen
						</Link>
						<span>{validLocation().location}</span>
					</div>
				</div>
				{coupon.businessId && (
					<div className={styles.business_link}>
						<div className={styles.item}>
							<Image src={coupon.imageUrl ?? banner} width="56" height="56" alt="coupon logo" className={styles.logo} />
							<span>
								<h2>Inhaber</h2>
								<Link target="_blank" rel="noreferrer" href={`/business/${coupon.businessId}`}>
									Link to business
								</Link>
							</span>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export async function getServerSideProps(context: { params: { id: string } }) {
	// Fetch data from  API
	const id = context.params.id;
	// Declared url of events id
	const CouponUrlId: string = "https://us-central1-aachen-app.cloudfunctions.net/getCouponById";

	// Fetching data
	const res = await fetch(`${CouponUrlId}`, {
		method: "POST",
		mode: "cors",
		body: JSON.stringify({ id: id }),
	});

	// Store in "data" as json file
	const data = await res.json();

	// Pass data to the page via props
	return { props: { coupon: data } };
}

export default CouponDetailsPage;
