// src/components/CalendarPage.js

import React, { useState } from "react";
import eventsData from "./eventsData.js"; // Import your events data

const UpcomingEvents = () => {
  return (
    <div className="App-header">
      <h2 className="event-heading">Upcoming Events</h2>
      {eventsData.map((event) => (
        <div key={event.id} className="event-card">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-info">Date: {event.date}</p>
          <p className="event-info">Time: {event.time}</p>
          <p className="event-info">Description: {event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
