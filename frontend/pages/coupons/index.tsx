import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/coupons.module.scss";
import BusinessBanner from "@/public/business/business_banner.png";
import SearchField from "@/components/SearchField";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import { ChangeEvent, useState } from "react";
import searchByDate from "@/helpers/filterByDate";
import searchByTitle from "@/helpers/searchByTitle";
import { paginate } from "@/helpers/paginate";
import Pagination from "@/components/Pagination";
import CouponCard from "@/components/Coupons/CouponCard";
import Nothing from "@/components/Nothing";

const Coupons = ({ coupons }: any) => {
	const [searchInput, setSearchInput] = useState<string>("");
	const [currentPage, setCurrentPage] = useState(1);

	const pageSize = 8;

	const onPageChange = (page: any) => {
		setCurrentPage(page);
	};
	// function to update searchInput state based on user input
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	//*handling selectItems state in filter START

	// state variable to manage selected newest and oldest for business filtering
	const [selectDate, setSelectDate] = useState<string>("vom neusten zu ältesten");

	//* functions to update selectItem state based on user selection

	const itemSelectionDate = (item: string): void => {
		setSelectDate(item);
	};

	const dateSelectItem = ["vom neusten zu ältesten", "vom ältesten zu neusten"];

	const filteredCoupons = [...(coupons || [])]
		.sort((a, b) => searchByDate(selectDate, a, b))
		.filter(
			// Filter the array based on the searchInput using a custom function searchByTitle
			(coupon) => searchByTitle([coupon], searchInput).length > 0
		);
	const paginatedPosts = paginate(filteredCoupons, currentPage, pageSize);

	return (
		<>
			<Head>
				<title>Coupons | Aachen App</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.banner}>
					<Image
						className={styles.business_banner}
						src={BusinessBanner}
						alt="business-banner"
						width={0}
						height={0}
					/>
					<h1 className={styles.banner_text}>Coupons</h1>
				</div>
				<div className={styles.filters}>
					<SearchField
						handleChange={handleChange}
						searchInput={searchInput}
						placeholder={"Search"}
					/>
					<div className={styles.select_filters}>
						<ListOfCategoryItems
							selectItem={selectDate}
							itemSelection={itemSelectionDate}
							listOfItems={dateSelectItem}
						/>
					</div>
				</div>
				<div className={styles.list_of_coupons}>
					{paginatedPosts.length !== 0 ? (
						paginatedPosts.map((coupon: any) => {
							return <CouponCard key={coupon.id} coupon={coupon} />;
						})
					) : (
						<Nothing list_name="Coupons" />
					)}
				</div>
				{paginatedPosts.length !== 0 ? (
					<Pagination
						items={filteredCoupons.length}
						currentPage={currentPage}
						pageSize={pageSize}
						onPageChange={onPageChange}
					/>
				) : (
					""
				)}
			</div>
		</>
	);
};

//Using Server Side Rendering function
export async function getServerSideProps() {
	// Fetch data from  API
	const res = await fetch(`https://us-central1-aachen-app.cloudfunctions.net/getAllCoupons`);
	const response = await res.json();

	// Pass data to the page via props
	return { props: { coupons: response } };
}

export default Coupons;
