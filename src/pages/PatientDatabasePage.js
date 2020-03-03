import React, { useState, useEffect } from "react";
import Patient from "../components/Patient";
import axios from "axios";
import Doctor from "../components/Doctor";

export default function PatientDatabasePage() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  function handleChange(event) {
    const doctorId = event.target.value;

    const getDoctor = async doctorId => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      const patientList = response.data;
      console.log(doctorId);
      const filteredPatients = patientList.filter(patient => {
        if (patient.doctorId == doctorId) {
          return patient;
        }
      });
      console.log(filteredPatients);
      setPatients(filteredPatients);
    };
    getDoctor(doctorId);
    // console.log(response.data);

    // sortedPatients = [...patients].sort(SortByLastName);
    // setPatients(sortedPatients);
  }

  // useEffect(() => {
  //   search();
  // }, []);

  const getDoctors = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );

    setDoctors(response.data);
    // console.log(response.data);
  };

  const SortByLastName = (filteredPatientA, filteredPatientB) => {
    //it needs to sort after fetching data, fetchinda data takes time
    return filteredPatientA.lastName.localeCompare(filteredPatientB.lastName);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const sortedPatients = patients.length // we are checking if the fetching is completed here.
    ? [...patients].sort(SortByLastName)
    : [];
  return (
    <div>
      <h4>Patient Database</h4>
      <select onChange={handleChange} name="doctors">
        <option value={99}>Choose a doctor</option>
        {doctors.map(doctor => (
          <option value={doctor.id}>{doctor.doctor}</option>
        ))}
      </select>
      {sortedPatients.map(patient => {
        return (
          <Patient
            key={patient.id}
            id={patient.id}
            firstName={patient.firstName}
            lastName={patient.lastName}
            gender={patient.gender}
            dateOfBirth={patient.dateOfBirth}
            prescriptions={patient.prescriptions}
          />
        );
      })}
    </div>
  );
}
