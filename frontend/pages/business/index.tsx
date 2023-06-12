import styles from "@/styles/bussiness.module.scss";
import BusinnesBanner from "@/public/business/business_banner.png";
import Image from "next/image";
import SearchField from "@/components/SearchField";
import { ChangeEvent, useState } from "react";
import DropdownList from "@/components/DropdownFilter/DropdownList";
const Business = () => {
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
  const listOfItems = ["item 1", "item 2"];

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
        <DropdownList
          selectItem={selectItem}
          itemSelection={itemSelection}
          listOfItems={listOfItems}
        />
      </div>
    </div>
  );
};

export default Business;
