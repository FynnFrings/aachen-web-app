import styles from "@/styles/events.module.scss";
import BusinessBanner from "@/public/business/business_banner.png";
import Image from "next/image";
import SearchField from "@/components/SearchField";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import EventCard from "@/components/Events/EventCard";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import Pagination from "@/components/Pagination";
import { paginate } from "@/helpers/paginate";

const Events = ({ events }: any) => {
	console.log("🚀 ~ file: index.tsx:13 ~ events:", events);
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

	const searchByTitle = (events: any[], searchInput: any) => {
		return events.filter((business) => {
			const name = business.name.toLowerCase() || ""; // Get the lowercased title or set it as an empty string if it doesn't exist
			const lowercaseSearchInput = searchInput.toLowerCase();

			// Check if the lowercased title includes the lowercased search input or if the search input is empty
			return name.includes(lowercaseSearchInput) || !searchInput;
		});
	};

	// Create a new array called filtered events by spreading the contents of the events array (if it exists) or an empty array if events is null or undefined.
	const filteredEvents = [...(events || [])]
		.filter(
			(events: any) =>
				(events.bannerImageUrl ?? events.bigPhotoURL) &&
				(events.logoImageUrl ?? events.photoURL)
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
					b.endDate._seconds - a.startDate._seconds || // If seconds are equal, sort by nanoseconds
					b.endDate._nanoseconds - a.startDate._nanoseconds
				);
			} else {
				// For any other values of selectDate
				return (
					a.startDate._seconds - b.endDate._seconds || // If seconds are equal, sort by nanoseconds
					a.startDate._nanoseconds - b.endDate._nanoseconds
				);
			}
		})
		.filter(
			// Filter the array based on the selectItem value or business category
			(event) => selectItem === "Alle" || event.category === selectItem
		)
		.filter(
			// Filter the array based on the searchInput using a custom function searchByTitle
			(event) => searchByTitle([event], searchInput).length > 0
		);
	const paginatedPosts = paginate(filteredEvents, currentPage, pageSize);

	return (
		<div className={styles.container}>
			<div className={styles.banner}>
				<Image
					className={styles.business_banner}
					src={BusinessBanner}
					alt="business-banner"
					style={{ height: "auto", width: "auto" }}
				/>
				<h1 className={styles.banner_text}>Event</h1>
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
				{/* {paginatedPosts */}
				{events.map((event: any) => {
					return <EventCard event={event} key={event.itemId} />;
				})}
			</div>
			{alert ? <BusinessMerkenResponseMessage /> : ""}
			<Pagination
				items={filteredEvents.length}
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
		`https://us-central1-aachen-app.cloudfunctions.net/getAllEvents`
	);
	const response = await res.json();
	// Pass data to the page via props
	return { props: { events: response } };
}

export default Events;
