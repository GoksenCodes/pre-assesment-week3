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
    <div>
      <ul>
        <li>id: {props.id}</li>
        <li>name: {props.firstName}</li>
        <li>surname: {props.lastName}</li>
        <li>birthday:{props.dateOfBirth}</li>
        <button onClick={handleClick}>See details</button>
        {show && ( //state is now true and we are saying let's bring this text
          <div>
            <li>gender: {props.gender}</li>
            <li>phone number: {props.phoneNumber}</li>
            <li>email: {props.email}</li>
            <li>precriptions: {props.prescriptions}</li>
          </div>
        )}
      </ul>
    </div>
  );
}
