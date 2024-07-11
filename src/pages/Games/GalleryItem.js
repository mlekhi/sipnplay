import React, { useState, useEffect } from "react";
import "./GalleryItem.css";

const Gallery = ({ item }) => {
  return (
    <div>
      <div className="gallery">
        <div className="gallery-item">
          <h2>{item}</h2>
          {/* <p>item.tag</p> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
