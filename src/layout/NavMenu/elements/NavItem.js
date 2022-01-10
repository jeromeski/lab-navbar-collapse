import React, { useEffect } from "react";

function NavItem(props) {
  const { id, title, subMenu, show, setShow } = props;
  let controlId = 0;

  const handleClick = (e) => {
    // console.log(e.currentTarget);
    if (controlId === 0) {
      controlId = 1;
      // console.log("Submenu slides down", controlId, e.currentTarget.id);

      // console.log(id);
      setShow((prev) => prev, { [id]: true });

      return;
    } else if (controlId === 1 && e.currentTarget.id === id.toString()) {
      controlId = 0;
      // console.log("Submenu slides up", controlId, e.currentTarget.id);
      // console.log(id);
      return;
    }
  };
  useEffect(() => {
    console.log(show);
  }, [show]);
  return (
    <li
      className={`show.${id}` ? "expanded" : ""}
      key={id}
      onClick={handleClick}
      id={id}
    >
      <a>{title}</a>
      <ul>
        {subMenu && subMenu.map((sub) => <li key={sub.id}>{sub.title}</li>)}
      </ul>
    </li>
  );
}

export default NavItem;
