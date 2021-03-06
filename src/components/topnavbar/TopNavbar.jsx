import React, { useContext } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import Profile from "../../images/user.jpg";

import { Context } from "../../context/Context";

function TopNavbar() {
  const { user, dispatch } = useContext(Context);
  console.log(user);

  const profPic = "https://my-blog-app-back.herokuapp.com/images/";

  //logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); //it wil return user,isfetching,error states
    window.location.reload("/login");
  };
  return (
    <div className="Topbar">
      <div className="topleft">
        <h3>Postagram</h3>
       
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topright">
        {user ? (
          user.profilePic ? (
            <Link to="/settings" className="link">
              <img
                className="topImg"
                src={profPic + user.profilePic}
                alt="profile"
              />
            </Link>
          ) : (
            <Link to="/settings" className="link">
              <img className="topImg" src={Profile} alt="profile" />
            </Link>
          )
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopNavbar;