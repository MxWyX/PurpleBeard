import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import TextFeild from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import "./formStyle.css";

const Form = () => {
  const onSubmit = (value, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  let { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      age: 0,
      email: "",
      addres: "",
      narration: "",
    },
    onSubmit,
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fName"></label>
        {errors.fName && <p className="error">{errors.fName}</p>}
        <TextFeild
          placeholder="First Name"
          name="fName"
          id="fName"
          value={values.fName}
          className={errors.fName ? "input-error" : ""}
          onChange={handleChange}
        />
        <label htmlFor="lName"></label>
        {errors.lName && <p className="error">{errors.lName}</p>}
        <TextFeild
          placeholder="Last Name"
          name="lName"
          id="lName"
          value={values.lName}
          className={errors.lName ? "input-error" : ""}
          onChange={handleChange}
        />
        <div className="slider">
          <label htmlFor="age"></label>
          {errors.age && <p className="error">{errors.age}</p>}
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            type="number"
            name="age"
            id="age"
            value={values.age}
            className={errors.age ? "input-error" : ""}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="email"></label>
        {errors.email && <p className="error">{errors.email}</p>}
        <TextFeild
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className={errors.email ? "input-error" : ""}
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="address"></label>
        {errors.address && <p className="address">{errors.address}</p>}
        <TextFeild
          type="textarea"
          placeholder="Address"
          name="address"
          id="address"
          className={errors.address ? "input-error" : ""}
          value={values.address}
          onChange={handleChange}
        />
        <label htmlFor="country">Country :</label>
        {errors.country && <p className="country">{errors.country}</p>}
        <select
          placeholder="country"
          name="country"
          id="country"
          className={errors.country ? "input-error" : ""}
          value={values.country}
          onChange={handleChange}
        >
          <option name="somewhere" id="somewhere">
            Some Where
          </option>
          <option name="nowhere" id="nowhere">
            No Where
          </option>
          <option name="wherewolf" id="wherewolf">
            Where Wolf
          </option>
          <option name="westchina" id="westchina">
            West China
          </option>
        </select>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Form;
