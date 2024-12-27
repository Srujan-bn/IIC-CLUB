import React from "react";

const Events = () => {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <p>Join us for exciting events that spark creativity, innovation, and collaboration.</p>

      <div className="event-list">
        <div className="event-box">
          <h3>Innovation Workshop</h3>
          <p>March 10, 2024</p>
          <p>A hands-on workshop to foster innovative thinking and problem-solving.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">See More</a>
        </div>
        <div className="event-box">
          <h3>Hackathon 2024</h3>
          <p>April 5-7, 2024</p>
          <p>A 48-hour event where participants create groundbreaking solutions to real-world problems.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">See More</a>
        </div>
        <div className="event-box">
          <h3>Start-up Pitch Competition</h3>
          <p>May 15, 2024</p>
          <p>Students pitch their innovative start-up ideas to investors and industry experts.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">See More</a>
        </div>
      </div>
    </div>
  );
};

export default Events;
