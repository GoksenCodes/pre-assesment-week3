import React, { useState } from "react";

export default function PatientSignUpPage() {
  const [values, setValues] = useState({
    // we use name HTML attribute as a uniq key to construct our state object, we can also use id for this as well
    username: "",
    surname: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: ""
  });

  function handleChange(event) {
    //this function runs on every key press
    // console.log(event.target);
    // console.log(event.target.value);
    // console.log(event.target.name);
    const name = event.target.name; // in order to understand which input(email/phone/name..) we define name to be able to select correct key in  our state
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(event) {
    //this functions runs only if submit ic clicked
    event.preventDefault();
    console.log(values); // this is teh update version of values , it is updated by setValues in the above function
  }

  return (
    <div>
      <h3>Patient Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          onChange={handleChange}
          id="username"
          name="username"
          type="text"
          value={values.username}
        />
        <br />
        <label>Surname</label>
        <input onChange={handleChange} id="name" name="surname" type="text" />
        <br />
        <label>Email</label>
        <input onChange={handleChange} id="email" name="email" type="email" />
        <br />
        <label>Phone</label>
        <input
          onChange={handleChange}
          id="phone"
          name="phone"
          type="phonenumber"
        />
        <br />
        <label>Gender</label>
        <select onChange={handleChange} name="gender">
          <option>select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Birthday</label>
        <input onChange={handleChange} name="dateOfBirth" type="date" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
