import styles from "@/styles/coupon_card.module.scss";
import Image from "next/image";
import Link from "next/link";

const CouponCard = ({ coupon }: any) => {
	const currentDate = new Date();

	const endDate = new Date(coupon.endDate._seconds * 1000 + coupon.endDate._nanoseconds / 1000000);

	const timeDiff = endDate.getTime() - currentDate.getTime();
	const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

	return (
		<Link className="animate-fade" target="_blank" rel="noreferrer" href={`/coupons/${coupon.id}`}>
			<div className={styles.coupon_item}>
				<div className={styles.image_container}>
					<Image className={styles._image} src={coupon.imageUrl} alt="event_image" width={976} height={350} loading="lazy" />
					{coupon.bannerText && (
						<div className={styles.bannerText} suppressHydrationWarning>
							{coupon.bannerText}
						</div>
					)}
				</div>
				<div className={styles.header}>
					<div>
						<h2 suppressHydrationWarning>{coupon.title}</h2>
						{daysDiff > 0 && <p suppressHydrationWarning>Läuft in {daysDiff} Tage ab</p>}
						{daysDiff < 1 && daysDiff > 0 && <p suppressHydrationWarning>Läuft in {timeDiff} Stunden ab</p>}
						{daysDiff < 0 && (
							<p style={{ color: "#fac520" }} suppressHydrationWarning>
								Der Coupon ist abgelaufen
							</p>
						)}
					</div>
				</div>
				<div className={styles.short_description}>
					<p suppressHydrationWarning>{coupon.description}</p>
				</div>
			</div>
		</Link>
	);
};

export default CouponCard;
