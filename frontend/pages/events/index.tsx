import styles from "@/styles/events.module.scss";
import BusinessBanner from "@/public/business/business_banner.png";
import Image from "next/image";
import SearchField from "@/components/SearchField";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import EventCard from "@/components/Events/EventCard";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import Pagination from "@/components/Pagination";
import searchByDate from "@/helpers/filterByDate";
import searchByTitle from "@/helpers/searchByTitle";
import { paginate } from "@/helpers/paginate";
import Head from "next/head";
import Nothing from "@/components/Nothing";

const Events = ({ events }: any) => {
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

	// state variable to manage selected newest and oldest for business filtering
	const [selectDate, setSelectDate] = useState<string>("vom neusten zu ältesten");

	//* functions to update selectItem state based on user selection

	const itemSelectionDate = (item: string): void => {
		setSelectDate(item);
	};

	const dateSelectItem = ["vom neusten zu ältesten", "vom ältesten zu neusten"];

	// ! We will need it later
	// const filteredData: any = Object.values(
	// 	events.reduce((acc: any, obj: any) => {
	// 		const key = `${obj.businessId}-${obj.website}`;
	// 		if (
	// 			!acc[key] ||
	// 			obj.startDate._seconds < acc[key].startDate._seconds
	// 		) {
	// 			acc[key] = obj;
	// 		}
	// 		return acc;
	// 	}, {})
	// );

	// Create a new array called filtered events by spreading the contents of the events array (if it exists) or an empty array if events is null or undefined.
	const filteredEvents = [...(events || [])]
		.sort((a, b) => searchByDate(selectDate, a, b))
		.filter(
			// Filter the array based on the searchInput using a custom function searchByTitle
			(event) => searchByTitle([event], searchInput).length > 0
		);
	const paginatedPosts = paginate(filteredEvents, currentPage, pageSize);

	return (
		<>
			<Head>
				<title>Events | Aachen App</title>
				<meta
					name="description"
					content="Events | Aachen App. Entdecken Sie mehr über Events in Aachen."
				/>
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Aachen App" />
				<meta
					property="og:description"
					content="Events | Aachen App. Entdecken Sie mehr über Events in Aachen."
				/>
				<meta property="og:url" content="https://www.aachen-app.de//events" />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content="/logo_yellow.jpg" />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content="Aachen App" />
				<meta property="og:image:width" content="700" />
				<meta property="og:image:height" content="700" />
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
							selectItem={selectDate}
							itemSelection={itemSelectionDate}
							listOfItems={dateSelectItem}
						/>
					</div>
				</div>
				<div
					className={
						paginatedPosts.length !== 0
							? styles.list_of_businesses
							: "w-full flex flex-row justify-center"
					}
				>
					{/* {paginatedPosts */}
					{paginatedPosts.length !== 0 ? (
						paginatedPosts.map((event: any) => {
							return (
								<EventCard
									event={event}
									key={event.itemId}
									handleSubmit={handleSubmit}
								/>
							);
						})
					) : (
						<Nothing list_name="Events" />
					)}
				</div>
				{alert ? <BusinessMerkenResponseMessage /> : ""}
				{paginatedPosts.length !== 0 ? (
					<Pagination
						items={filteredEvents.length}
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
export async function getStaticProps() {
	// Fetch data from  API
	const res = await fetch(`https://us-central1-aachen-app.cloudfunctions.net/getAllEvents`);
	const response = await res.json();

	// Pass data to the page via props
	return { props: { events: response } };
}

export default Events;
