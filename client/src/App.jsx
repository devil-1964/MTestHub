import { useState, useEffect } from "react";
import axios from "axios";
import AboutMe from "./pages/AboutMe";
import NavBar from "./pages/NavBar";
import Hobbies from "./pages/Hobbies";
import AcademicBackground from "./pages/AcademicBackground";
import Skills from "./pages/Skills";
import Passion from "./pages/Passion";

function App() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKENDAPI)
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!studentData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="container mx-auto p-6">
        <AboutMe aboutme={studentData.aboutme} />
        <Hobbies hobbies={studentData.hobbies} />
        <AcademicBackground academics={studentData.academics} />
        <Passion passion={studentData.passion} />
        <Skills skills={studentData.skills} />
      </div>
    </div>
  );
}

export default App;