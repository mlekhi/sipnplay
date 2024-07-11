import React from "react";

const InstagramEmbed = () => (
  <div>
    <blockquote
      className="instagram-media"
      data-instgrm-version="13"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "99.375%",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
        boxSizing: "border-box",
      }}
    >
      <div style={{ padding: "8px" }}>
        <div
          style={{
            background: "#F8F8F8",
            lineHeight: "0",
            margin: "0",
            padding: "0",
            textAlign: "center",
          }}
        >
          {/* Replace the `href` with your Instagram post URL */}
          <a
            href="https://www.instagram.com/sipnplaynyc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </div>
      </div>
    </blockquote>
  </div>
);

export default InstagramEmbed;
