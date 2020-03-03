import React from "react";

export default function ContactInfo() {
  const today = new Date().getHours();

  // const time = parseInt(today.getHours() + ":" + today.getMinutes());

  let status;

  if (today >= 8 && today <= 17) {
    status = "open";
  } else {
    status = "closed";
  }

  return (
    <div>
      <p>
        We are : <strong>{status}</strong>
      </p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  );
}
