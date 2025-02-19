import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.png";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaBars,
  FaCartArrowDown,
  FaHome,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserAlt,
} from "react-icons/fa";

function AppNav() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userData = JSON.parse(localStorage.getItem("user"));
  function check() {
    if (!userData) {
      return (
        <Button
          as={Link}
          to="login"
          onClick={() => check()}
          className="app-nav__btn">
          <FaSignInAlt />
        </Button>
      );
    } else if (userData) {
      if (userData.position === "admin") {
        return (
          <>
            <Link
              className="app-nav__link pe-1 d-flex align-items-center"
              to="admin">
              Admin
            </Link>
            <Button
              to="login"
              as={Link}
              onClick={function () {
                localStorage.clear();
                check();
                navigate("/login");
              }}
              className="app-nav__btn">
              <FaSignOutAlt />
            </Button>
          </>
        );
      } else {
        return (
          <>
            <Link className="app-nav__link pe-1" to="courses">
              Courses
            </Link>
            <p className="nav-link app-nav__link pe-1 d-flex align-items-center m-0">
              {userData.firstname} <FaUserAlt className="ps-1" /> <span></span>
            </p>
            <Button
              to="login"
              as={Link}
              onClick={function () {
                localStorage.clear();
                check();
                navigate("/login");
              }}
              className="app-nav__btn">
              <FaSignOutAlt className="ps-1" />
            </Button>
          </>
        );
      }
    }
  }
  useEffect(() => {
    check();
  });
  return (
    <Navbar className="main-nav mb-2" sticky="top" expand="lg">
      <Container className="d-flex justify-content-between">
        <Link
          to="/"
          className="d-flex align-items-center justify-content-between navbar-brand">
          <img className="nav-logo img-fluid" src={logo} alt="logo" />
          <div className="d-flex flex-column align-itmes-center justify-content-center text-center app-nav__container text-light">
            <p className="m-0">Tech</p>
            <p className="m-0">Learning</p>
          </div>
        </Link>
        <div className="nav-links__container d-flex justify-content-evenly align-items-center w-50 d-none d-lg-flex">
          <Link to="/" className="app-nav__link">
            Home
          </Link>
          <Link to="cart" className="app-nav__link position-relative me-1">
            Cart
            <p className="cart-length position-absolute">{cart.length}</p>{" "}
            <span></span>
          </Link>
          {check()}
        </div>
        <div className="d-block d-lg-none">
          <Button
            variant="primary"
            onClick={handleShow}
            className="app-nav__btn">
            <FaBars />
          </Button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            className="ofcanvas-set text-white">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className="d-flex align-items-center justify-content-between navbar-brand">
                  <img className="nav-logo img-fluid" src={logo} alt="logo" />
                  <div className="d-flex flex-column align-itmes-center justify-content-center text-center app-nav__container text-light">
                    <p className="m-0">Tech</p>
                    <p className="m-0">Learning</p>
                  </div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="g-4">
                <Link to="/" className=" nav-link app-nav__link my-4">
                  Home <span></span>
                </Link>
                <Link
                  to="cart"
                  className="text-white nav-link app-nav__link my-4">
                  Cart- {cart.length} <FaCartArrowDown /> <span></span>
                </Link>
                {check()}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNav;
