import { Container } from "react-bootstrap";
import Logo from "../logo.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <Container className=" py-3">
        <div className="footer__upper-footer d-flex justify-content-center py-3 pt-2">
          <div className="d-flex align-items-center justify-content-center navbar-brand">
            <img className="nav-logo img-fluid" src={Logo} alt="logo" />
            <div className="d-flex flex-column align-itmes-center justify-content-center text-center app-nav__container text-light">
              <p className="m-0">Tech</p>
              <p className="m-0">Learning</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom-footer d-flex py-3 align-items-center justify-content-between">
          <div className="text-white-50 w-25">
            © 2022, <span>Tech-Learning</span> - Courses Ecommerce Template All
            rights reserved
          </div>
          <div className="d-flex w-50 justify-content-around">
            <div className="third-nav__contact  d-flex align-items-top w-25">
              <div className="third-nav__icon w-25">
                <FaPhoneAlt />
              </div>
              <div className="third-nav__text ms-1 w-100">
                <p className="mb-0 text-white fw-bold">1900 - 6666</p>
                <p className="mb-0 second-p text-white-50">
                  Working 8:00 - 22:00
                </p>
              </div>
            </div>
            <div className="third-nav__contact  d-flex align-items-top  w-25">
              <div className="third-nav__icon w-25">
                <FaPhoneAlt />
              </div>
              <div className="third-nav__text ms-1 w-100">
                <p className="mb-0 text-white fw-bold">1900 - 888</p>
                <p className="mb-0 second-p text-white-50">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>
          <div className="w-25">
            <div className="d-flex align-items-center fs-6 justify-content-around">
              <span className="text-white">Follow Us</span>
              <div className="footer-contact d-flex justify-content-around w-50">
                <FaWhatsapp />
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="third-nav__text text-white-50 w-25">
            <p className="w-100 m-0 text-end">
              Up to <span> 15% </span> discount on your first subscribe
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
