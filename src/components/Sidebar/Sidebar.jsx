import React, { useState } from "react";
import dashboard from "../../asset/sidebar/kanban.svg";
import downArrow from "../../asset/sidebar/arrowdown.svg";
import calendar from "../../asset/sidebar/calendar.svg";
import profile from "../../asset/sidebar/profile.svg";
import calendarCircle from "../../asset/sidebar/calendarcircle.svg";
import user from "../../asset/sidebar/user.svg";
import stickyNote from "../../asset/sidebar/stickynote.svg";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
function Sidebar(props) {
  const [active, setActive] = useState(1);
  const [toggle, setToggle] = useState(0);
  return (
    <div className="sidebar-wrapper">
      <Link to="/">
        <div
          className={active === 1 ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setActive(1)}
        >
          <div className="sidebar-left">
            <img src={dashboard} alt="dashboard" />
            <label>Dashboard</label>
          </div>
          <img
            src={downArrow}
            className="sidebar-right"
            style={{ visibility: active === 1 ? "visible" : "hidden" }}
            alt="downarrow"
          />
        </div>
      </Link>
      <Link to="/calendar">
        <div
          className={active === 2 ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setActive(2)}
        >
          <div className="sidebar-left">
            <img src={calendar} alt="calendar" />
            <label>Calendar</label>
          </div>
          <img
            src={downArrow}
            className="sidebar-right"
            style={{ visibility: active === 2 ? "visible" : "hidden" }}
            alt="downarrow"
          />
        </div>
      </Link>
      <Link to="/jobs">
        <div
          className={
            active === 3 ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setToggle(!toggle)
          }
        >
          <div className="sidebar-left">
            <img src={profile} />
            <label>Jobs</label>
          </div>
          <div>
            <img
              src={downArrow}
              className="sidebar-right"
              style={{ visibility: active === 3 ? "visible" : "hidden" }}
              alt="downarrow"
            />
          </div>
        </div>
        {toggle ? (
          <div
            className="sidebar-item-li"
          >
            <Link to="/jobs">
              <li>Open Jobs</li>
            </Link>
            <Link to="/jobs/accepted_jobs">
              <li>Accepted Jobs</li>
            </Link>
            <Link to="">
              <li>Ongoing Jobs</li>
            </Link>
            <Link to="">
              <li>Completed Jobs</li>
            </Link>
            <Link to="">
              <li>Cancelled Jobs</li>
            </Link>
            <Link to="">
              <li>Shift Logs</li>
            </Link>
            <Link to="">
              <li>Reports</li>
            </Link>
          </div>
        ) : null}
      </Link>
      <Link to="/shift-logs">
        <div
          className={active === 4 ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setActive(4)}
        >
          <div className="sidebar-left">
            <img src={calendarCircle} />
            <label>Shift Logs</label>
          </div>
          <img
            src={downArrow}
            className="sidebar-right"
            style={{ visibility: active === 4 ? "visible" : "hidden" }}
            alt="downarrow"
          />
        </div>
      </Link>
      <Link to="/users">
        <div
          className={active === 5 ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setActive(5)}
        >
          <div className="sidebar-left">
            <img src={user} />
            <label>Users</label>
          </div>
          <img
            src={downArrow}
            className="sidebar-right"
            style={{ visibility: active === 5 ? "visible" : "hidden" }}
            alt="downarrow"
          />
        </div>
      </Link>
      <Link to="/reports">
        <div
          className={active === 6 ? "sidebar-item active" : "sidebar-item"}
          onClick={() => setActive(6)}
        >
          <div className="sidebar-left">
            <img src={stickyNote} />
            <label>Reports</label>
          </div>
          <img
            src={downArrow}
            className="sidebar-right"
            style={{ visibility: active === 6 ? "visible" : "hidden" }}
            alt="downarrow"
          />
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
