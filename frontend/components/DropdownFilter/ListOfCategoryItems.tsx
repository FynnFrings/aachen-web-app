import React, { useState } from "react";
import DropDownCategoryFilter from "./DropDownCategoryFilter";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useOutsideClick from "@/hooks/useOutsideClick";

// The main component
const ListOfCategoryItems = ({ selectItem, itemSelection, listOfItems }: any): JSX.Element => {
	// State variable to manage dropdown visibility
	const [showDropDown, setShowDropDown] = useState<boolean>(false);

	// Function to toggle dropdown visibility
	const toggleDropDown = (): void => {
		setShowDropDown(!showDropDown);
	};

	const ref: any = useOutsideClick(handleClickOutside);

	function handleClickOutside() {
		setShowDropDown(false);
	}

	// Function to handle dismiss event when focus is lost
	const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
		if (event.currentTarget.contains(event.target)) {
			setShowDropDown(false);
		}
	};

	// Render the component
	return (
		<>
			<button
				// Button style
				className="w-full lg:w-80 h-12 bg-transparent border border-white text-white  relative flex flex-col justify-center rounded-xl"
				// Toggle dropdown visibility on button click
				onClick={(): void => toggleDropDown()}
				// Handle focus lost event
				onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
				ref={ref}
			>
				<div className="w-full flex justify-between items-center ">
					{/* Display selected item or default message */}
					<p className="ml-5">{selectItem ? selectItem : "Select filter"}</p>
					{/* Arrow icon */}
					{showDropDown ? (
						<IoIosArrowUp className="mr-5" />
					) : (
						<IoIosArrowDown className="mr-5" />
					)}
				</div>
				{/* If dropdown is visible, render the DropDown component */}
				{showDropDown && (
					<DropDownCategoryFilter
						items={listOfItems} // Pass items array to DropDown component
						showDropDown={false} // Pass dropdown visibility to DropDown component
						toggleDropDown={() => toggleDropDown()} // Pass toggle function to DropDown component
						itemSelection={itemSelection} // Pass item selection handler function to DropDown component
					/>
				)}
			</button>
		</>
	);
};

export default ListOfCategoryItems;
