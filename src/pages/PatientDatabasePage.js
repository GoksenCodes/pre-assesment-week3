import React, { useState, useEffect } from "react";
import Patient from "../components/Patient";
import axios from "axios";

export default function PatientDatabasePage() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(99);

  useEffect(() => {
    getDoctors();
    getPatients();
  }, []);

  const handleChange = event => {
    const doctorId = event.target.value;
    setSelectedDoctorId(doctorId);
  };

  const getDoctors = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );
    setDoctors(response.data);
    // console.log(response.data);
  };
  const getPatients = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );
    setPatients(response.data);
    // console.log(response.data);
  };

  const SortByLastName = (filteredPatientA, filteredPatientB) => {
    //it needs to sort after fetching data, fetchinda data takes time
    return filteredPatientA.lastName.localeCompare(filteredPatientB.lastName);
  };

  const sortedPatients = patients.length // we are checking if the fetching is completed here.
    ? [...patients].sort(SortByLastName)
    : [];

  const filteredPatients =
    parseInt(selectedDoctorId) === 99
      ? sortedPatients
      : sortedPatients.filter(patient => patient.doctorId == selectedDoctorId);

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
      {filteredPatients.map((patient, index) => {
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
