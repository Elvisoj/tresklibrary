import React, { useEffect, useState } from "react";
import "../style/material.css";
import Pdfs from "../components/pdf/Pdfs";
import Multifilter from "../components/filter/Multifilter";
// import courses from "../assets/files/courses";
import { UseAccountContext } from "../config/AccountContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/filter/SearchBar";

function Materials() {
  const { session, courses } = UseAccountContext();
  const navigate = useNavigate();
  const [unFilteredPdf, setUnFilteredPdf] = useState(courses);
  const [courseCode, setCourseCode] = useState([]);

  useEffect(() => {
    if (unFilteredPdf | (unFilteredPdf !== undefined)) {
      setCourseCode([...new Set(unFilteredPdf.map((course) => course.code))]);
    }
  }, []);

  return (
    <div className="study-materials">
      <div className="container">
        {!unFilteredPdf | (unFilteredPdf === undefined) ? (
          <div className="pdf-files-not-found">
            No Available file at the moment.
          </div>
        ) : (
          <>
            <SearchBar />
            <Multifilter
              setCourses={setSelectedFiles}
              courseCode={courseCode}
            />
            <Pdfs />
          </>
        )}
      </div>
    </div>
  );
}

export default Materials;
