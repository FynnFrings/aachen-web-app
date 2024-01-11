import styles from "@/styles/coupon_card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";

const CouponCard = ({ coupon }: any) => {
	console.log("🚀 ~ CouponCard ~ coupon:", coupon);

	const currentDate = new Date();

	const endDate = new Date(
		coupon.endDate._seconds * 1000 + coupon.endDate._nanoseconds / 1000000
	);
	console.log("🚀 ~ CouponCard ~ endDate:", endDate);
	const timeDiff = endDate.getTime() - currentDate.getTime();
	const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
	console.log(daysDiff);

	return (
		<Link target="_blank" rel="noreferrer" href={`/coupons/${coupon.id}`}>
			<div className={styles.coupon_item}>
				<div className={styles.image_container}>
					<Image
						className={styles._image}
						src={coupon.imageUrl}
						alt="event_image"
						width={976}
						height={350}
						loading="lazy"
					/>
					{coupon.bannerText == null ||
					coupon.bannerText == undefined ? (
						""
					) : (
						<div className={styles.bannerText}>
							{coupon.bannerText}
						</div>
					)}
				</div>
				<div className={styles.header}>
					<div>
						<h2 suppressHydrationWarning>{coupon.title}</h2>
						{daysDiff < 0 ? (
							<p style={{ color: "#fac520" }}>
								Der Coupon ist abgelaufen
							</p>
						) : (
							<p>Läuft in {daysDiff} Stunden ab</p>
						)}
					</div>
				</div>
				<div className={styles.short_description}>
					<p>{coupon.description}</p>
				</div>
			</div>
		</Link>
	);
};

export default CouponCard;
