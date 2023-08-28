import styles from "@/styles/business_card.module.scss";
import Image from "next/image";
import MockupImage from "@/public/AachenPics/aachen6.png";
import MockupImage2 from "@/public/aachen_pic_2.png";
import Notification from "@/public/business/notification.svg";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { IBusinessCard } from "@/types/types";

// Return JSX to render the business card
const BusinessCard = ({
	handleSubmit,
	business,
}: {
	handleSubmit: MouseEventHandler;
	business: IBusinessCard;
}) => {
	return (
		//Wrap an entire card in a link, which will redirect to business details page
		<div className={styles.container}>
			{/* Render a placeholder image */}
			<div className={styles.business_image_container}>
				<Image
					className={styles.business_image}
					src={business.bannerImageUrl ?? business.bigPhotoURL}
					alt="business_image"
					loading="lazy"
					width={379}
					height={176}
				/>
				{/* Render a placeholder logo */}
				<div className={styles.business_logo_container}>
					<Image
						className={styles.business_logo}
						src={business.logoImageUrl ?? business.photoURL}
						alt="business_image"
						loading="lazy"
						width={80}
						height={80}
					/>
				</div>
			</div>
			{/* Render the name, category, opening hours, button */}
			<div className={styles.info}>
				<div className={styles.business_name}>{business.name}</div>
				<div className={styles.business_category}>{business.category}</div>
				<p className={styles.dot}>•</p>
				<div className={styles.business_time}>Geöffnet bis 23:00 Uhr</div>
			</div>
			{/* Render the additional information about distance and number of posts */}
			<div className={styles.add_info}>
				{/* <div className={styles.distance}>
					<p className={styles.number}>521m</p>
					<p className={styles.text}>entfernt</p>
				</div> */}
				<div className={styles.posts}>
					<p className={styles.number}>
						{(business.totalEventCount ?? 0) + (business.totalCouponCount ?? 0)}
					</p>
					<p className={styles.text}>Beiträge</p>
				</div>
				<button className={styles.business_button} onClick={handleSubmit}>
					Merken
					<Image
						src={Notification}
						alt={"notification"}
						width={20}
						height={20}
					/>
				</button>
			</div>
		</div>
	);
};

export default BusinessCard;
