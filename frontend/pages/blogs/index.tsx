import DropdownList from "@/components/DropdownFilter/DropdownList";
import SearchFiled from "@/components/SearchFiled";
import Titel from "@/components/Titel";
import { ChangeEvent, useState } from "react";

const BlogPage = () => {
  //*handling search field in search bar START
  const [searchInput, setSearchInput] = useState<string>("");

  //function for changing value inside input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  //state for filtering events by category
  const [selectItem, setSelectItem] = useState<string>("");

  //function for filtering events by category
  const itemSelection = (item: string): void => {
    setSelectItem(item);
  };

  return (
    <>
      <div className="flex flex-col gap-14 py-20">
        <Titel
          titel={"Unser Blog"}
          background={"bg-gradient-to-b from-neutral-700 to-neutral-500"}
        />
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:justify-between">
          <SearchFiled
            handleChange={handleChange}
            searchInput={searchInput}
            placeholder={"Search"}
          />
          <DropdownList selectItem={selectItem} itemSelection={itemSelection} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
