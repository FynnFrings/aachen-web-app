import HamburgerMenu from "../../public/menu.svg";
import Image from "next/image";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const BurgerMenu = () => {
  const [menu, setMenu] = useState(false);

  function handleOnClick() {
    setMenu(true);
  }
  return (
    <>
      <button onClick={handleOnClick}>
        <Image src={HamburgerMenu} alt="menu" width={40} height={40} />
      </button>
      {menu ? <Menu menu={menu} setMenu={setMenu} /> : ""}
    </>
  );
};

export default BurgerMenu;
