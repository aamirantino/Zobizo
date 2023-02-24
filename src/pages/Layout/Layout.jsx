import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import "./Layout.scss";
import { Box, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setModel } from "../../redux/userReducer";
import JobOptionModel from "../../components/ShiftLogs/JobOptionModel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Layout(props) {
  let { myModel } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const handleClose = () => dispatch(setModel());

  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="layout-wrapper">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
      <Modal
        open={myModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
        <JobOptionModel />
      </Modal>
    </div>
  );
}

export default Layout;
