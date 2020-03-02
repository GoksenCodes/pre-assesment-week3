import React from "react";

export default function Doctor(props) {
  return (
    <div>
      <table>
        <td>{props.doctor}</td>
        <td>available</td>
      </table>
    </div>
  );
}
