import React, { useState, useEffect } from "react";
import Patient from "../components/Patient";
import axios from "axios";

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
        } else if (doctorId == 99) {
          return true;
        } else {
          return false;
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
        <option value={99}>All Doctors</option>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.id}>
            {doctor.doctor}
          </option>
        ))}
      </select>
      {sortedPatients.map((patient, index) => {
        return (
          <Patient
            key={index} // STILL GET KEY WARNING!
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
