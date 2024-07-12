// src/components/CalendarPage.js
import React, { useState } from "react";
import eventsData from "./eventsData.js"; // Import your events data

const UpcomingEvents = () => {
  return (
    <div className="App-header">
      <h1>Upcoming Events</h1>
      <p>
        Here at Sip & Play, we host{" "}
        <a href="https://magic.wizards.com/en">Magic the Gathering</a> community
        meetups and events!
      </p>
      <p>
        Want to join the Sip & Play community? All of the action is on our
        Discord.
      </p>
      <a href="https://discord.gg/bdURvWC">Join Here!</a>
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
