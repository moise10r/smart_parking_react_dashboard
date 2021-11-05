import React from "react";
import MenuList from "./common/menu-list";
import { GiShop } from "react-icons/gi";

const MainMenu = (props) => {
  const { ShowMenu } = props;

  return (
    <div
      className={
        ShowMenu === 0
          ? "none"
          : ShowMenu === 1
          ? "none"
          : ShowMenu === 2
          ? "none"
          : "none"
      }
    >
      <MenuList icon={<GiShop />} content="Dashboards" />
    </div>
  );
};

export default MainMenu;
