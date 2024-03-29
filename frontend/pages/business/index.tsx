import styles from "@/styles/bussiness.module.scss";
import BusinessBanner from "@/public/business/business_banner.png";
import Image from "next/image";
import SearchField from "@/components/SearchField";
import { ChangeEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import BusinessCard from "@/components/Business/BusinessCard";
import BusinessMerkenResponseMessage from "@/components/Business/BusinessMerkenResponseMessage";
import { IBusinessCard } from "@/types/types";
import Pagination from "@/components/Pagination";
import { paginate } from "@/helpers/paginate";
import searchByTitle from "@/helpers/searchByTitle";
import searchByDate from "@/helpers/filterByDate";
import Head from "next/head";
import Nothing from "@/components/Nothing";

const Business = ({ businesses }: { businesses: IBusinessCard[] }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 9;

	const onPageChange = (page: any) => {
		setCurrentPage(page);
	};

	const [alert, isAlert] = useState<boolean>(false);

	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		isAlert(true);

		// Clearing the previous timeout (if already set)
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Setting a new timeout
		timeoutRef.current = setTimeout(() => {
			isAlert(false);
		}, 3000);
	};

	// Ensuring timeout clearance when placing a component
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

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
	const [selectDate, setSelectDate] = useState<string>("vom neusten zu ältesten");

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

	const dateSelectItem = ["vom neusten zu ältesten", "vom ältesten zu neusten"];

	// Create a new array called filteredBusinesses by spreading the contents of the businesses array (if it exists) or an empty array if businesses is null or undefined.
	const filteredBusinesses = [...(businesses || [])]
		.sort((a, b) => searchByDate(selectDate, a, b))
		.filter(
			// Filter the array based on the selectItem value or business category
			(business) => selectItem === "Alle" || business.category === selectItem
		)
		.filter(
			// Filter the array based on the searchInput using a custom function searchByTitle
			(business) => searchByTitle([business], searchInput).length > 0
		);

	const paginatedPosts = paginate(filteredBusinesses, currentPage, pageSize);

	return (
		<>
			<Head>
				<title>Business | Aachen App</title>
				<meta name="description" content="Business | Aachen App. Entdecken Sie mehr über Business in Aachen." />
				<meta property="og:title" content="Business | Aachen App" key="title" />
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="business" />
				<meta property="og:site_name" content="Aachen App" />
				<meta property="og:description" content="Business | Aachen App. Entdecken Sie mehr über Business in Aachen." />
				<meta property="og:url" content="https://www.aachen-app.de/business" />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content="/logo_yellow.jpg" />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content="Aachen App" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</Head>

			<div className={styles.container}>
				<div className={styles.banner}>
					<Image className={styles.business_banner} src={BusinessBanner} alt="business-banner" width={0} height={0} />
					<h1 className={styles.banner_text}>Business</h1>
				</div>
				<div className={styles.filters}>
					<SearchField handleChange={handleChange} searchInput={searchInput} placeholder={"Search"} />
					<div className={styles.select_filters}>
						<ListOfCategoryItems selectItem={selectItem} itemSelection={itemSelection} listOfItems={listOfItems} />
						<ListOfCategoryItems selectItem={selectDate} itemSelection={itemSelectionDate} listOfItems={dateSelectItem} />
					</div>
				</div>
				<div className={paginatedPosts.length ? styles.list_of_businesses : "w-full flex flex-row justify-center"}>
					{paginatedPosts.length ? (
						paginatedPosts.map((business: IBusinessCard) => <BusinessCard handleSubmit={handleSubmit} business={business} key={business.itemId} />)
					) : (
						<Nothing list_name="Businesses" />
					)}
				</div>
				{alert ? <BusinessMerkenResponseMessage /> : ""}
				{paginatedPosts.length && <Pagination items={filteredBusinesses.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />}
			</div>
		</>
	);
};

//Using Server Side Rendering function
export async function getServerSideProps() {
	// Fetch data from  API
	const res = await fetch(`https://us-central1-aachen-app.cloudfunctions.net/getAllBusinesses`);
	const allBusinesses = await res.json();
	const response = allBusinesses.filter((a: IBusinessCard) => (a.bannerImageUrl ?? a.bigPhotoURL) && (a.logoImageUrl ?? a.photoURL));
	// Pass data to the page via props
	return { props: { businesses: response } };
}

export default Business;
