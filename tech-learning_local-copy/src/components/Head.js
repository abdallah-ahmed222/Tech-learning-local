import React from "react";

export default function Head(props) {
  return (
    <>
      <h3 className="fw-bold text-center text-white main-name">{props.text}</h3>
    </>
  );
}
