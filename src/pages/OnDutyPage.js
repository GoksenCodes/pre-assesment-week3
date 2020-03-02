import React, { useState, useEffect } from "react";
import ContactInfo from "../components/ContactInfo";
import axios from "axios";

export default function OnDutyPage() {
  const [status, setStatus] = useState("");
  const [doctors, setDoctors] = useState([]);

  const search = async () => {
    setStatus("loading");

    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );
    console.log(response);
    setDoctors(response.data);
    console.log(response.data);

    search();
  };

  return (
    <div>
      <table>
        <tr>
          <th>Doctor</th>
          <th>Availability</th>
        </tr>
        <tr>
          <td>Doctor X</td>
          <td>available</td>
        </tr>
      </table>
      <ContactInfo />
    </div>
  );
}

//{doctors.map(doctor => { <Doctor key={doctor.id} name={doctor.doctor}/> )})}
