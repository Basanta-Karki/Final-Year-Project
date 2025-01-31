import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from "./Components/Login";
import SearchTutor from "./Components/SearchTutor";
import SignupForm from "./Components/SignupForm";
import EmailVerify from "./Components/EmailVerify";
import ResetPassword from "./Components/ResetPassword";

import RegistrationPortal from "./Components/TutorDetails/RegistrationPortal";
import Dashboard from './Components/Admin/Dashboard'
import TutorProfile from './Components/Admin/ViewProfile'


function App() {
  return (
    <div className="main">
    <ToastContainer/>
    <Router>
      {" "}
      {/* Router component to provide navigation functionality */}
      <div>
        {" "}
        {/* Main container for all routes */}
        
        <Routes>
          <Route path="/" element={<SearchTutor />} />         
          <Route path="/login" element={<Login />} />        
          <Route path="/SignupForm" element={<SignupForm />} />       
          <Route path="/verify-email" element={<EmailVerify />} />       
          <Route path="/ResetPassword" element={<ResetPassword />} />       
          {/* <Route path="/tutorform" element={<Tutorform />} />        */}      
          <Route path="/form" element={<RegistrationPortal />} />       
          <Route path="/admin" element={<Dashboard />} />       
          <Route path="/profile" element={<TutorProfile />} />       
          {/* <Route path="/onboarding" element={<TutorProfile />} />     */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;







