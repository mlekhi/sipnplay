// src/data/eventsData.js

const events = [
  {
    id: 1,
    title: "Event 1",
    start: new Date(2024, 6, 15, 10, 0), // year, month (0-indexed), day, hour, minute
    end: new Date(2024, 6, 15, 12, 0),
  },
  {
    id: 2,
    title: "Event 2",
    start: new Date(2024, 6, 16, 13, 0),
    end: new Date(2024, 6, 16, 15, 0),
  },
  // Add more events as needed
];

export default events;
