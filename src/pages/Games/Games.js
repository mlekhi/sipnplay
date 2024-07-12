import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // Import Papaparse library
import GalleryItem from "./GalleryItem"; // Assuming GalleryItem component is defined
import csvFile from "./boardgames.csv"; // Import CSV file path

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filterItems = () => {
    let filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => item.tags.includes(tag)))
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    setFilteredItems(items); // Initialize filteredItems with all items
  }, [items]);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch(csvFile); // Fetch CSV file
        const text = await response.text(); // Get the text from the response
        const result = Papa.parse(text, {
          skipEmptyLines: true,
        });
        setItems(result.data); // Set parsed CSV data to state
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      }
    };

    fetchCSVData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterItems();
  };

  return (
    <div className="App-header">
      <h1>Games Catalogue</h1>
      <div className="gallery">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        {items.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
