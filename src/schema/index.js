import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  number: Yup.string().matches(
    /^[0-9]{10}$/,
    "Please enter valid phone number"
  ),
});

export const logInSchema = Yup.object({
  email: Yup.string()
    .required("Please enter your email or phone number")
    .matches(
      /^(?:\d{10})$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email or phone number"
    ),
});

export const addressSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required("Please enter your name"),
  number: Yup.string().matches(/^[0-9]{10}$/, "Phone Number must be 10 digits"),
  address: Yup.string().required("Address is required"),
  apartment: Yup.string()
    .max(50, "Apartment/suite number is too long")
    .nullable(),
  city: Yup.string().min(4).max(25).required("City is required"),
  postcode: Yup.number().required("Postcode number is required"),
});
