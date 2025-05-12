import { UseAccountContext } from "../config/AccountContext";
import "./setting.css";

function Setting() {
  const { session } = UseAccountContext();
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="admin">
          <div className="admin-info">
            <div className="admin-name">{session.full_name}</div>
            <div className="admin-position">{session.position}</div>
          </div>
          <img src={session.url} />
        </div>
      </div>
    </div>
  );
}

export default Setting;
