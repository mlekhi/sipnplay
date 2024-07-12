// src/components/CalendarPage.js
import React, { useState } from "react";
import eventsData from "./eventsData.js"; // Import your events data

const UpcomingEvents = () => {

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
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
      </p>
      <a href="https://discord.gg/bdURvWC">Join Here!</a>
      <div className="flex-col">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card flex justify-center mt-[4rem]">
            <div className="basis-1/6 pt-[5rem]  pr-[2rem]">
              <p className="event-info font-semibold ">{event.day.slice(0, 3).toUpperCase()}</p>
              <p className="event-info">{formatDate(event.date)}</p>
            </div>
           
            <div className="text-left shadow-inner md:w-[85%] lg:w-[90%] bg-[#DEE9D3] p-3 pl-10 pt-[6%] rounded-[50px] h-[220px] basis-5/6">
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
