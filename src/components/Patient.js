import React from "react";

export default function Patient(props) {
  return (
    <div>
      {props.name}
      {props.surname}
      {props.id}
      {props.dateOfBirth}
      {props.gender}
      {props.prescriptions}
    </div>
  );
}
