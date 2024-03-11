import { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import humburger from "../../assets/list.svg";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
import SignUP from "../../pages/signup/SignUP";
import SignRegisterHovermMenu from "../signRegisterHoverMenu/SignRegisterHovermMenu";

const MobileMenubar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);
  const handleMobileMenuShow = () => setMobileMenuOpen(true);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <img
        src={humburger}
        alt=""
        height="24px"
        width="24px"
        className="d-sm-block d-md-none"
        onClick={handleMobileMenuShow}
      />
      <Offcanvas
        show={mobileMenuOpen}
        onHide={handleMobileMenuClose}
        className="d-md-none"
        responsive="md"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SignRegisterHovermMenu />
        </Offcanvas.Body>
      </Offcanvas>
      {show && <SignUP show={show} handleClose={handleClose} />}
    </>
  );
};

export default MobileMenubar;
