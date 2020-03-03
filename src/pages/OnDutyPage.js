import React, { useState, useEffect } from "react";
import ContactInfo from "../components/ContactInfo";
import axios from "axios";

export default function OnDutyPage() {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);

  const search = async () => {
    setLoading(true);

    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );

    setDoctors(response.data);
    setLoading(false);
    console.log(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading!</p>
        <ContactInfo />
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.doctor}</td>
              {doctor.onDuty === true ? <td> on duty </td> : <td>off duty</td>}
            </tr>
          ))}
        </table>
        <ContactInfo />
      </div>
    );
  }
}
// key={index} to get rid of the key warning. we give it as an argument in mapping and give it to the firs element after HTML
