import React, { useState } from "react";

export default function PatientSignUpPage() {
  // const [data, setData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <div>
      <h3>Patient Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input />
        <br />
        <label>Surname</label>
        <input />
        <br />
        <label>Email</label>
        <input />
        <br />
        <label>Phone</label>
        <input />
        <br />
        <label>Gender</label>
        <select>
          <option>select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Birthday</label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
