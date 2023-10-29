import Menu from "./Menu";

// Define the shape of the IMenu interface, specifying the expected props
interface IMenu {
	menu: boolean; // Boolean flag to identify menu state (open/closed)
	handleOnClick: () => void; // Function to handle click events on the menu button
}

const BurgerMenu = ({ menu, handleOnClick }: IMenu) => {
	// Define a dynamic CSS class for the menu container based on the 'menu' prop
	const menuContainerClass = `bg-[#131311] fixed lg:hidden -top-5 right-0 z-10 flex flex-col justify-start items-center w-full h-fit ${
		menu ? "translate-y-1/2" : "-translate-y-[150%]"
	} rounded-bl-xl transition ease-in-out shadow-lg`;

	return (
		<>
			<div className={menuContainerClass}>
				{/* Render the Menu component and pass the 'menu' and 'handleOnClick' props */}
				<Menu handleOnClick={handleOnClick} menu={menu} />
			</div>
		</>
	);
};

export default BurgerMenu;
