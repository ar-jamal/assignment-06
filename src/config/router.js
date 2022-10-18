import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../screens/about";
import Contact from "../screens/contact";
import Dashboard from "../screens/dashboard";
import Home from "../screens/home";
import NotFound from "../screens/notfound";
import Profile from "../screens/profile";
import Service from "../screens/services";

export default function AppRouter() {
  return (
    <Router>
        <div>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
            <Link to='service'>Service</Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="profile/:userName" element={<Profile />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
