import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "../helpers/data";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required(),
});
function Login() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  let tempData = data.users;
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: mail,
      password: password,
      firstname: name,
      courses: [],
    };
    const temp = tempData.some((user) => {
      return user.firstname === name;
    });
    if (temp) {
      toast.error("mail already exsits");
    } else {
      body.id = Math.floor(Math.random() * (1 - 100)) + 1;
      tempData.push(body);
      navigate("/login");
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center text-white py-4">
      {/* <Form
        onSubmit={submitHandler}
        className="w-75 my-4 d-flex align-items-center justify-content-center flex-column">
        <h3>Sign Up</h3>
        <Form.Group className="mb-3" controlId="formBasiFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="app-nav__btn">
          Sign Up
        </Button>
        <div className="p-3 fw-bold">
          <Link to="/login" className="app-nav__link-color">
            have an acount ?
          </Link>
        </div>
      </Form> */}
      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values, "ssssssssssssssssssssssssssss");
          }}>
          {({ errors, touched }) => (
            <Form>
              <Field name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
