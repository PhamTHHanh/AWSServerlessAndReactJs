import React, { useState } from "react";

function InputItem({ attribute, title, placeholder, onChange }) {
  return (
    <>
      <div>
        <strong>{title}</strong>
      </div>
      <input
        className="input-normal"
        placeholder={placeholder}
        onChange={(e) => onChange(attribute, e.target.value)}
      ></input>
    </>
  );
}
// Function component using function keyword
export default function Form(props) {
  const [age, setAge] = useState(42);

  function handleClick() {
    setAge((prevAge) => prevAge + 1); // setAge(42 => 43)
    setAge((prevAge) => prevAge + 1); // setAge(43 => 44)
    setAge((prevAge) => prevAge + 1); // setAge(44 => 45)
  }

  return (
    <div className="form">
      <InputItem
        attribute="lastName"
        title="Last name"
        placeholder="Enter your last name"
        onChange={(key, value) => props.updateProfile(key, value)}
      />
      <InputItem
        attribute="firstName"
        title="First name"
        placeholder="Enter your first name"
        onChange={(key, value) => props.updateProfile(key, value)}
      />
      <InputItem
        attribute="email"
        title="Email"
        placeholder="Enter your email"
        onChange={(key, value) => props.updateProfile(key, value)}
      />
    </div>
  );
}
