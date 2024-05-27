import React from "react";
import { Form } from "react-router-dom";

const ContactUs = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input></input>
        <label>Email Id </label>
        <input></input>
        <label>Phone No.</label>
        <input></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
