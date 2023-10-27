import React, { useState } from "react";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState(Array(10).fill(""));

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleMemberNameChange = (event, index) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = event.target.value;
    setTeamMembers(updatedMembers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="App bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Create a Team</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="teamName" className="block text-gray-600">
              Team Name:
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"
              value={teamName}
              onChange={handleTeamNameChange}
              required
            />
          </div>

          <h2 className="text-lg font-semibold mb-2">Team Members:</h2>

          {teamMembers.map((member, index) => (
            <div className="mb-2" key={index}>
              <label
                htmlFor={`member${index + 1}`}
                className="block text-gray-600"
              >{`Member ${index + 1}:`}</label>
              <input
                type="text"
                id={`member${index + 1}`}
                name={`member${index + 1}`}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"
                value={member}
                onChange={(event) => handleMemberNameChange(event, index)}
                required
              />
            </div>
          ))}

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeam;
