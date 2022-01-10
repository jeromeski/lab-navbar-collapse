import React from "react";

function NavItem(props) {
  const { id, title, subMenu } = props;
  let controlId = 0;

  const handleClick = (e) => {
    if (controlId === 0) {
      console.log("Submenu slides down");
      controlId = 1;
      return;
    } else if (controlId === 1) {
      controlId = 0;
      console.log("Submenu slides up", controlId);

      return;
    }
  };
  return (
    <li key={id} onClick={handleClick}>
      <a>{title}</a>
      <ul>
        {subMenu && subMenu.map((sub) => <li key={sub.id}>{sub.title}</li>)}
      </ul>
    </li>
  );
}

export default NavItem;
