import { UseAccountContext } from "../../config/AccountContext";
import "./footer.css";

function Footer() {
  const { footerRef } = UseAccountContext();
  return (
    <div ref={footerRef} className="footer">
      <div className="container">
        <p className="copy-right">
          &copy; Copyright @ TRESK LIBERARY D MACHADEMI 2024 &reg;
        </p>
      </div>
    </div>
  );
}

export default Footer;
