import React, { useState } from "react";
import { prototype } from "events";
import "../components/patients.css";

export default function Patient(props) {
  const [show, setShow] = useState(false);
  console.log(props);
  const [hide, setHide] = useState("Hide");

  const handleClick = () => {
    setShow(!show); // here the state is opposite of current state this !show is to e able to click showdetails again and hide teh info. () would be also enough to show details
  };

  return (
    <div className="list">
      <ul class="list-group">
        <li class="list-group-item">id: {props.id}</li>
        <li class="list-group-item">name: {props.firstName}</li>
        <li class="list-group-item">surname: {props.lastName}</li>
        <li class="list-group-item">birthday:{props.dateOfBirth}</li>
        <button onClick={handleClick}>See details</button>
        {show && ( //when state is true it checks thhe right side of && and if it's tru it executes it. If state is false it wouldn't check the right side of && it stops.
          <div>
            <li class="list-group-item">gender: {props.gender}</li>
            <li class="list-group-item">phone number: {props.phoneNumber}</li>
            <li class="list-group-item">email: {props.email}</li>
            <li class="list-group-item">precriptions: {props.prescriptions}</li>
          </div>
        )}
      </ul>
    </div>
  );
}
