import React, { useState } from "react";

export default function PatientSignUpPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setName(event.target.value);
    console.log(name);
  }

  return (
    <div>
      <h3>Patient Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="username" name="username" type="text" />
        <br />
        <label>Surname</label>
        <input id="name" name="surname" type="text" />
        <br />
        <label>Email</label>
        <input id="email" name="email" type="email" />
        <br />
        <label>Phone</label>
        <input id="phhone" name="phone" type="number" />
        <br />
        <label>Gender</label>
        <select>
          <option>select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Birthday</label>
        <input type="date" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
