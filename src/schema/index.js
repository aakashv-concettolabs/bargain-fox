import * as Yup from "yup";


export  const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    both: Yup.string()
    .required("Please enter your email or phone number")
    .matches(
      /^(?:\d{10})$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email or phone number"
    ),
    number: Yup.number().required("Please enter valid phone number")
   
})

export const logInSchema = Yup.object({
    both: Yup.string()
    .required("Please enter your email or phone number")
    .matches(
      /^(?:\d{10})$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email or phone number"
    ),
})