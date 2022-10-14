import { useState, useEffect } from "react";
import Logo from "../../assets/valorant-logo.png";
import "./AgentDetails.css";
import { Link, useParams } from "react-router-dom";

function AgentDetails() {
  const [agentData, setAgentData] = useState(null);
  let { agentid } = useParams();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents/" + agentid)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setAgentData(json.data);
      });
  }, []);

  if (agentData === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="a-logo">
        <Link to="/">
          <img src={Logo} alt="Valorant Logo" />
        </Link>
      </div>
      <div className="a-agentdetails-container">
        <div key={agentData.uuid} className="a-card">
          <div className="a-card-image-container">
            <div className="a-card-image">
              <img src={agentData.fullPortrait} alt={agentData.displayName} />
            </div>
          </div>
          <div className="a-card-content">
            <h2 className="a-card-title">{agentData.displayName}</h2>
            <p className="a-card-description">{agentData.description}</p>
            <div className="a-card-abilities">
              {agentData.abilities.map((ability, i) => (
                <div key={i} className="a-card-ability">
                  <img src={ability.displayIcon} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentDetails;
