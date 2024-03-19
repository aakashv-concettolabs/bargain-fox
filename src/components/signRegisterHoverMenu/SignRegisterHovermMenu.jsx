import React, { useState } from "react";
import "./signRegisterHoverMenuMain.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HoverMenuDetails } from "./HoverMenuDetails";
import ModalComponent from "../modal/ModalComponent";

const SignRegisterHovermMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="signRegisterHoverMenuMain">
      <Button
        id="signupBtn"
        className="rounded-5 w-100 mb-3"
        onClick={() => setShow(true)}
      >
        Login/Register
      </Button>
      <ul className="p-0">
        {HoverMenuDetails.map((HoverMenuDetail) => (
          <li className="py-2 px-3" key={HoverMenuDetail.id}>
            <Link className="text-decoration-none" to={HoverMenuDetail.linkUrl}>
              {HoverMenuDetail.linkto}
            </Link>
          </li>
        ))}
      </ul>
      {show && <ModalComponent show={show} handleClose={handleClose} />}
    </div>
  );
};

export default SignRegisterHovermMenu;
