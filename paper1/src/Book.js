import React from "react";

export default function Book(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.author}</td>
      <td>{props.price}</td>
    </tr>
  );
}
