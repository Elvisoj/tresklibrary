import { UseAccountContext } from "../../config/AccountContext";
import Nav from "../navigation/Nav";
import "./header.css";

function Header() {
  const { headerRef } = UseAccountContext();
  return (
    <div ref={headerRef} className="header">
      <Nav />
    </div>
  );
}

export default Header;
