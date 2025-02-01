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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKENDAPI);
        setStudentData(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error.response?.data?.message || 
          "Failed to fetch data. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-neutral-900">
        <div className="text-lg font-light text-neutral-400 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-neutral-900 gap-4">
        <div className="text-xl font-light text-red-400">
          {error}
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-neutral-800 text-neutral-200 rounded-md hover:bg-neutral-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 min-h-screen">
      <NavBar socials={studentData?.socials} />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <AboutMe aboutme={studentData?.aboutme} />
        <Hobbies hobbies={studentData?.hobbies} />
        <AcademicBackground academics={studentData?.academics} />
        <Passion passion={studentData?.passion} />
        <Skills skills={studentData?.skills} />
      </div>
      <div className="text-neutral-400 font-semibold flex justify-center pb-2 items-center text-sm">Made with 💓 by <span className="text-white animate-pulse">&nbsp;⭐Devansh⭐</span></div>
    </div>
  );
}

export default App;