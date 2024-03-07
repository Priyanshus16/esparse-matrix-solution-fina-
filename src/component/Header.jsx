import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router";
import img from '../component/Mlogo/logo.png'

function Header() {
  const navigate = useNavigate();

  const gotocontactus = () => {
    navigate("/ContactUs");
  };
  const gotoblog = () => {
    navigate("/Blog");
  };
  const gotocareer = () => {
    navigate("/Career");
  };
  const gotoaboutus = () => {
    navigate("/About");
  };
  const gotohome = () => {
    navigate("/");
  };
  const gotowebd = () => {
    navigate("/services1");
  };
  const gotoappd = () => {
    navigate("/services2");
  };
  const gotoerp = () => {
    navigate("/services3");
  };
  const gotohrms = () => {
    navigate("/services4");
  };
  const gotocrm = () => {
    navigate("/services5");
  };
  const gotoschool = () => {
    navigate("/services6");
  };
  const gotosoftd = () => {
    navigate("/services7");
  };
  const gotodigitald = () => {
    navigate("/services8");
  };

  return (
    <Navbar className="pt-4" expand="lg" >
      <Container>
        <Navbar.Brand className="fs-5 fw-normal" href="#home">
          <img src={img} alt="" width={50} height={50} onClick={() => gotohome()}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav bac"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="mx-3 fs-5 fw-normal"
              href="#home"
              onClick={() => gotohome()}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="mx-3 fs-5 fw-normal"
              href="#link"
              onClick={() => gotoaboutus()}
            >
              About Us
            </Nav.Link>
            <NavDropdown
              title="Services"
              className="mx-3 fs-5 fw-normal"
              id="basic-nav-dropdown"
              backgroundcolor="#F5F4F0"
            >
              <NavDropdown.Item href="#" onClick={() => gotowebd()}>
                WEB DEVELOPMENT
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => gotoappd()}>
                APP DEVELOPMENT
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => gotoerp()}>
                MANUFACTURING ERP SYSTEM
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => gotohrms()}>
                HRMS & PAYROLL SYSTEM
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => gotocrm()}>
                ESPARSE CRM SYSTEM{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => gotoschool()}>
                SCHOOL & COLLEGES ERP
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => gotosoftd()}>
                SOFTWARE DEVELOPMENT{" "}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                onClick={() => gotodigitald()}
              >
                DIGITAL MARKETING
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="mx-3 fs-5 fw-normal"
              href="#link"
              onClick={() => gotocareer()}
            >
              Career
            </Nav.Link>
            <Nav.Link
              className="mx-3 fs-5 fw-normal"
              href="#link"
              onClick={() => gotoblog()}
            >
              Blog
            </Nav.Link>
          </Nav>
            <div className="contactbtn">
              <button
                className="btn btn-outline-dark my-2 my-sm-0 "
                type="submit"
                onClick={() => gotocontactus()}
                style={{marginTop:50, backgroundcolor:'black', color: '#EBEAE6'}}
              >
                Contact Us
              </button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
