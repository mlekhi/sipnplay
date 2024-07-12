// Footer component displaying contact information, location, and operating hours.
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer sm:flex-row sm:justify-start flex-col justify-center">
      {/* Column for Sip & Play branding and social media */}
      <div className="column">
        <div className="footer-instagram">
          <h3>Sip & Play</h3> <br />
          <a href="https://www.instagram.com/sipnplaynyc/">
            <img
              alt="instagram icon with reference to sipnplaynyc"
              src="insta.png"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </a>
        </div>
        {/* Contact links */}
        <a href="mailto:sipnplaynyc@gmail.com">sipnplaynyc@gmail.com</a>
        <a href="tel:+17189711684">718-971-1684</a>
      </div>

      {/* Column for address */}
      <div className="column">
        <a href="https://www.google.com/maps/place/Sip+%26+Play/@40.6681326,-73.9895203,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b963c296a77:0x33cab105836ef465!8m2!3d40.6681286!4d-73.9869454!16s%2Fg%2F11fqxxtx_j?entry=ttu">
          <p>
            471 5th Ave.
            <br />
            Brooklyn, NY 11215
          </p>
        </a>
      </div>

      {/* Column for operating hours */}
      <div className="column">
        <p>
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
