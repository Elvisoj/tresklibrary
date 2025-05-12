import React, { useEffect } from "react";
import "./pdf.css";
import Pdf from "./Pdf";
import { UseAccountContext } from "../../config/AccountContext";
import fetchCourses from "../../config/fetchCourses";

function Pdfs() {
  const { courses, setCourses, searchTerm } = UseAccountContext();

  useEffect(() => {
    if (!courses) {
      fetchCourses(setCourses);
      console.error("Courses data is not available");
    }
  }, [courses, setCourses]);

  if (!courses | (courses === undefined))
    return (
      <div className="pdf-files-not-found">
        No Available file at the moment.
      </div>
    );
  return (
    <div className="pdf-files">
      {courses
        .filter((course) => {
          return searchTerm.toLowerCase() === ""
            ? course
            : course.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .map((course) => (
          <Pdf key={course.id} {...course} />
        ))}
    </div>
  );
}

export default Pdfs;
