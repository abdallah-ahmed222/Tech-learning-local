import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { data } from "../helpers/data";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: name,
      password,
    };
    console.log(body, "ssssssssssssssssssssssssssssssssssssssssssssssss");

    for (let i = 0; i < data.users.length; i++) {
      if (
        body.email === data.users[i].email &&
        body.password === data.users[i].password
      ) {
        localStorage.setItem("user", JSON.stringify(data.users[i]));
        navigate("/");
        toast.success(`Welcome Back ${data.users[i].firstname}`);
        break;
      }
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center text-white py-4">
      <Form
        onSubmit={submitHandler}
        className="w-75 my-4 d-flex align-items-center justify-content-center flex-column">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <Button variant="primary" type="submit" className="app-nav__btn">
          Sign In
        </Button>
        <div className="p-3">
          <Link to="/signup" className="app-nav__link-color">
            Don't have an acount
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
