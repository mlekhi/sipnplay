import React from "react";
import "./GalleryItem.css";

// Functional component Gallery, takes 'item' as a prop
const Gallery = ({ item }) => {
  return (
    <div>
      <div className="gallery">
        {" "}
        {/* Main container with gallery class */}
        <div className="gallery-item">
          {" "}
          {/* Container for each gallery item */}
          <h2>{item.title}</h2> {/* Title of the gallery item */}
          <img src={`/boardgames/${item.imageLabel}`} alt={item.title} />{" "}
          {/* Image of the gallery item */}
          {item.label && <p>{item.label}</p>} {/* Optional label for the gallery item */}
        </div>
      </div>
    </div>
  );
};

export default Gallery; // Exporting Gallery component for use in other modules
