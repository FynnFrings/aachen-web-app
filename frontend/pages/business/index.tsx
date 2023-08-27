import styles from "@/styles/bussiness.module.scss";
import BusinnesBanner from "@/public/business/business_banner.png";
import Image from "next/image";
import SearchField from "@/components/SearchField";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import BusinessCard from "@/components/Business/BusinessCard";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import { IBusinessCard } from "@/types/types";

const Business = ({ businesses }: { businesses: IBusinessCard[] }) => {
	// creating state for alert message
	const [alert, isAlert] = useState<boolean>(false);

	// onClick function with setTimeout fuction to manage "alert" state
	const handleSubmit: MouseEventHandler = () => {
		isAlert(true);
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

	const searchByTitle = (businesses: any[], searchInput: any) => {
		return businesses.filter((business) => {
			const name = business.name.toLowerCase() || ""; // Get the lowercased title or set it as an empty string if it doesn't exist
			const lowercaseSearchInput = searchInput.toLowerCase();

			// Check if the lowercased title includes the lowercased search input or if the search input is empty
			return name.includes(lowercaseSearchInput) || !searchInput;
		});
	};

	const filteredBusinesses = [...(businesses || [])].filter(
		(business) => searchByTitle([business], searchInput).length > 0
	);

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
				{filteredBusinesses
					.filter(
						(bussiness) =>
							(bussiness.bannerImageUrl ?? bussiness.bigPhotoURL) &&
							(bussiness.logoImageUrl ?? bussiness.photoURL)
					)
					.map((business: IBusinessCard) => (
						<BusinessCard
							handleSubmit={handleSubmit}
							business={business}
							key={business.itemId}
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
	return { props: { businesses: data } };
}

export default Business;
