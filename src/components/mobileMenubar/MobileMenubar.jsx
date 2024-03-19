import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import humburger from "../../assets/list.svg";
import SignRegisterHovermMenu from "../signRegisterHoverMenu/SignRegisterHovermMenu";
import ModalComponent from "../modal/ModalComponent";

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
      {show && <ModalComponent show={show} handleClose={handleClose} />}
    </>
  );
};

export default MobileMenubar;
