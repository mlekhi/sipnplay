import React from "react";

const MenuItem = ({ item }) => {
  if (!item) {
    return null; // Return null or handle case where item is undefined
  }

  return (
    <div className="menu-item">
      <h3>{item.section}</h3>
      <p>{item.item}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default MenuItem;
