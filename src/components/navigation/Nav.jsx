import React from "react";
import ListItem from "../ui/ListItem";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  const listData = [
    {
      classlist: `${pathname === "/" ? "list-item active" : "list-item"}`,
      context: "Home",
      path: "/",
      clickFxn: null,
    },
    {
      classlist: `${
        pathname === "/materials" ? "list-item active" : "list-item"
      }`,
      context: "Materials",
      path: "/materials",
      clickFxn: null,
    },
    {
      classlist: `${pathname === "/about" ? "list-item active" : "list-item"}`,
      context: "About",
      path: "/about",
      clickFxn: null,
    },
  ];

  return (
    <nav className="nav container">
      <Logo />
      <ListItem listData={listData} />
    </nav>
  );
}

export default Nav;
