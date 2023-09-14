import styles from "@/styles/bussiness.module.scss";
import BusinessBanner from "@/public/business/business_banner.png";
import Image from "next/image";
import SearchField from "@/components/SearchField";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import BusinessCard from "@/components/Business/BusinessCard";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import { IBusinessCard } from "@/types/types";
import Pagination from "@/components/Pagination";
import { paginate } from "@/helpers/paginate";

const Business = ({ businesses }: { businesses: IBusinessCard[] }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 9;

	const onPageChange = (page: any) => {
		setCurrentPage(page);
	};

	// creating state for alert message
	const [alert, isAlert] = useState<boolean>(false);

	// onClick function with setTimeout fuction to manage "alert" state
	const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
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
	// state variable to manage selected category for business filtering
	const [selectItem, setSelectItem] = useState<string>("Alle");

	// state variable to manage selected newest and oldest for business filtering
	const [selectDate, setSelectDate] = useState<string>("Deaktivieren");

	//* functions to update selectItem state based on user selection
	const itemSelection = (item: string): void => {
		setSelectItem(item);
	};

	const itemSelectionDate = (item: string): void => {
		setSelectDate(item);
	};

	// declaring list of items, which will be displayed in DropdownList component (category filter)
	const listOfItems = [
		"Alle",
		"Bildungseinrichtung",
		"Bekleidungsgeschäft",
		"Schönheitssalon",
		"Einzelhandel",
		"Werkstatt",
		"Lebensmittelgeschäft",
		"Dienstleistung",
		"Gaststätte",
		"Geschäft",
		"Restaurant",
		"Beratung",
		"Bäckerei",
		"Cafe",
		"Kunstgalerie",
	];

	const dateSelectItem = [
		"Deaktivieren",
		"vom neusten zu ältesten",
		"vom ältesten zu neusten",
	];

	const searchByTitle = (businesses: any[], searchInput: any) => {
		return businesses.filter((business) => {
			const name = business.name.toLowerCase() || ""; // Get the lowercased title or set it as an empty string if it doesn't exist
			const lowercaseSearchInput = searchInput.toLowerCase();

			// Check if the lowercased title includes the lowercased search input or if the search input is empty
			return name.includes(lowercaseSearchInput) || !searchInput;
		});
	};

	// Create a new array called filteredBusinesses by spreading the contents of the businesses array (if it exists) or an empty array if businesses is null or undefined.
	const filteredBusinesses = [...(businesses || [])]
		.filter(
			(business: IBusinessCard) =>
				(business.bannerImageUrl ?? business.bigPhotoURL) &&
				(business.logoImageUrl ?? business.photoURL)
		)
		.sort((a, b) => {
			// Sort the array based on the selectDate value
			if (selectDate === "Deaktivieren") {
				// If selectDate is "Deaktivieren", return 0 to indicate no sorting
				return 0;
			}
			if (selectDate === "vom neusten zu ältesten") {
				// If selectDate is "vom neusten zu ältesten"
				return (
					b.createdAt?._seconds - a.createdAt?._seconds || // If seconds are equal, sort by nanoseconds
					b.createdAt?._nanoseconds - a.createdAt?._nanoseconds
				);
			} else {
				// For any other values of selectDate
				return (
					a.createdAt?._seconds - b.createdAt?._seconds || // If seconds are equal, sort by nanoseconds
					a.createdAt?._nanoseconds - b.createdAt?._nanoseconds
				);
			}
		})
		.filter(
			// Filter the array based on the selectItem value or business category
			(business) =>
				selectItem === "Alle" || business.category === selectItem
		)
		.filter(
			// Filter the array based on the searchInput using a custom function searchByTitle
			(business) => searchByTitle([business], searchInput).length > 0
		);

	const paginatedPosts = paginate(filteredBusinesses, currentPage, pageSize);
	// console.log(
	// 	"🚀 ~ file: index.tsx:132 ~ Business ~ paginatedPosts:",
	// 	businesses.length
	// );

	return (
		<div className={styles.container}>
			<div className={styles.banner}>
				<Image
					className={styles.business_banner}
					src={BusinessBanner}
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
				<div className={styles.select_filters}>
					<ListOfCategoryItems
						selectItem={selectItem}
						itemSelection={itemSelection}
						listOfItems={listOfItems}
					/>
					<ListOfCategoryItems
						selectItem={selectDate}
						itemSelection={itemSelectionDate}
						listOfItems={dateSelectItem}
					/>
				</div>
			</div>
			<div className={styles.list_of_businesses}>
				{paginatedPosts.map((business: IBusinessCard) => (
					<BusinessCard
						handleSubmit={handleSubmit}
						business={business}
						key={business.itemId}
					/>
				))}
			</div>
			{alert ? <BusinessMerkenResponseMessage /> : ""}
			<Pagination
				items={filteredBusinesses.length}
				currentPage={currentPage}
				pageSize={pageSize}
				onPageChange={onPageChange}
			/>
		</div>
	);
};

//Using Server Side Rendering function
export async function getServerSideProps() {
	// Fetch data from  API
	const res = await fetch(
		`https://us-central1-aachen-app.cloudfunctions.net/getAllBusinesses`
	);
	const response = await res.json();
	// Pass data to the page via props
	if (!response) {
		return {
			notFound: true,
		};
	}
	return { props: { businesses: response } };
}

export default Business;
