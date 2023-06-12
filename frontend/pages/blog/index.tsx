import BlogCard from "@/components/Blog/BlogCard";
import DropdownList from "@/components/DropdownFilter/DropdownList";
import { IBlogCard } from "@/types/types";
import { ChangeEvent, useState } from "react";
import SearchField from "@/components/SearchField";

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
  const [selectItem, setSelectItem] = useState<string>("");

  // function to update selectItem state based on user selection
  const itemSelection = (item: string): void => {
    setSelectItem(item);
  };

  // declaring list of items, which will be displayed in DropdownList component (category filter)
  const listOfItems = ["vom neusten zu ältesten", "vom ältesten zu neusten"];

  // Function to filter articles by title
  const filterByTitle = (articles: any[], searchInput: string) => {
    return (articles || []).filter((article) => {
      const isMatchedSearchByTitle =
        article.title?.toLowerCase().includes(searchInput.toLowerCase()) || // Check if article title includes search input or search input is empty string
        !searchInput;
      return isMatchedSearchByTitle; // Return boolean
    });
  };

  // Array of filtered articles sorted according to selected sorting criteria
  const filteredArticles = [...(articles || [])] // Create a new array with the elements in the articles array (if it exists)
    .sort((a, b) => {
      return selectItem === "vom neusten zu ältesten" // Sort from newest to oldest or vice versa based on selected sorting criteria
        ? b.createdAt?._seconds - a.createdAt?._seconds || // If seconds are equal, sort by nanoseconds
            b.createdAt?._nanoseconds - a.createdAt?._nanoseconds
        : a.createdAt?._seconds - b.createdAt?._seconds || // If seconds are equal, sort by nanoseconds
            a.createdAt?._nanoseconds - b.createdAt?._nanoseconds;
    })
    .filter((article) => filterByTitle([article], searchInput).length > 0); // Filter articles by title and remove any that don't match.

  return (
    <>
      <div className="flex flex-col gap-14 py-20">
        <div className=" bg-gradient-to-b from-neutral-700 to-neutral-500 bg-cover bg-opacity-75 w-full flex flex-col justify-center items-center gap-y-5 py-28 rounded-lg">
          <h1 className="text-5xl font-bold text-white">Unser Blog</h1>
        </div>
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between">
          <SearchField
            handleChange={handleChange}
            searchInput={searchInput}
            placeholder={"Search"}
          />
          <DropdownList
            selectItem={selectItem}
            itemSelection={itemSelection}
            listOfItems={listOfItems}
          />
        </div>
        <div className="flex flex-col lg:flex-wrap lg:flex-row gap-5 ">
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
export async function getServerSideProps() {
  // Fetch data from  API
  const res = await fetch(
    `https://us-central1-aachen-app.cloudfunctions.net/getAllBlogs`
  ); //http://localhost:5050/blog/
  const data = await res.json();
  // Pass data to the page via props
  return { props: { articles: data } };
}

export default BlogPage;
