import { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import TutorCard from './TutorCard';
// import WelcomeUser from "./WelcomeUser";

function SearchTutor() {
  const tutors = [
    {
      name: "Basanta Rai",
      qualification: "Mathematics",
      bio: "Specializes in calculus, linear algebra, and mathematical problem-solving for all levels.",
      rate: 30,
      rating: 4.8,
      avatar: "",
    },
    {
      name: "Dinesh Singh",
      qualification: "English",
      bio: "Passionate about helping students excel in English and Communication skills.",
      rate: 25,
      rating: 4.9,
      avatar: "",
    },
    {
      name: "Dinesh Tiwari",
      qualification: "Computer Science",
      bio: "Expert in AI, Data Science, and Programming. Let's ace your coding journey together.",
      rate: 40,
      rating: 5.0,
      avatar: "",
    },
    {
      name: "Bikram singh",
      qualification: "Computer Science",
      bio: "Expert in AI, Data Science, and Programming. Let's ace your coding journey together.",
      rate: 40,
      rating: 5.0,
      avatar: "",
    },
    {
      name: "Bikram rathore",
      qualification: "Computer Science",
      bio: "Expert in AI, Data Science, and Programming. Let's ace your coding journey together.",
      rate: 40,
      rating: 5.0,
      avatar: "",
    },
  ];

  const [selectedLevel, setSelectedLevel] = useState('');

  const levels = [
    "Primary (Class 1-5)",
    "L Secondary (Class 6-8)",
    "Secondary (Class 9-10)",
    "H Secondary (Class 11-12)",
    "Bachelor Degree",
    "Masters Degree"
  ];

  return (
    <div className="MainContainer">
      <Header />
      <div className="bg-white p-8">
        {/* <WelcomeUser/> */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-blue-600 mb-5">
              Your journey to better learning starts here.
            </h1>
            <div className="search-box flex flex-col md:flex-row gap-4 mb-5">
              <input
                type="text"
                placeholder="Search the subject"
                className="input input-bordered input-lg w-full max-w-xs focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Search location"
                className="input input-bordered input-lg w-full max-w-xs focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={selectedLevel}
                onChange={e => setSelectedLevel(e.target.value)}
                className="select select-bordered select-lg w-full max-w-xs bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <button className="btn btn-red btn-lg">Search</button>
            </div>
          </div>
          <div className="flex-1 hidden md:block"></div>
        </div>
        <hr className="my-4" />
        <div className="tutor-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutors.map(tutor => (
            <TutorCard key={tutor.name} tutor={tutor} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchTutor;
