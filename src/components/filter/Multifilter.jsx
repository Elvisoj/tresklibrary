import "./filter.css";
import FilterHandler from "./FilterHandler";

function Multifilter({ setCourses, institutes, courseTitle, courseCode }) {
  return (
    <div className="multifilter">
      <div className="multifilter-wrapper">
        <FilterHandler
          setCourses={setCourses}
          institutes={courseCode}
          title="course code"
        />
      </div>
    </div>
  );
}

export default Multifilter;
