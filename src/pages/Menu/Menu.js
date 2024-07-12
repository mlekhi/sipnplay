import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import Papa from "papaparse";
import MenuCanvas from "../../components/Canvas/Menu/MenuCanvas";
import CustomCanvas from "../../components/Canvas/Menu/CustomCanvas";
import Boba from "../../components/Canvas/Boba";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const path = process.env.PUBLIC_URL + "/Items/menu.csv";
      const response = await fetch(path);

      const csvData = await response.text();

      const parsedData = Papa.parse(csvData, { header: true });

      // Process parsed data into menu items
      const processedMenuItems = parsedData.data.reduce((acc, item, index) => {
        const section = item.Section || "Other";
        if (!acc[section]) {
          acc[section] = [];
        }
        acc[section].push({
          id: index + 1,
          item: item.Item || "",
          price: item.Price || "",
        });
        return acc;
      }, {});

      setMenuItems(processedMenuItems);
    } catch (error) {
      console.error("Error fetching or parsing CSV:", error);
    }
  };

  return (
    <div className="App-header">
      {/* big letter font */}
      <Boba />
      <h1 className="menu-title">Menu</h1>
      {Object.keys(menuItems).length > 0 ? (
        Object.entries(menuItems).map(([section, items]) => (
          <>
            <h2 key={section} className="text-fuchsia-500 text-3xl mb-2 self-start">
              {section}
            </h2>
            <div className="flex flex-col items-start relative w-full mb-8">
              <div className="shadow-inner md:w-[85%] lg:w-[91%] bg-[#DEE9D3] p-3 pl-10 rounded-l-[50px] pr-[100px] h-[220px]">
                <div className="grid grid-cols-3 gap-2">
                  {items.map((menuItem) => (
                    <MenuItem key={menuItem.id} item={menuItem} />
                  ))}
                </div>
              </div>
              <div className="absolute self-center justify-center right-[1%] w-[220px] h-[220px] rounded-full bg-[#DEE9D3] pt-2 ">
                <div className="bg-white w-[95%] h-[95%] rounded-full overflow-hidden shadow-lg">
                  {section === "Coffee" ? (
                    <CustomCanvas
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                      rotate={[-Math.PI / 2, 0, 0]}
                      auto_camera={true}
                      scale={2}
                    />
                  ) : (
                    <MenuCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Menu;

const sectionModels = {
  Coffee: "/assets/iced_coffee/scene.gltf",
  "Specialty Drinks": "/assets/cafe_latte_with_art/scene.gltf",
  Boba: "/assets/bubble_tea_and_cookies/scene.gltf",
  "Hot Bites": "/assets/fried_chicken_wing/scene.gltf",
  "Sandwiches & Salads": "/assets/club_sandwich_pile/scene.gltf",
  "Seasonal Menu": "/assets/candy_basket/scene.gltf",
  "Beer & Wine": "/assets/fine_wine_glass/scene.gltf",
};
