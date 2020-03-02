import React, { useState, useEffect } from "react";
import Patient from "../components/Patient";
import axios from "axios";
import Doctor from "../components/Doctor";

export default function PatientDatabasePage() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  function handleChange(event) {
    const search = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      const patientList = response.data;

      const filteredPatients = patientList.filter(patient => {
        if (patient.doctorId == doctorId) {
          return patient;
        }
      });
      console.log(filteredPatients); //how to display it
    };
    const doctorId = event.target.value;
    search();
    // console.log(response.data);
  }

  // useEffect(() => {
  //   search();
  // }, []);

  const getDoctors = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );

    setDoctors(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div>
      <h4>Patient Database</h4>
      <select onChange={handleChange}>
        <option>Choose a doctor</option>
        {doctors.map(doctor => (
          <option value={doctor.id}>{doctor.doctor}</option>
        ))}
      </select>
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
