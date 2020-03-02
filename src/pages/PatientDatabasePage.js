import React, { useState, useEffect } from "react";
import Patient from "../components/Patient";
import axios from "axios";

export default function PatientDatabasePage() {
  const [patients, setPatients] = useState([]);

  const search = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );

    setPatients(response.data);

    console.log(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <h4>Patient Database</h4>;
      {patients.map(patient => {
        return (
          <Patient
            key={patient.id}
            id={patient.id}
            name={patient.firstName}
            surname={patient.lastName}
            gender={patient.gender}
            birthday={patient.dateOfBirth}
            prescriptions={patient.prescriptions}
            doctor={patient.doctorId}
          />
        );
      })}
    </div>
  );
}
