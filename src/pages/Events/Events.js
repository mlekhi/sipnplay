// src/components/Events.js

import React from "react";
import eventsData from "./eventsData.js"; // Importing events data from eventsData.js
import Boba from "../../components/Canvas/HomemadeBoba/Boba.js"; // Importing Boba component
import "./Events.css"; // Importing local CSS styles for Events component

// Functional component UpcomingEvents
const UpcomingEvents = () => {
  // Function to format date from YYYY-MM-DD to a readable format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  // JSX structure for rendering the component
  return (
    <div className="App-header">
      {" "}
      {/* Main container with App-header class */}
      {/* Image header for Upcoming Events */}
      <img
        src="/headers/upcomingevents.png" // Image source path
        alt="Upcoming Events" // Alt text for accessibility
        className="-rotate-[1deg] pointer-events-none" // CSS classes for styling image
      ></img>
      {/* Paragraph introducing Sip & Play events */}
      <p>
        Here at Sip & Play, we host <a href="https://magic.wizards.com/en">Magic the Gathering</a>{" "}
        community meetups and events!
      </p>
      <p>Want to join the Sip & Play community? All of the action is on our Discord.</p>
      <br></br>
      {/* Link to join Discord with dynamic styling */}
      <a
        href="https://discord.gg/bdURvWC"
        className="text-xl text-[#577335] font-medium link hover:scale-110 hover:font-bold">
        Join Here!
      </a>
      {/* Mapping over eventsData to create cards for each event */}
      <div className="flex flex-col space-y-8 mt-8">
        {eventsData.map((event) => (
          <div
            key={event.id} // Unique key for each event card
            className="event-card flex flex-col md:flex-row justify-center items-center md:items-stretch mt-8" // CSS classes for event card layout
          >
            {/* Left side of card displaying day and date */}
            <div className="flex basis-1/6 items-center justify-center md:justify-start pt-8 md:pt-0 md:pr-8">
              <div className="text-center md:text-Right">
                {/* Displaying abbreviated day and formatted date */}
                <p className="event-info font-semibold">
                  {event.day.slice(0, 3).toUpperCase()} {/* Abbreviated day */}
                </p>
                <p className="event-info">{formatDate(event.date)}</p> {/* Formatted date */}
              </div>
            </div>

            {/* Right side of card displaying event details */}
            <div className="text-left shadow-inner w-full md:w-[85%] lg:w-[90%] bg-[#DEE9D3] p-6 md:p-10 rounded-[50px]">
              {/* Event title */}
              <h3 className="event-title font-semibold text-[#577335]">
                {event.title.toUpperCase()} {/* Uppercase event title */}
              </h3>
              {/* Event time */}
              <h3 className="event-info font-medium text-lg text-[#577335]">
                {event.time} {/* Event time */}
              </h3>
              {/* Event description */}
              <p className="event-info">{event.description}</p> {/* Event description */}
            </div>

            {/* Container for Boba component */}
            <div className="boba-container">
              <Boba /> {/* Rendering Boba component */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents; // Exporting UpcomingEvents component for use in other modules
