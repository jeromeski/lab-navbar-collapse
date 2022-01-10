import React from "react";
import NavItem from "./elements/NavItem";

function NavMenu({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default NavMenu;
