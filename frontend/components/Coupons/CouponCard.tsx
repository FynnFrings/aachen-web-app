import styles from "@/styles/coupon_card.module.scss";
import Image from "next/image";
import { BsBookmark } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";

const CouponCard = ({ coupon }: any) => {
	return (
		<>
			<div className={styles.coupon_item}>
				<div className={styles.banner}>
					{/* <Image
						className={styles.banner_image}
						src={coupon.imageUrl}
						alt={coupon.title}
						width={50}
						height={50}
					/> */}
				</div>
				<div className={styles.header}>
					<div>
						<h2 suppressHydrationWarning>{coupon.title}</h2>
						<p>Läuft in 3 Stunden ab</p>
					</div>
					<button>
						<BsBookmark size={32}></BsBookmark>
					</button>
				</div>
				<div className={styles.business_container}>
					<div className={styles.logo}></div>
					<div className={styles.info}>
						{/* <h2>{coupon.businessName}</h2>
						<p>{coupon.businessType}</p> */}
					</div>
					{/* <SlArrowRight className={styles.arrow_icon} size={20} /> */}
				</div>
			</div>
		</>
	);
};

export default CouponCard;
