import * as yup from "yup";

// https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters
// min 8 letter password, with at least a symbol, upper and lower case letters and a number
const passwordRules = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicValidation = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().required("Required").positive().integer(),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
