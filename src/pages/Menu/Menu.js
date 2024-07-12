import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import Papa from "papaparse";
import MenuCanvas from "../../components/Canvas/Menu/MenuCanvas";
import MenuFrontCanvas from "../../components/Canvas/Menu/MenuFrontCanvas";
import CoffeeCanvas from "../../components/Canvas/Menu/CoffeeCanvas";
import Boba from "../../components/Canvas/Menu/Boba";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // function to grab data stored in csv file
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
      <img
        fetchpriority="high"
        alt="Menu text"
        src="headers/menu.png"
        className="pointer-events-none"
      />
      <div className="menu-boba">
        <Boba />
      </div>
      {/* map out sections, and then each item */}
      {Object.keys(menuItems).length > 0 ? (
        Object.entries(menuItems).map(([section, items]) => (
          <div key={section} className="w-full">
            <h2 className="font-semibold text-3xl mb-2 self-start hidden md:flex">{section}</h2>
            <div className=" flex-col items-start relative w-full mb-8 hidden md:flex">
              <div className="shadow-inner md:w-[85%] lg:w-[90%] bg-[#DEE9D3] p-3 pl-10 rounded-l-[50px] pr-[100px] h-[220px]">
                <div className="grid grid-cols-3 gap-2">
                  {items.map((menuItem) => (
                    <MenuItem key={menuItem.id} item={menuItem} />
                  ))}
                </div>
              </div>
              <div className="absolute self-center justify-center md:right-[3%] lg:right-[2%] w-[220px] h-[220px] rounded-full bg-[#DEE9D3] pt-2 ">
                <div className="bg-white w-[95%] h-[95%] rounded-full overflow-hidden shadow-lg">
                  {/* checking for specific sections to have different threejs camera angles */}
                  {section === "Coffee" ? (
                    <CoffeeCanvas
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                      rotate={[-Math.PI / 2, 0, 0]}
                      scale={2}
                    />
                  ) : section === "Seasonal Menu" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  ) : section === "Boba" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  ) : section === "Hot Bites" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  ) : section === "Sandwiches & Salads" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
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
            {/* mobile styling here */}
            <h2 className="text-fuchsia-500 text-xl mb-2 self-start md:hidden">{section}</h2>
            <div className="flex flex-col items-start relative w-full h-full mb-8 md:hidden">
              <div className="shadow-inner self-center w-[80%] bg-[#DEE9D3] p-6 rounded-[50px] ">
                <div className="text-center bg-white w-fit rounded-full overflow-hidden shadow-lg mx-auto">
                  {section === "Coffee" ? (
                    <CoffeeCanvas
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                      rotate={[-Math.PI / 2, 0, 0]}
                      scale={2}
                    />
                  ) : section === "Seasonal Menu" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  ) : section === "Boba" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  ) : section === "Hot Bites" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  ) : section === "Sandwiches & Salads" ? (
                    <MenuFrontCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  ) : (
                    <MenuCanvas
                      key={section}
                      path={sectionModels[section] || "/assets/boba/scene.gltf"}
                    />
                  )}
                </div>
                {/* render items as a single column */}
                <div className="grid grid-cols-1 gap-2">
                  {items.map((menuItem) => (
                    <MenuItem key={menuItem.id} item={menuItem} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Menu;

// link sections with the 3d model assets they are associated with
const sectionModels = {
  Coffee: "/assets/iced_coffee/scene.gltf",
  "Specialty Drinks": "/assets/cafe_latte_with_art/scene.gltf",
  Boba: "/assets/bubble_tea_and_cookies/scene.gltf",
  "Hot Bites": "/assets/fried_chicken_wing/scene.gltf",
  "Sandwiches & Salads": "/assets/club_sandwich_pile/scene.gltf",
  "Seasonal Menu": "/assets/candy_basket/scene.gltf",
  "Beer & Wine": "/assets/fine_wine_glass/scene.gltf",
};
