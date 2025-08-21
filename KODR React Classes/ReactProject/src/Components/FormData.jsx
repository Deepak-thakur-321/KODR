import React, { useState } from "react";

const FormData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  console.log(name, email, number);

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter Your Name"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Enter your Email"
      />
      <input
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        type="number"
        placeholder="Enter your Number"
      />
    </div>
  );
};

export default FormData;
