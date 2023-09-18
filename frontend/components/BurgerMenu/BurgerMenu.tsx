import Menu from "./Menu";

interface IMenu {
	menu: boolean; // boolean flag to identify menu state (open/closed)
	handleOnClick: () => void; // function to handle click events on menu button
}

const BurgerMenu = ({ menu, handleOnClick }: IMenu) => {
	const menuContainerClass = `bg-[#131311] fixed lg:hidden top-6 right-0 z-10 flex flex-col justify-start items-center w-full h-fit ${
		menu ? "translate-y-1/2" : "-translate-y-[150%]"
	} rounded-bl-xl transition ease-in-out shadow-lg`;

	return (
		<>
			<div className={menuContainerClass}>
				<Menu handleOnClick={handleOnClick} menu={menu} />
			</div>
		</>
	);
};

export default BurgerMenu;
