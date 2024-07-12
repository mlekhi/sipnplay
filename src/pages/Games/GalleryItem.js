import React, { useState, useEffect } from "react";
import "./GalleryItem.css";

const Gallery = ({ item }) => {
  return (
    <div>
      <div className="gallery">
        <div className="gallery-item">
          <h2>{item.title}</h2>
          {item.label && <p>{item.label}</p>}
          <img src={`/boardgames/${item.imageLabel}`} alt={item.title} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
