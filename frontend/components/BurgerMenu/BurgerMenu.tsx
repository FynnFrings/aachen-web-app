import HamburgerMenu from "../../public/menu.svg";
import Image from "next/image";
import Menu from "./Menu";
import { useState } from "react";

const BurgerMenu = () => {
  const [menu, setMenu] = useState(false);

  function handleOnClick() {
    setMenu(!menu);
  }

  return (
    <div>
      {menu ? (
        ""
      ) : (
        <button onClick={handleOnClick}>
          <Image src={HamburgerMenu} alt="menu" width={40} height={40} />
        </button>
      )}
      {menu ? (
        <div>
          <Menu menu={menu} setMenu={setMenu} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BurgerMenu;
