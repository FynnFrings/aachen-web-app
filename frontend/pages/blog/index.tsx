import BlogCard from "@/components/Blog/BlogCard";
import DropdownList from "@/components/DropdownFilter/DropdownList";
import SearchFiled from "@/components/SearchFiled";
import { IBlogCard } from "@/types/types";
import { dateFormat } from "../../components/dateFormat";
import { ChangeEvent, useState } from "react";

const BlogPage = ({ articles }: { articles: IBlogCard[] }) => {
  //TODO: USE useReduce INSTEAD OF USE STATE

  //*handling search field in search bar START

  // state variable to manage input value in search bar
  const [searchInput, setSearchInput] = useState<string>("");

  // function to update searchInput state based on user input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // state variable to manage selected category for article filtering
  const [selectItem, setSelectItem] = useState<string>("");

  // function to update selectItem state based on user selection
  const itemSelection = (item: string): void => {
    setSelectItem(item);
  };

  // array of articles filtered according to searchInput and selectItem state values
  const filteredBlogs = articles.filter((article) => {
    let isMatchedSearchByTittle =
      article.title.toLowerCase().includes(searchInput.toLowerCase()) || // check if title includes search query
      !searchInput; // if search query is empty, all articles should be returne
    return isMatchedSearchByTittle;
  });

  //sort the array by date from newest to oldest
  let sortedDatesNewestToOldest = articles.sort((a, b) => {
    let sortedDatesNewestToOldest =
      (dateFormat(b.createdAt) as any) - (dateFormat(a.createdAt) as any);
    return sortedDatesNewestToOldest;
  });

  //use previous result and reverse it to sort array by date from oldest to newest
  let sortedDatesOldestToNewest = sortedDatesNewestToOldest.reverse();

  return (
    <>
      <div className="flex flex-col gap-14 py-20">
        <div className=" bg-gradient-to-b from-neutral-700 to-neutral-500 bg-cover bg-opacity-75 w-full flex flex-col justify-center items-center gap-y-5 py-28 rounded-lg">
          <h1 className="text-5xl font-bold text-white opa ">Unser Blog</h1>
        </div>
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between">
          <SearchFiled
            handleChange={handleChange}
            searchInput={searchInput}
            placeholder={"Search"}
          />
          <DropdownList selectItem={selectItem} itemSelection={itemSelection} />
        </div>
        <div className="flex flex-col lg:flex-wrap lg:flex-row gap-5 ">
          {/* render BlogCard component for each filtered article */}
          {(selectItem
            ? (selectItem === "vom ältesten zu neusten"
                ? sortedDatesOldestToNewest
                : filteredBlogs) &&
              (selectItem === "vom neusten zu ältesten"
                ? sortedDatesNewestToOldest
                : filteredBlogs)
            : filteredBlogs
          ).map((article) => (
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
  const res = await fetch(`http://localhost:5050/blog/`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { articles: data } };
}

export default BlogPage;
