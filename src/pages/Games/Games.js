import React, { useState, useEffect } from "react";
import GalleryItem from "./GalleryItem"; // Assuming GalleryItem component is defined
import { FaTimes } from "react-icons/fa"; // Import FaTimes icon from react-icons
import gameData from "./boardgames.json"; // Import JSON data (adjust path as needed)
import "./GalleryItem.css";
import Dice from "../../components/Canvas/Dice/Dice.js";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [uniqueLabels, setUniqueLabels] = useState([]);

  useEffect(() => {
    // Initialize items state with JSON data
    setItems(gameData);
    // Extract unique labels from the items
    const labels = gameData
      .filter((item) => item.label) // Filter items that have a label
      .map((item) => item.label); // Map to only labels
    setUniqueLabels([...new Set(labels)]); // Remove duplicates and set state
  }, []);

  const filterItems = () => {
    let filtered = items.filter((item) => {
      const title = item.title.toLowerCase();
      return searchQuery
        ? title.includes(searchQuery.toLowerCase()) &&
            (selectedTags.length === 0 ||
              selectedTags.every(
                (tag) => item.label && item.label.includes(tag)
              ))
        : selectedTags.length === 0 ||
            selectedTags.every((tag) => item.label && item.label.includes(tag));
    });
    setFilteredItems(filtered);
  };

  useEffect(() => {
    // Initialize filteredItems with all items when items change
    setFilteredItems(items);
  }, [items]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery(""); // Clear search query
    setFilteredItems(items); // Reset filtered items to all items
  };

  const handleTagClick = (event) => {
    const tag = event.target.value;
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  useEffect(() => {
    // Filter items when searchQuery or selectedTags change
    filterItems();
  }, [searchQuery, selectedTags]);

  return (
    <div className="App-header">
      <img src="headers/gamecatalogue.png" className="pointer-events-none" />
      <div className="filter-options flex flex-col md:flex-row items-center w-full justify-between">
        <div className="search-bar">
          <input
            className="p-2 w-full"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          {searchQuery && (
            <button className="clear-button ml-2" onClick={clearSearch}>
              <FaTimes />
            </button>
          )}
        </div>
        <div className="filter-options flex-row">
          {uniqueLabels.map((label) => (
            <button
              key={label}
              value={label}
              className={`filter-button p-2 ${
                selectedTags.includes(label) ? "active" : ""
              }`}
              onClick={(e) => handleTagClick(e)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="gallery">
        {filteredItems.map((item) => (
          <GalleryItem key={item.title} item={item} />
        ))}
      </div>
      <div className="dice1">
        <Dice />
      </div>
      <div className="dice2">
        <Dice />
      </div>
    </div>
  );
};

export default Gallery;
