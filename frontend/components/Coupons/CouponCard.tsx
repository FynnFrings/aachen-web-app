import styles from "@/styles/coupon_card.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";
const CouponCard = ({ coupon, id }: any) => {
	/***********************getting window width for "adaptive"**********************/
	const [windowWidth, setWindowWidth] = useState(Number);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);
	//////////////////////////////////////////////////////////////////////////////////////
	const toggleButton = (event: any) => {
		event.preventDefault();
	};
	const layoutProperties = [
		{ gridArea: "1 / 1 / 2 / 2", display: "none", height: "12.9375rem" },
		{ gridArea: "1 / 2 / 3 / 3", display: "flex", height: "27.875rem" },
		{ gridArea: "2 / 1 / 4 / 2", display: "flex", height: "27.875rem" },
		{ gridArea: "3 / 2 / 5 / 3", display: "flex", height: "27.875rem" },
		{ gridArea: "4 / 1 / 5 / 2", display: "none", height: "12.9375rem" },
	];

	return (
		<>
			<div
				className={styles.coupon_item}
				style={{
					gridArea:
						windowWidth <= 1128
							? ""
							: layoutProperties[id].gridArea,
					height:
						windowWidth <= 1128
							? "auto"
							: layoutProperties[id].height,
				}}
			>
				<div
					className={styles.banner}
					style={{
						display:
							windowWidth <= 1128
								? "flex"
								: layoutProperties[id].display,
					}}
				/>

				<div className={styles.header}>
					<span>
						<h2>{coupon.title}</h2>
						<p>Läuft in 3 Stunden ab</p>
					</span>
					<button onClick={toggleButton}>
						<BsBookmark size={32}></BsBookmark>
					</button>
				</div>
				<div className={styles.business_container}>
					<div className={styles.logo}></div>
					<div className={styles.info}>
						<h2>{coupon.businessName}</h2>
						<p>{coupon.businessType}</p>
					</div>
					<SlArrowRight className={styles.arrow_icon} size={20} />
				</div>
			</div>
		</>
	);
};

export default CouponCard;
