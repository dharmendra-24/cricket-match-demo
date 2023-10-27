import React, { useEffect, useState } from "react";

function TeamModal({
  closeModal,
  addTeam,
  eidtTeamMembers,
  editTeamName,
  index,
}) {
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState(Array(15).fill(""));
  useEffect(() => {
    if (editTeamName !== null && eidtTeamMembers !== null) {
      console.log("eidtTeamMembers ", eidtTeamMembers, "and", editTeamName);
      setTeamName(editTeamName);
      setTeamMembers(eidtTeamMembers);
    }
  }, []);

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleMemberNameChange = (event, index) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = event.target.value;
    setTeamMembers(updatedMembers);
  };

  const handleSubmit = () => {
    if (teamName.trim() === "") {
      alert("Please enter a team name");
      return;
    }
    const isEmpty = teamMembers.map(
      (member) => member.trim() === "" || member.trim() === " "
    );
    if (isEmpty.includes(true)) {
      alert("Please enter all the team members");
      return;
    }
    const team = {
      teamName,
      teamMembers: teamMembers.filter((member) => member.trim() !== ""),
    };
    addTeam(team, index);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
      <div className="max-w-md w-[500px] bg-white p-6 rounded shadow-md h-[80vh] overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">Create a Team</h1>
        <form>
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
          <h2 className="text-lg font-semibold mb-2 ">Team Members:</h2>
          {teamMembers.map((member, index) => (
            <div
              className="mb-2 flex flex-col justify-start items-start"
              key={index}
            >
              <label
                htmlFor={`member${index + 1}`}
                className="block text-gray-600"
              >{`Member ${index + 1} ${index > 10 ? "(Extra)" : ""}:`}</label>
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
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {index !== null ? "Edit Team" : "Create Team"}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 bg-gray-300 text-gray-600 p-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeamModal;
