import React from "react";

const MenuItem = ({ item }) => {
  if (!item) {
    return null; // Return null or handle case where item is undefined
  }
  // {item.image && <img src={item.image} alt={item.item} className="item-image" />}

  return (
    <>
      <div className="hidden md:flex flex-col items-start">
        <span className="text-start font-medium text-xs md:text-xs lg:text-base lg:font-bold">
          {item.item}
        </span>
        <span className="text-start text-gray-600 text-xs  md:text-xs lg:text-sm">
          {item.price}
        </span>
      </div>
      <div className="flex flex-row justify-between items-start md:hidden">
        <span className="text-start font-semibold text-[10px] leading-3 sm:text-xs ">
          {item.item}
        </span>
        <span className="text-gray-600 text-[8px] leading-3  sm:text-xs text-end">
          {item.price}
        </span>
      </div>
    </>
  );
};

export default MenuItem;
