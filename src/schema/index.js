import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string().matches(
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
  address2: Yup.string()
    .max(50, "Apartment/suite number is too long")
    .nullable()
    .required("Aprtment is required"),
  city: Yup.string().min(4).max(25).required("City is required"),
  state: Yup.string().min(3).max(15).required("State is required"),
  postcode: Yup.number().required("Postcode number is required"),
});

export const newsletterSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const cardFormSchema = Yup.object().shape({
  nameOnCard: Yup.string().required("Name on card is required"),
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, "Only 16 numeric values are allowed")
    .required("Card number is required"),
  month: Yup.string().required("Expiration month is required"),
  year: Yup.string().required("Expiration year is required"),
  cvv: Yup.string()
    .matches(/^[0-9]+$/, "Only numeric values are allowed")
    .length(3, "CVV must be 3 digits")
    .required("CVV is required"),
  terms: Yup.boolean(),
});
