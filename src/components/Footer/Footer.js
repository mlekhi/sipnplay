import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="column">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>Sip & Play</h3> <br />
          <a href="https://www.instagram.com/sipnplaynyc/">
            <img
              src="insta.png"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </a>
        </div>
        <a href="mailto:sipnplaynyc@gmail.com">sipnplaynyc@gmail.com</a>
        <a>718-971-1684</a>
        <p>©2024 by Sip & Play</p>
      </div>
      <div className="column">
        <p>
          <span style={{ fontWeight: "bold" }}>Hours: </span>
          <br />
          <span style={{ fontWeight: "bold" }}>Mon-Thurs:</span> 11am-11pm{" "}
          <br />
          <span style={{ fontWeight: "bold" }}>Fri:</span> 11am-midnight <br />
          <span style={{ fontWeight: "bold" }}>Sat:</span> 10am-midnight <br />
          Our kitchen closes 2.5-3 hours early!
        </p>
      </div>
    </div>
  );
}

export default Footer;
