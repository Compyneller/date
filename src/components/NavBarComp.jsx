import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import logo from "../assets/oie_dkLNRDsfmxAM.png";
import GetItOnApple from "./GetItOnApple";
import GetItOnPlay from "./GetItOnPlay";
const NavBarComp = () => {
  const navigate = useNavigate();
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          sticky="top"
          expand={expand}
          className="mb-3 shadow-sm"
        >
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="" style={{ height: "6vh" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="" style={{ height: "6vh" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Services"
                    className="me-3"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ borderRadius: "0" }}
                  >
                    <NavDropdown.Item href="#action3">
                      Buy/Sell
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Referral Program
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Merchant
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      OTC Desk
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Help"
                    className="me-3"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/fees">Fees</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/what-is-bitcoin">
                      What is Bitcoin?
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/contact-us">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown>
                  <div className="d-flex" style={{ gap: "1rem" }}>
                    <GetItOnPlay />
                    <GetItOnApple />
                  </div>
                  {/* <Button
                    variant="outline-primary"
                    style={{ borderRadius: "0" }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    style={{ borderRadius: "0" }}
                    className="ms-2"
                    onClick={() => navigate("/otp")}
                  >
                    Sign Up
                  </Button> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBarComp;
