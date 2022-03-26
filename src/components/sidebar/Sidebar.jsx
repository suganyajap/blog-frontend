import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Facebook, GitHub, Mail, WhatsApp } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cates, setCates] = useState([]);
  //get Category
  const getCategory = async () => {
    const res = await axios.get(
      "https://my-blog-app-back.herokuapp.com/api/categories"
    );
    // console.log(res.data.details);
    setCates(res.data.postCategory);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">ABOUT ME</span>
        <p className="about_me">
          I'm Sundaravadivu R from Bangalore.  I did a Full
          (MERN) stack web developer course in GUVI Geek Pvt Ltd at Chennai. I'm
          looking for a full-stack web developer role. As a developer, I could
          give my full effort work to your reputed company. Thank You...!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebar_title">KEY SKILLS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">JAVASCRIPT</li>
          <li className="sidebarListItem">REACT JS</li>
          <li className="sidebarListItem">NODE JS</li>
          <li className="sidebarListItem">EXPRESS</li>
          <li className="sidebarListItem">MONGO DB</li>
          <li className="sidebarListItem">HTML</li>
          <li className="sidebarListItem">CSS</li>
          <li className="sidebarListItem">MATERIAL UI</li>
        </ul>

        <span className="sidebar_title">CATEGORIES</span>
        <ul className="sidebarList">
          {cates.map((cate) => (
            <Link key={cate._id} className="link" to={`/?cat=${cate.name}`}>
              <li className="sidebarListItem">{cate.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebar_title">Follow Me</span>
        <div className="sidebarSocial">
          <Facebook className="facebook" />

          <WhatsApp className="whatsapp" />
          <GitHub />
          <Mail className="mail" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;