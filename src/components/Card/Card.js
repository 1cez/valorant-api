import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ agents, filteredAgents }) {
  return (
    <div className="card-container">
      {filteredAgents.map((agent) => {
        if (agent.isPlayableCharacter === false) {
          return null;
        }
        return (
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
              <button>
                <Link to={"/agent-details/" + agent.uuid}>Details</Link>
              </button>
            </div>
          </div>
        );
      })}
      {/* {filteredAgents.map((agent) => (
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
              <button>
                <Link to={"/agent-details/" + agent.uuid}>Details</Link>
              </button>
            </div>
        </div>
      ))} */}
    </div>
  );
}

export default Card;
