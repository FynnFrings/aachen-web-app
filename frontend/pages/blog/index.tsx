import BlogCard from "@/components/Blog/BlogCard";
import ListOfCategoryItems from "@/components/DropdownFilter/ListOfCategoryItems";
import { IBlogCard } from "@/types/types";
import { ChangeEvent, useState } from "react";
import SearchField from "@/components/SearchField";
import searchByTitle from "@/helpers/searchByTitle";
import searchByDate from "@/helpers/filterByDate";
import Head from "next/head";

const BlogPage = ({ articles }: { articles: IBlogCard[] }) => {
	//*handling search field in search bar START

	// state variable to manage input value in search bar
	const [searchInput, setSearchInput] = useState<string>("");

	// function to update searchInput state based on user input
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	//*handling selectItems state in filter START
	// state variable to manage selected category for article filtering
	const [selectItem, setSelectItem] = useState<string>("vom neusten zu ältesten");

	// function to update selectItem state based on user selection
	const itemSelection = (item: string): void => {
		setSelectItem(item);
	};

	// declaring list of items, which will be displayed in DropdownList component (category filter)
	const listOfItems = ["vom neusten zu ältesten", "vom ältesten zu neusten"];

	// Array of filtered articles sorted according to selected sorting criteria
	const filteredArticles = [...(articles || [])] // Create a new array with the elements in the articles array (if it exists)
		.sort((a, b) => searchByDate(selectItem, a, b))
		.filter((article) => searchByTitle([article], searchInput).length > 0); // Filter articles by title with custom helper function and remove any that don't match.

	return (
		<>
			<Head>
				<title>Blog | Aachen App</title>
				<meta
					name="description"
					content="Blog | Aachen App. Blog über Aachen und die App."
				/>
				<meta name="robots" content="index, follow" />
				<meta charSet="UTF-8" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Aachen App" />
				<meta property="og:description" content="Aachen App" />
				<meta property="og:url" content="https://www.aachen-app.de/blog" />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:image" content="/logo_yellow.jpg" />
				<meta property="og:image:type" content="image/jpg" />
				<meta property="og:image:alt" content="Aachen App" />
				<meta property="og:image:width" content="700" />
				<meta property="og:image:height" content="700" />
			</Head>
			<div className="flex flex-col gap-14 py-20">
				<div className="bg-gradient-to-b from-neutral-700 to-neutral-500 bg-cover bg-opacity-75 w-full flex flex-col justify-center items-center gap-y-5 py-28 rounded-lg">
					<h1 className="text-5xl font-bold text-white">Unser Blog</h1>
				</div>
				<div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between">
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{/* render BlogCard component for each filtered article */}
					{filteredArticles.map((article) => (
						<BlogCard key={article.id} article={article} />
					))}
				</div>
			</div>
		</>
	);
};

//Using Server Side Rendering function
export async function getStaticProps() {
	// Fetch data from  API
	const res = await fetch(`https://us-central1-aachen-app.cloudfunctions.net/getAllBlogs`);
	const data = await res.json();
	// Pass data to the page via props
	return { props: { articles: data } };
}

export default BlogPage;
