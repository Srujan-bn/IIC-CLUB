import React from "react";

const Team = () => {
  return (
    <div className="team">
      <h1>Meet Our Team</h1>
      <p>Our team consists of passionate and driven individuals from diverse backgrounds who work together to make innovation a reality.</p>

      <div className="team-members">
        <div className="team-member-card">
          <img src="https://via.placeholder.com/150" alt="John Doe" className="team-member-img" />
          <h3>John Doe</h3>
          <p>President & Lead Innovator</p>
        </div>
        <div className="team-member-card">
          <img src="https://via.placeholder.com/150" alt="Jane Smith" className="team-member-img" />
          <h3>Jane Smith</h3>
          <p>Vice President & Community Engagement</p>
        </div>
        <div className="team-member-card">
          <img src="https://via.placeholder.com/150" alt="Alex Brown" className="team-member-img" />
          <h3>Alex Brown</h3>
          <p>Technical Lead</p>
        </div>
        <div className="team-member-card">
          <img src="https://via.placeholder.com/150" alt="Emma White" className="team-member-img" />
          <h3>Emma White</h3>
          <p>Marketing & Outreach Coordinator</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
