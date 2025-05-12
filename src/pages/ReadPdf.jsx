import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../pdfpreview.css";
import Pdfs from "../components/pdf/Pdfs";
import { UseAccountContext } from "../config/AccountContext";
import fetchCourses from "../config/fetchCourses";

function ReadPdf() {
  const { courses } = UseAccountContext();
  const SourceRef = useRef();
  const { pdfId } = useParams();
  const [pdfData, setPdfData] = useState(() =>
    courses.find((course) => course.id === pdfId)
  );

  useEffect(() => {
    if (!courses) {
      fetchCourses();
    }
    setPdfData(() => courses.find((course) => course.id === pdfId));
  }, [pdfId]);

  return (
    <div className="read-pdf">
      <div className="container">
        <div className="preview">
          <h1 className="title">{pdfData.title}</h1>
          <h3 className="institute">{pdfData.institute}</h3>
          <h3 className="course-code">{pdfData.code}</h3>
          <a
            href={pdfData.url}
            className="download-btn btn"
            download={`${pdfData.title}${pdfData.code}.pdf`}
          >
            Download File
          </a>
          <embed
            ref={SourceRef}
            src={pdfData.url}
            type="application/pdf"
            width="100%"
            height="80%"
          />
        </div>

        <Pdfs courses={courses} />
      </div>
    </div>
  );
}

export default ReadPdf;
