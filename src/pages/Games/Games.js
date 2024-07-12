import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect hooks
import GalleryItem from "./GalleryItem"; // Importing GalleryItem component from current directory
import { FaTimes } from "react-icons/fa"; // Importing FaTimes icon from react-icons library
import gameData from "./boardgames.json"; // Importing JSON data for game items (adjust path as needed)
import "./GalleryItem.css"; // Importing local CSS styles for GalleryItem component
import Dice from "../../components/Canvas/Dice/Dice2.js"; // Importing Dice component from Canvas directory

// Functional component Gallery
const Gallery = () => {
  // State management using hooks
  const [items, setItems] = useState([]); // State for all items from gameData
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered items based on search and tags
  const [searchQuery, setSearchQuery] = useState(""); // State for search query input
  const [selectedTags, setSelectedTags] = useState([]); // State for selected tags
  const [uniqueLabels, setUniqueLabels] = useState([]); // State for unique labels extracted from gameData

  // useEffect to initialize items and extract unique labels on component mount
  useEffect(() => {
    setItems(gameData); // Initialize items state with gameData
    const labels = gameData
      .filter((item) => item.label) // Filter items that have a label
      .map((item) => item.label); // Extract labels from filtered items
    setUniqueLabels([...new Set(labels)]); // Set state with unique labels (removing duplicates)
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Function to filter items based on search query and selected tags
  const filterItems = () => {
    let filtered = items.filter((item) => {
      const title = item.title.toLowerCase();
      // Conditional return statement: filters items based on search query and selected tags.
      return searchQuery
        ? title.includes(searchQuery.toLowerCase()) &&
            (selectedTags.length === 0 ||
              selectedTags.every(
                (tag) => item.label && item.label.includes(tag)
              ))
        : selectedTags.length === 0 ||
            selectedTags.every((tag) => item.label && item.label.includes(tag));
    });
    setFilteredItems(filtered); // Update filteredItems state with filtered results
  };

  // useEffect to update filteredItems whenever items change
  useEffect(() => {
    setFilteredItems(items); // Initialize filteredItems with all items on items change
  }, [items]); // Depend on items to trigger useEffect when items change

  // Event handler for search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update searchQuery state with input value
  };

  // Function to clear search query and reset filteredItems to all items
  const clearSearch = () => {
    setSearchQuery(""); // Clear searchQuery state
    setFilteredItems(items); // Reset filteredItems state to all items
  };

  // Event handler for tag button click
  const handleTagClick = (event) => {
    const tag = event.target.value; // Get tag value from clicked button
    setSelectedTags(
      (prevSelectedTags) =>
        prevSelectedTags.includes(tag)
          ? prevSelectedTags.filter((t) => t !== tag) // Remove tag if already selected
          : [...prevSelectedTags, tag] // Add tag if not already selected
    );
  };

  // useEffect to filter items whenever searchQuery or selectedTags change
  useEffect(() => {
    filterItems(); // Call filterItems function on searchQuery or selectedTags change
  }, [searchQuery, selectedTags]); // Depend on searchQuery and selectedTags to trigger useEffect

  // JSX structure for rendering the component
  return (
    <div className="App-header">
      <img
        fetchpriority="high"
        alt="Games catalogue header text"
        src="headers/gamecatalogue.png"
        className="pointer-events-none"
      />
      <div className="filter-options flex flex-col md:flex-row items-center w-full justify-between">
        {/* Search bar */}
        <div className="search-bar">
          <input
            className="p-2 w-full"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          {/* Clear search button, visible when searchQuery is not empty */}
          {searchQuery && (
            <button className="clear-button ml-2" onClick={clearSearch}>
              <FaTimes /> {/* FaTimes icon for clearing search */}
            </button>
          )}
        </div>
        {/* Tag filter buttons */}
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
      {/* Gallery section displaying filtered items */}
      <div className="gallery">
        {filteredItems.map((item) => (
          <GalleryItem key={item.title} item={item} /> // Render GalleryItem component for each filtered item
        ))}
      </div>
      {/* Dice components */}
      <div className="dice1">
        <Dice /> {/* Render Dice component */}
      </div>
      <div className="dice2">
        <Dice /> {/* Render Dice component */}
      </div>
    </div>
  );
};

export default Gallery; // Export Gallery component for use in other modules
