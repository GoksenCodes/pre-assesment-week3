import React, { useState, useEffect } from "react";
import ContactInfo from "../components/ContactInfo";
import axios from "axios";
import Doctor from "../components/Doctor";

export default function OnDutyPage() {
  const [status, setStatus] = useState("");
  const [doctors, setDoctors] = useState([]);

  const search = async () => {
    setStatus("loading");

    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );

    setDoctors(response.data);

    console.log(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Doctor</th>
          <th>Availability</th>
        </tr>
        {doctors.map(doctor => (
          <tr>
            <td>{doctor.doctor}</td>
            {doctor.onDuty === true ? <td> on duty </td> : <td>off duty</td>}
          </tr>
        ))}
      </table>
      <ContactInfo />
    </div>
  );
}
