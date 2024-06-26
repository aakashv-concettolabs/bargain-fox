import React, { useContext, useState } from "react";
import "./signRegisterHoverMenuMain.scss";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HoverMenuDetails } from "./HoverMenuDetails";
import ModalComponent from "../modal/ModalComponent";
import axios from "axios";
import { logout } from "../../api/Apis";
import AuthContext from "../../context/authContext/AuthContext";

const SignRegisterHovermMenu = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { userDetails, setUserDetails, initialvalues } =
    useContext(AuthContext);

  const handleClose = () => {
    setShow(false);
  };

  const handleLogOut = async () => {
    try {
      const response = await axios.get(logout, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        setUserDetails(initialvalues);
        localStorage.clear();
        navigate("/");
      }
    } catch (error) {
      console.log("logOut error", error);
    }
  };

  const handleLink = async (link) => {
    if (localStorage.getItem("token")) {
      navigate(link);
    } else {
      setShow(true);

      await new Promise((resolve) => {
        const interval = setInterval(() => {
          if (!show && localStorage.getItem("token")) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });

      navigate(link);
    }
  };

  return (
    <div className="signRegisterHoverMenuMain">
      {userDetails.name ? (
        <Button
          id="signupBtn"
          className="rounded-5 w-100 mb-3"
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      ) : (
        <Button
          id="signupBtn"
          className="rounded-5 w-100 mb-3"
          onClick={() => setShow(true)}
        >
          Login/Register
        </Button>
      )}
      <ul className="p-0">
        {HoverMenuDetails.map((HoverMenuDetail) => (
          <li
            className="py-2 px-3"
            key={HoverMenuDetail.id}
            onClick={() => handleLink(HoverMenuDetail.linkUrl)}
          >
            {HoverMenuDetail.linkto}
          </li>
        ))}
      </ul>
      {show && <ModalComponent show={show} handleClose={handleClose} />}
    </div>
  );
};

export default SignRegisterHovermMenu;
