import React from "react";
import "./Card.css";
function Card({ agents, filteredAgents }) {
  return (
    <div className="card-container">
      {filteredAgents.map((agent) => (
        <div className="card" key={agent.uuid}>
          <div className="card-title">
            <h1>{agent.displayName}</h1>
          </div>
          <div className="card-image">
            <img src={agent.displayIcon} alt={agent.displayName} />
          </div>
          <div className="card-description">
            <p>{agent.description}</p>
            </div>
            <div className="card-button">
              <button>More Details</button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
