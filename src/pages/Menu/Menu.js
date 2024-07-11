import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import Papa from "papaparse";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      // Replace with actual path to your CSV file
      const response = await fetch("Items/menu.csv");
      const csvData = await response.text();

      // Parse CSV data using PapaParse
      const parsedData = Papa.parse(csvData, { header: true });

      // Process parsed data into menu items
      const processedMenuItems = parsedData.data.map((item, index) => ({
        id: index + 1,
        section: item.Section || "", // Default empty string if Section is undefined
        item: item.Item || "", // Default empty string if Item is undefined
        price: item.Price || "", // Default empty string if Price is undefined
      }));

      setMenuItems(processedMenuItems);
    } catch (error) {
      console.error("Error fetching or parsing CSV:", error);
    }
  };

  return (
    <div className="App-header">
      <h1 className="menu-title">Restaurant Menu</h1>
      <div className="menu-items">
        {menuItems.length > 0 ? (
          menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
