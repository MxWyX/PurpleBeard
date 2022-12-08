import React from "react";
import { useState } from "react";
import "../App.css";
import { useFormik } from "formik";
import { basicValidation } from "../Schema/validation";
import { useEffect } from "react";

const BasicForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    const obj = {
      userEmail: values.email,
      userAge: values.age,
      userPassword: values.password,
    };
    console.log(obj);
    actions.resetForm();
  };

  let { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: 0,
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicValidation,
    onSubmit,
  });



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          value={values.email}
          className={errors.email ? "input-error" : ""}
          onChange={handleChange}
        />

        <label htmlFor="age">Age</label>
        {errors.age && <p className="error">{errors.age}</p>}

        <input
          type="number"
          placeholder="age"
          name="age"
          id="age"
          value={values.age}
          className={errors.age ? "input-error" : ""}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className={errors.password ? "input-error" : ""}
          value={values.password}
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <input
          type="password"
          placeholder="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          className={errors.confirmPassword ? "input-error" : ""}
          value={values.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default BasicForm;
