import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import MainHead from "./Components/MainHead/MainHead";
import AdminPanel from "./Components/Admin/Admin";
import { SharedStateProvider } from "./Components/Shared/Shared"; // Import the SharedStateProvider
import Cards from "./Components/Card/Card";
import Login from "./Components/Card/loginProtect";
import ProctedRoute from "./Components/Card/ProctedRoute";

function App() {
  return (
    <div className="App">
      <SharedStateProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainHead />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProctedRoute />} />
          
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/admin" element={<AdminPanel />} />
          <Route exact path="/cards" element={<Cards />} />
        </Routes>
      </Router>
      <Footer />

      {/* Wrap the following components with SharedStateProvider */}
      </SharedStateProvider>
    </div>
  );
}

export default App;
