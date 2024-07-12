import React, { useState, useEffect } from "react";
import "./GalleryItem.css";

const Gallery = ({ item }) => {
  return (
    <div>
      <div className="gallery">
        <div className="gallery-item">
          <h2>{item.title}</h2>
          <img src={`/boardgames/${item.imageLabel}`} alt={item.title} />
          {item.label && <p>{item.label}</p>}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
