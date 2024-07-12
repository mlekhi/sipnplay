import React from "react";

const MenuItem = ({ item }) => {
  if (!item) {
    return null; // Return null or handle case where item is undefined
  }
  // {item.image && <img src={item.image} alt={item.item} className="item-image" />}

  return (
    <div className="flex flex-col items-start">
      <span className="font-semibold text-base">{item.item}</span>
      <span className="text-gray-600 text-sm  text-start">{item.price}</span>
    </div>
  );
};

export default MenuItem;
