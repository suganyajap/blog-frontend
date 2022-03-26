import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.jpg";
import js from "../../images/js.jpg";
import nodejs from "../../images/node.png";

const PostHome = () => {
  return (
    <>
      <div className="post">
        <img src={html} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>

          <span className="post_title">HTML</span>

          <span className="time">{new Date(Date.now()).toDateString()}</span>
        </div>
        <p className="post_desc">
          The HyperText Markup Language, or HTML is the standard markup language
          for documents designed to be displayed in a web browser. It can be
          assisted by technologies such as Cascading Style Sheets and scripting
          languages such as JavaScript
        </p>
      </div>


      <div className="post">
        <img src={css} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>
          {/* <Link to={`/post/1}`} className="link"> */}
          <span className="post_title">CSS</span>
          {/* </Link> */}
          <span className="time">{new Date(Date.now()).toDateString()}</span>
        </div>
        <p className="post_desc">
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML. CSS is a cornerstone technology of the World Wide Web, alongside
          HTML and JavaScript.
        </p>
      </div>


      <div className="post">
        <img src={js} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>
          {/* <Link to={`/post/1}`} className="link"> */}
          <span className="post_title">Java Script</span>
          {/* </Link> */}
          <span className="time">{new Date(Date.now()).toDateString()}</span>
        </div>
        <p className="post_desc">
          JavaScript, often abbreviated as JS, is a programming language that
          conforms to the ECMAScript specification. JavaScript is high-level,
          often just-in-time compiled and multi-paradigm. It has dynamic typing,
          prototype-based object-orientation and first-class functions
        </p>
      </div>


     
      <div className="post">
        <img src={nodejs} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>
          {/* <Link to={`/post/1}`} className="link"> */}
          <span className="post_title">Node JS</span>
          {/* </Link> */}
          <span className="time">{new Date(Date.now()).toDateString()}</span>
        </div>
        <p className="post_desc">
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on the V8 engine and executes JavaScript code
          outside a web browser.
        </p>
      </div>
    </>
  );
};

export default PostHome;