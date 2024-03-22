import { useContext, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import humburger from "../../assets/list.svg";
import SignRegisterHovermMenu from "../signRegisterHoverMenu/SignRegisterHovermMenu";
import ModalComponent from "../modal/ModalComponent";
import AuthContext from "../../context/authContext/AuthContext";

const MobileMenubar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);
  const handleMobileMenuShow = () => setMobileMenuOpen(true);
  const { userDetails } = useContext(AuthContext);

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
        <Offcanvas.Header closeButton className="justify-content-end" />
        {userDetails.name && (
          <Offcanvas.Title className="text-capitalize ps-3">
            <span className="fw-light">Welcome, </span>
            {userDetails.name}
          </Offcanvas.Title>
        )}

        <Offcanvas.Body>
          <SignRegisterHovermMenu />
        </Offcanvas.Body>
      </Offcanvas>
      {show && <ModalComponent show={show} handleClose={handleClose} />}
    </>
  );
};

export default MobileMenubar;
