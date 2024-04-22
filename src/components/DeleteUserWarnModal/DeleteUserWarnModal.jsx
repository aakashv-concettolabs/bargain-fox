import axios from "axios";
import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteUser } from "../../api/Apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";

const DeleteUserWarnModal = ({ show, handleClose }) => {
  const token = localStorage.getItem("token");
  const { setUserDetails, initialvalues } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteUserCall = async () => {
    if (token) {
      try {
        const deleteResponse = await axios.get(deleteUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (deleteResponse.status == 200) {
          toast.success(deleteResponse.data.message);
          handleClose();
          setUserDetails(initialvalues);
          localStorage.clear();
          navigate("/");
        }
        if (deleteResponse.status == 422) {
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log("delete user error", error);
      }
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUserCall();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="border-0" />
      <Modal.Body className="px-5">
        <h4 className="text-center">Delete Account</h4>
        <p>
          Are you sure you want to delete? You won't be able to revert this!
        </p>
        <div className="d-flex justify-content-center gap-5">
          <Button onClick={handleClose} className="rounded-4 px-4">
            Cancel
          </Button>
          <Button
            variant="warning"
            onClick={handleDelete}
            className="rounded-4 px-4"
          >
            Yes, Delete
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteUserWarnModal;
