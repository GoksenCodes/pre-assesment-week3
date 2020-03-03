import React, { useState, useEffect } from "react";
import Patient from "../components/Patient";
import axios from "axios";

export default function PatientDatabasePage() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(99);

  function handleChange(event) {
    setSelectedDoctor(event.target.value);
  }

  const getPatients = async doctorId => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );
    const patientList = response.data;
    console.log(doctorId);

    console.log(filteredPatients);
    setPatients(filteredPatients);
  };
  getPatients(doctorId);
  // console.log(response.data);

  // sortedPatients = [...patients].sort(SortByLastName);
  // setPatients(sortedPatients);

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

  const filteredPatients = patientList.filter(patient => {
    if (patient.doctorId == selectedDoctor) {
      return patient;
    } else if (doctorId == 99) {
      return true;
    } else {
      return false;
    }
  });
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
            key={index}
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
