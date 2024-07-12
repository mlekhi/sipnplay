// src/components/CalendarPage.js
import React, { useState } from "react";
import eventsData from "./eventsData.js"; // Import your events data

const UpcomingEvents = () => {
  // convert the YYYY-MM-DD into a readable format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    // header for page
    <div className="App-header">
      {/* <h1>Upcoming Events</h1> */}
      <img src='/headers/upcomingevents.png' alt='Upcoming Events' className='-rotate-[1deg]'></img>

      <p>
        Here at Sip & Play, we host{" "}
        <a href="https://magic.wizards.com/en">Magic the Gathering</a> community
        meetups and events!
      </p>
      <p>
        Want to join the Sip & Play community? All of the action is on our
        Discord.
      </p><br></br>
      <a href="https://discord.gg/bdURvWC" className="text-xl text-[#577335] font-medium hover:scale-110 hover:font-bold" >Join Here!</a>
      {/* create card for each individual event */}
      <div className="flex flex-col space-y-8 mt-8">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card flex flex-col md:flex-row justify-center items-center md:items-stretch mt-8">
            {/* left side contains day and date */}
            <div className="flex basis-1/6 items-center justify-center md:justify-start pt-8 md:pt-0 md:pr-8">
              <div className="text-center md:text-Right">
                <p className="event-info font-semibold">{event.day.slice(0, 3).toUpperCase()}</p>
                <p className="event-info">{formatDate(event.date)}</p>
              </div>
            </div>
            {/* Right side contains event title, time, and description */}
            <div className="text-left shadow-inner w-full md:w-[85%] lg:w-[90%] bg-[#DEE9D3] p-6 md:p-10 rounded-[50px]">
              <h3 className="event-title font-semibold text-[#577335]">{event.title.toUpperCase()}</h3>
              <h3 className="event-info font-medium text-lg text-[#577335]">{event.time}</h3>
              <p className="event-info">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UpcomingEvents;
