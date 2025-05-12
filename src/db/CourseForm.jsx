import React, { useState } from "react";
import { uploadFile } from "../db/uploadFile";
import { supabase } from "../config/supabaseClient";

function CourseForm() {
  const [course, setCourse] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    if (e.target.name === "url") {
      const file = e.target.files[0];
      if (!file) {
        console.error("No file selected");
        return;
      }
      setUrl(file);
    } else {
      setCourse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    if (!url) {
      console.error("No file selected for upload");
      setError("Please select a file to upload.");
      return;
    }
    e.preventDefault();
    const file = await uploadFile(url);

    const courseData = { ...course, url: file }; // Include the uploaded URL in the course data
    const { data, error } = await supabase.from("courses").insert([courseData]);
    if (error) {
      console.error("Error uploading course:", error.message);
    } else {
      console.log("Course uploaded successfully:", data);
    }

    e.target.reset(); // Reset the form after submission
    setCourse(null); // Clear the course state
  };

  const updateCourses = () => {};

  return (
    <div className="course-form">
      <div className="course-form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>UPLOAD NEW COURSE</h2>
          <div className="form-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Course title"
            />
            <input
              onChange={handleChange}
              type="text"
              name="code"
              placeholder="Course code"
            />
            <input
              onChange={handleChange}
              type="file"
              name="url"
              accept="application/pdf"
            />
            <textarea
              onChange={handleChange}
              name="description"
              placeholder="Course description"
            ></textarea>
            <button className="submit-form">Upload Course Data</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;
