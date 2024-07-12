import React, { useState, useEffect } from "react";
import GalleryItem from "./GalleryItem"; // Assuming GalleryItem component is defined
import { FaTimes } from "react-icons/fa"; // Import FaTimes icon from react-icons
import gameData from "./boardgames.json"; // Import JSON data (adjust path as needed)
import "./GalleryItem.css";

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
    let filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => item.tags.includes(tag)))
    );
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
      <h1>Games Catalogue</h1>
      <div className="filter-options">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          {searchQuery && (
            <button className="clear-button" onClick={clearSearch}>
              <FaTimes />
            </button>
          )}
        </div>
        <div className="filter-options">
          {uniqueLabels.map((label) => (
            <button
              key={label}
              className={`filter-button ${
                selectedTags.includes(label) ? "active" : ""
              }`}
              onClick={() => handleTagClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="gallery">
        {filteredItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
