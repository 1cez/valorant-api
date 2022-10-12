import Card from "./components/Card";
import "./App.css";
import Logo from "./components/Logo";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://valorant-api.com/v1/agents";

function App() {
  const [agents, setAgents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      axios(API).then((res) => setAgents(res.data.data));
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      <Logo />
      <div className="input-container">
        <input
          placeholder="Search Agents"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container">
        <Card loading={loading} agents={agents} />
      </div>
    </>
  );
}

export default App;
