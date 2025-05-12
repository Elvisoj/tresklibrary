import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";

function Pdf({ title, id, institute, code }) {
  const navigate = useNavigate();

  const handlePreview = (pdfId) => {
    navigate(`/materials/preview/${pdfId}`);
  };

  return (
    <div className="pdf-data-wrapper">
      <img src={assets.pdf_icon} className="pdf-icon" />
      <div className="pdf-info">
        <p className="course-title">{title + " - " + code}</p>
        <p className="institute">{institute}</p>
        <button
          onClick={() => handlePreview(id)}
          className="preview-pdf pdf-btn"
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default Pdf;
