import React, { useEffect, useState } from "react";

type DropDownProps = {
  items: string[]; // An array of string items to display in the dropdown
  showDropDown: boolean; // A flag indicating whether the dropdown should be shown or hidden
  toggleDropDown: () => void; // A function to toggle the dropdown on or off
  itemSelection: (category: string) => void; // A function to handle when an item is selected from the dropdown
};

const Dropdown: React.FC<DropDownProps> = ({
  items,
  itemSelection,
}: DropDownProps): JSX.Element => {
  // state variable to track whether the dropdown is shown or hidden
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (category: string): void => {
    itemSelection(category);
  };

  // Update the state of the dropdown based on the showDropDown prop
  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className="absolute top-14 w-full z-10 text-center border rounded-xl bg-[#131311]">
        {/* Map over the items passed as props and render them in the dropdown */}
        {items.map((item: string, index: number): JSX.Element => {
          return (
            <p
              className="mb-2 mt-2"
              key={index}
              onClick={(): void => {
                // Call the itemSelection function when an item is clicked
                onClickHandler(item);
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
