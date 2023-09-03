import styles from "@/styles/bussiness.module.scss";
import BusinnesBanner from "@/public/business/business_banner.png";
import Image from "next/image";
import SearchField from "@/components/SearchField";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import BusinessCard from "@/components/Business/BusinessCard";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
const Business = ({ companies }: any) => {
	// creating state for alert message
	const [alert, isAlert] = useState<boolean>(false);

	// onClick function with setTimeout fuction to manage "alert" state
	const handleSubmit: MouseEventHandler = (e) => {
		isAlert(true);
		e.preventDefault();
		e.stopPropagation();
		setTimeout(() => {
			isAlert(false);
		}, 3000);
	};

	//*handling search field in search bar START

	// state variable to manage input value in search bar
	const [searchInput, setSearchInput] = useState<string>("");

	// function to update searchInput state based on user input
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	//*handling selectItems state in filter START
	// state variable to manage selected category for article filtering
	const [selectItem, setSelectItem] = useState<string>("");

	// function to update selectItem state based on user selection
	const itemSelection = (item: string): void => {
		setSelectItem(item);
	};

	// declaring list of items, which will be displayed in DropdownList component (category filter)
	const listOfItems = ["Restaurants", "Cafes", "Friseursalon"];

	return (
		<div className={styles.container}>
			<div className={styles.banner}>
				<Image
					className={styles.business_banner}
					src={BusinnesBanner}
					alt="business-banner"
					width={0}
					height={0}
				/>
				<h1 className={styles.banner_text}>Business</h1>
			</div>
			<div className={styles.filters}>
				<SearchField
					handleChange={handleChange}
					searchInput={searchInput}
					placeholder={"Search"}
				/>
				<ListOfCategoryItems
					selectItem={selectItem}
					itemSelection={itemSelection}
					listOfItems={listOfItems}
				/>
			</div>
			<div className={styles.list_of_businesses}>
				{companies.map((company: any) => (
					<BusinessCard
						handleSubmit={handleSubmit}
						company={company}
						key={company.id}
					/>
				))}
			</div>
			{alert ? <BusinessMerkenResponseMessage /> : ""}
		</div>
	);
};

//Using Server Side Rendering function
export async function getServerSideProps() {
	// Fetch data from  API
	const res = await fetch(
		`https://us-central1-aachen-app.cloudfunctions.net/getAllBusinesses`
	);
	const data = await res.json();
	// Pass data to the page via props
	return { props: { companies: data } };
}

export default Business;
