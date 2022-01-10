import NavMenu from "./layout/NavMenu";
import "./styles.css";

export default function App() {
  return <NavMenu data={data} />;
}

const data = [
  { id: 0, title: "Home", subMenu: false },
  {
    id: 1,
    title: "About",
    subMenu: [
      { id: 1.1, title: "Hobbies" },
      { id: 1.2, title: "Skills" }
    ]
  },
  {
    id: 2,
    title: "Services",
    subMenu: [
      {
        id: 2.1,
        title: "Webdesign"
      },
      { id: 2.2, title: "Javascript" }
    ]
  }
];
