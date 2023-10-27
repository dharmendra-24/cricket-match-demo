import React, { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState(Array(10).fill(""));
  const [teams, setTeams] = useState([]);

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleMemberNameChange = (event, index) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = event.target.value;
    setTeamMembers(updatedMembers);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeam = { teamName, teamMembers };
    setTeams([...teams, newTeam]);
    closeModal();
    setTeamName("");
    setTeamMembers(Array(10).fill(""));
  };

  return (
    <div className="App bg-gray-100 p-8">
      <div className="App">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
