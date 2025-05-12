import React from "react";
import courses from "../assets/files/courses.js";

function Table() {
  const handleDelete = (courseId) => {
    console.log(courseId);
  };
  const handleEdit = (courseId) => {
    console.log(courseId);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <td>S/N</td>
          <td>Title</td>
          <td>Code</td>
          <td>DW</td>
          <td className="control">Controls</td>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={course.id}>
            <td>{index < 10 ? `0${index + 1}` : index + 1}</td>
            <td>{course.title}</td>
            <td>{course.code}</td>
            <td>{course.downloads}</td>
            <td className="controls">
              <button onClick={() => handleEdit(course.id)}>EDIT</button>
              <button onClick={() => handleDelete(course.id)}>DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
