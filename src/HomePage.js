import React, { useState } from "react";
import TeamModal from "./TeamModel";
import axios from "axios";

function HomePage() {
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addTeam = (team, i) => {
    if (selectedTeamForEdit) {
      const items = [...teams];
      items[i] = team;
      setTeams(items);
      setSelectedTeamForEdit(null);
    } else {
      setTeams([...teams, team]);
    }
  };

  const selectTeam = (team) => {
    if (selectedTeams.length < 2 && !selectedTeams.includes(team)) {
      setSelectedTeams([...selectedTeams, team]);
    }
  };

  const pairTeams = () => {
    if (selectedTeams.length === 2) {
      const [team1, team2] = selectedTeams;
      const match = {
        team1: team1.teamName,
        team2: team2.teamName,
      };
      setMatches([...matches, match]);
      setSelectedTeams([]);
    }
  };

  const isTeamSelected = (teamName) => {
    return matches
      .map((match) => match.team1 === teamName || match.team2 === teamName)
      .includes(true);
  };

  const [startTossLoading, setStartTossLoading] = useState(false);
  const startToss = (i) => {
    setStartTossLoading(true);
    function toss() {
      try {
        const tossWinner = Math.floor(Math.random() * 2);
        const tossResult = Math.floor(Math.random() * 2);
        const match = matches[i];
        const updatedMatch = {
          ...match,
          tossWinner: tossWinner === 0 ? match.team1 : match.team2,
          tossDecision: tossResult === 0 ? "Bat" : "Bowl",
        };
        console.log("updated team, ", updatedMatch);

        const updatedMatches = [...matches];
        updatedMatches[i] = updatedMatch;
        setMatches(updatedMatches);
      } catch (e) {
        setStartTossLoading(false);
      }
      setStartTossLoading(false);
    }
    setTimeout(toss, 2000);
  };

  const getDateMonth = () => {
    const date = new Date();
    const day = date.getDate();
    return `${day}-${month[date.getMonth() + 1]}`;
  };

  const month = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  const [submitLoading, setSubmitLoading] = useState(false);
  const [slectedIndex, setSlectedIndex] = useState();

  const handleTeamSubmit = () => {
    console.log("req.body.selectedTeam :  ", matches);
    setSubmitLoading(true);
    const data = matches.map((match) => {
      return {
        date: getDateMonth(),
        team1: {
          name: match.team1,
        },
        team2: {
          name: match.team2,
        },
        tossWinner: match.tossWinner,
      };
    });

    console.log("Selected ataaaa ", data);
    axios
      .post("https://cricket-api-lilac.vercel.app/api/cricket/add-teams", data)
      .then((res) => {
        console.log("Response data ", res.data);
        setMatches([]);
        setSubmitLoading(false);
        alert("Teams created successfully");
      })
      .catch((err) => {
        console.log("Response error ", err);
      });
    setSubmitLoading(false);
  };

  const [selectedTeamForEdit, setSelectedTeamForEdit] = useState();

  const handleEditTeam = (team) => {
    setSelectedTeamForEdit(team);
    openModal();
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-full mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Home Page</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Team
        </button>

        {selectedTeams.length === 2 && (
          <div className="bg-green-100 p-4 rounded mt-4">
            <h2 className="text-lg font-semibold">Selected Teams for Match:</h2>
            {selectedTeams.map((team, index) => (
              <p key={index}>{team.teamName}</p>
            ))}
            <button
              onClick={pairTeams}
              className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create Match
            </button>
          </div>
        )}
        {matches.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Matches:</h2>
            {matches.map((match, index) => (
              <div
                key={index}
                className="bg-yellow-100 p-4 rounded mt-2 flex justify-between items-center"
              >
                <p></p>
                <p>{`Match ${index + 1}: ${match.team1} vs. ${match.team2}`}</p>
                <div>
                  {match.tossWinner != null ? (
                    <p>{`Toss Won by ${match.tossWinner}`}</p>
                  ) : (
                    <button
                      onClick={() => startToss(index)}
                      className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {startTossLoading ? (
                        <div class="animate-spin rounded-full h-6 w-6 border-t-4 border-white-500 border-solid"></div>
                      ) : (
                        "Start Toss"
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {matches.length > 0 && (
          <button
            onClick={handleTeamSubmit}
            className="mt-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {submitLoading ? (
              <div class="animate-spin rounded-full h-6 w-6 border-t-4 border-white-500 border-solid"></div>
            ) : (
              "Submit"
            )}
          </button>
        )}
        <div className="">
          <div
            style={{ width: "100%" }}
            className="flex w-[80vw] flex flex-wrap"
          >
            {teams.map((team, index) => (
              <div
                key={index}
                style={{
                  width: "500px",
                }}
                className="bg-blue-100 w-25 p-4 rounded mt-4 mx-2"
              >
                <div className="flex">
                  <div>
                    {matches
                      .map(
                        (match) =>
                          match.team1 === team.teamName ||
                          match.team2 === team.teamName
                      )
                      .includes(true) ? (
                      <img
                        src="https://th.bing.com/th/id/R.b06d686ce26a343b0210c0734a3e476b?rik=VqkDvvMjrKXeQA&riu=http%3a%2f%2fvvbuitenpost.nl%2fwp-content%2fuploads%2f2020%2f08%2f1200px-Check_green_icon.svg_.png&ehk=E6vz6UhdAPMLo28ia8J9KGIV6krXnRfv26BZu3nG1dA%3d&risl=&pid=ImgRaw&r=0"
                        alt="Team 1"
                        height={25}
                        width={25}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <h2 className="w-[250px] mb-5 text-lg font-semibold mx-auto">
                    {team.teamName}
                  </h2>
                  {!isTeamSelected(team.teamName) && (
                    <button
                      onClick={() => {
                        setSlectedIndex(index);
                        handleEditTeam(team);
                      }}
                      disabled={isTeamSelected(team.teamName)}
                      title="Edit Team Name"
                      className="mt-2 bg-yellow-500 h-[25px] text-white px-2 py-0 rounded hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed
                   focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      tool
                    >
                      edit
                    </button>
                  )}
                </div>
                <p>Team Members:</p>

                <ul className="flex flex-wrap mt-2 mb-5 my-auto">
                  {team.teamMembers.map((member, memberIndex) => (
                    <li
                      className={`${
                        memberIndex > 10
                          ? "bg-[#c3c3c3] text-[#000000]"
                          : "bg-[#2d2d2d] text-white"
                      } mr-2 mb-2 px-4 py-1 rounded-md font-semibold`}
                      key={memberIndex}
                    >
                      {member}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => selectTeam(team)}
                  disabled={isTeamSelected(team.teamName)}
                  title={
                    isTeamSelected(team.teamName)
                      ? "Alreayd Selecetd"
                      : "Select Team"
                  }
                  className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed
                   focus:outline-none focus:ring-2 focus:ring-green-400"
                  tool
                >
                  Select for Match
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <TeamModal
          closeModal={closeModal}
          addTeam={addTeam}
          index={slectedIndex}
          editTeamName={
            selectedTeamForEdit ? selectedTeamForEdit.teamName : null
          }
          eidtTeamMembers={
            selectedTeamForEdit ? selectedTeamForEdit.teamMembers : null
          }
        />
      )}
    </div>
  );
}

export default HomePage;
