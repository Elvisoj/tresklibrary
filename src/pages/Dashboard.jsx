import { use } from "react";
import assets from "../assets/assets";
import CourseForm from "../db/CourseForm";
import Table from "../db/Table";
import "../style/dashboard.css";
import { useNavigate } from "react-router-dom";
import Setting from "../db/Setting";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <Setting />
        <div className="boxes">
          <div className="box" onClick={() => navigate("/admin/dashboard/add")}>
            <img src={assets.plus_icon} />
            <p>ADD NEW COURSE</p>
          </div>

          <div
            className="box"
            onClick={() => navigate("/admin/dashboard/manage")}
          >
            <img src={assets.code_icon} />
            <p>MANAGE COURSE</p>
          </div>

          <div className="box">
            <img src={assets.gemini_icon} />
            <p>MANAGE COURSE</p>
          </div>

          <div className="box">
            <img src={assets.gemini_icon} />
            <p>MANAGE COURSE</p>
          </div>

          <div className="box">
            <img src={assets.gemini_icon} />
            <p>MANAGE COURSE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
