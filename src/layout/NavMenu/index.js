import React, { useState } from "react";
import NavItem from "./elements/NavItem";

function NavMenu({ data }) {
  const [show, setShow] = useState({
    0: false,
    1: false,
    2: false
  });
  return (
    <ul>
      {data.map((item) => (
        <NavItem key={item.id} {...item} show={show} setShow={setShow} />
      ))}
    </ul>
  );
}

export default NavMenu;
