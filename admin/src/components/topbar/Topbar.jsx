import React, {useContext} from "react";
import "./topbar.css";
import {NotificationsNone, Language, Settings} from "@material-ui/icons";
import {logout} from "../../context/authContext/AuthActions.js";
import {AuthContext} from "../../context/authContext/AuthContext.js";
import {Link} from "react-router-dom";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to="/login">
            <button className="logoutButton" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
