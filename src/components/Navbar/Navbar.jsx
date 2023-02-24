import React from "react";
import "./Navbar.scss";
import logo from "../../asset/navbar/logo.svg";
import notification from "../../asset/navbar/Vector.svg";
import user from "../../asset/navbar/user.svg";
import downArrow from "../../asset/navbar/downArrow.svg";
import { useDispatch } from "react-redux";
import { setModel } from "../../redux/userReducer";

function Navbar(props) {
  let dispatch = useDispatch();

  return (
    <div className="navbar-wrapper">
      <div className="left">
        <img src={logo} />
      </div>
      <div className="right">
        <button onClick={() => dispatch(setModel())}>Post a Job!</button>
        <img src={notification} />

        <div className="navbar-profile">
          <div className="one">
            <img src={user} />
          </div>
          <div className="two">
            <div className="two-top">
              <p>Nitesh Sharma</p>
            </div>
            <div className="two-bottom">
              <p>Super Admin</p>
            </div>
          </div>
          <div className="three">
            <img src={downArrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
