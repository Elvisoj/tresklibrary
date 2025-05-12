import Homepage from "./pages/Homepage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Materials from "./pages/Materials";
import PastQuestion from "./pages/PastQuestion";
import About from "./pages/About";
import ReadPdf from "./pages/ReadPdf";
import Dashboard from "./pages/Dashboard";
import CourseForm from "./db/CourseForm";
import ManageCourse from "./db/ManageCourse";
import { UseAccountContext } from "./config/AccountContext";
import { useEffect } from "react";

function App() {
  const { session, footerRef, headerRef } = UseAccountContext();
  useEffect(() => {
    if (!session) {
      footerRef.current.style.display = "none";
      headerRef.current.style.display = "none";
    } else {
      footerRef.current.style.display = "block";
      headerRef.current.style.display = "block";
    }
  }, [session]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/preview/:pdfId" element={<ReadPdf />} />
        <Route path="/pq" element={<PastQuestion />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard/add" element={<CourseForm />} />
        <Route path="/admin/dashboard/manage" element={<ManageCourse />} />
        <Route path="*" element={<h2>Page Not found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
