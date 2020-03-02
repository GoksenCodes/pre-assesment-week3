import React from "react";
import ContactInfo from "../components/ContactInfo";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <ContactInfo />
      <button>
        <Link to={"/doctorSchedule"}>Who is on duty?</Link>
      </button>
      <button>
        <Link to={"/patientSignup"}>I'm a new patient</Link>
      </button>
    </div>
  );
}
