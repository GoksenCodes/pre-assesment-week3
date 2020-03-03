import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand{-sm|-md|-lg|-xl}">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/doctorSchedule">Doctor Schedule</NavLink>

        <NavLink to="/patientSignUp">Patient Signup</NavLink>

        <NavLink to="/patientDatabase">Patient Database</NavLink>
      </nav>
    </div>
  );
}
