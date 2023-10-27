import axios from "axios";
import React, { useState, useRef } from "react";

const App = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [currentTeam, setCurrentTeam] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playing11, setPlaying11] = useState([]);
  const [editingTeamIndex, setEditingTeamIndex] = useState(-1);
  const [editingPlayerIndex, setEditingPlayerIndex] = useState(-1);
  const [editingPlayerName, setEditingPlayerName] = useState("");
  const teamNameRef = useRef(null);
  const playerNameRef = useRef(null);
  const [isTailMode, setIsTailMode] = useState(true);
  const playerRefs = useRef([]); // Store refs for player names

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

  const handleTeamChange = (event) => {
    setCurrentTeam(event.target.value);
  };

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleTeamSubmit = () => {
    console.log("req.body.selectedTeam :  ", selectedTeams);
    const data = {
      date: getDateMonth(),
      team1: {
        name: selectedTeams[0],
      },
      team2: {
        name: selectedTeams[1],
      },
      tossWinner: isTailMode ? selectedTeams[0] : selectedTeams[1],
    };

    console.log("Selected ataaaa ", data);
    axios
      .post("http://localhost:5000/api/cricket/select-team", data)
      .then((res) => {
        console.log("Response data ", res.data);
      })
      .catch((err) => {
        console.log("Response error ", err);
      });
  };
  const toggleMode = () => {
    setIsTailMode(!isTailMode);
  };
  const toggleSelectedTeam = (team) => {
    console.log("selected team : ", team);
    if (selectedTeams.includes(team)) {
      // If the team is already selected, remove it
      setSelectedTeams(selectedTeams.filter((t) => t !== team));
    } else {
      // If the team is not selected, add it
      setSelectedTeams([...selectedTeams, team]);
    }
  };
  // const addPlayer = () => {
  //     if (currentTeam && playerName) {
  //         const updatedTeams = [...teams];
  //         const teamIndex = updatedTeams.findIndex((team) => team.name === currentTeam);

  //         if (teamIndex !== -1) {
  //             const team = updatedTeams[teamIndex];

  //             if (team.players.length < 11) {
  //                 const player = playerName;
  //                 const players = { name: playerName, team: currentTeam, extra: false };
  //                 team.players.push(players);
  //             } else if (team.players.length < 15) {
  //                 const player = playerName;
  //                 const players = { name: playerName, team: currentTeam, extra: true };
  //                 team.players.push(players);
  //             }

  //             setTeams(updatedTeams);
  //             setPlayerName('');
  //         }
  //     }
  // };

  const addPlayer = () => {
    if (currentTeam && playerName) {
      const updatedTeams = [...teams];
      const teamIndex = updatedTeams.findIndex(
        (team) => team.name === currentTeam
      );

      if (teamIndex !== -1) {
        const team = updatedTeams[teamIndex];

        if (team.players.length < 11) {
          const player = playerName;
          const players = { name: playerName, team: currentTeam, extra: false };
          team.players.push(players);
        } else if (team.players.length < 15) {
          const player = playerName;
          const players = { name: playerName, team: currentTeam, extra: true };
          team.players.push(players);
        }

        setTeams(updatedTeams);
        setPlayerName("");

        // Check the number of players and disable input if 15 players are added
        if (team.players.length >= 15) {
          teamNameRef.current.disabled = true;
        }
      }
    }
  };

  const addTeam = () => {
    if (currentTeam) {
      const newTeams = [...teams];
      const playing11Players = playing11.slice(0, 11);
      const extraPlayers = playing11.slice(11, 15);

      if (playing11Players.length < 11 && extraPlayers.length > 0) {
        alert("Enter all 11 players.");
      } else {
        if (teamNameRef.current) {
          teamNameRef.current.value = "";
        }
        newTeams.push({ name: currentTeam, players: playing11Players });
        setTeams(newTeams);
      }
    }
  };

  const updateTeamName = (teamIndex) => {
    if (teamNameRef.current) {
      const updatedTeams = [...teams];
      updatedTeams[teamIndex].name = teamNameRef.current.value;
      setTeams(updatedTeams);
      setEditingTeamIndex(-1);
    }
  };

  const startEditingPlayerName = (teamIndex, playerIndex) => {
    const updatedTeams = [...teams];
    const player = updatedTeams[teamIndex].players[playerIndex];
    setEditingPlayerName(player.name);
    setEditingPlayerIndex(playerIndex);
  };

  const cancelEditingPlayerName = () => {
    setEditingPlayerName("");
    setEditingPlayerIndex(-1);
  };

  const savePlayerName = (teamIndex, playerIndex) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].players[playerIndex].name = editingPlayerName;
    setTeams(updatedTeams);
    setEditingPlayerName("");
    setEditingPlayerIndex(-1);
  };

  return (
    <div className="App">
      <h1>Cricket Teams with Players</h1>
      <div>
        <label className="start">
          Team Name:
          <input type="text" onChange={handleTeamChange} ref={teamNameRef} />
        </label>
        <button className="At" onClick={addTeam}>
          Add Team
        </button>
      </div>
      <div className="player-name">
        <label className="start">
          Player Name:
          <input
            type="text"
            value={playerName}
            onChange={handlePlayerNameChange}
          />
        </label>
        <button className="At" onClick={addPlayer}>
          Add Player
        </button>
      </div>
      <div className="teams">
        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="team">
            {editingTeamIndex === teamIndex ? (
              <div>
                <input type="text" defaultValue={team.name} ref={teamNameRef} />
                <button onClick={() => updateTeamName(teamIndex)}>
                  Update
                </button>
              </div>
            ) : (
              <div>
                <h2>
                  Team{teamIndex + 1}:- {team.name}
                </h2>
                <button
                  className="btn"
                  onClick={() => setEditingTeamIndex(teamIndex)}
                >
                  Edit Team name
                </button>
              </div>
            )}
            <div>
              {team.players.map((player, playerIndex) => (
                <div key={playerIndex}>
                  {editingPlayerIndex === playerIndex ? (
                    <div>
                      <input
                        type="text"
                        value={editingPlayerName}
                        onChange={(e) => setEditingPlayerName(e.target.value)}
                      />
                      <button
                        onClick={() => savePlayerName(teamIndex, playerIndex)}
                      >
                        Save
                      </button>
                      <button onClick={cancelEditingPlayerName}>Cancel</button>
                    </div>
                  ) : playerIndex <= 10 ? (
                    <div className="bold">
                      {playerIndex + 1}. {player.name}
                      <button
                        className="edit"
                        onClick={() =>
                          startEditingPlayerName(teamIndex, playerIndex)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  ) : (
                    <div className="bold">
                      Extras {playerIndex + 1 - 11} {player.name}
                      <button
                        className="edit"
                        onClick={() =>
                          startEditingPlayerName(teamIndex, playerIndex)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedTeams.includes(team.name)}
                  onChange={() => toggleSelectedTeam(team.name)}
                />
                Select for Match
              </label>
            </div>
            <div>
              {selectedTeams.length === 2 && (
                <p>
                  Match: {selectedTeams[0]} vs {selectedTeams[1]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedTeams.length === 2 ? (
        <div>
          <div>
            <input
              type="checkbox"
              id="switch"
              checked={isTailMode}
              onChange={toggleMode}
              class="checkbox"
            />

            <label for="switch" class="toggle">
              <p>Head Tail</p>
            </label>
          </div>
          <button
            style={{
              marginTop: "25px",
              padding: "10px 15px",
              fontWeight: "500",
              fontSize: "16px",
              backgroundColor: "#000",
              borderRadius: "10px",
              color: "#fff",
              outline: "none",
              border: "none",
            }}
            onClick={() => {
              if (isTailMode) {
                handleTeamSubmit();
              }
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <span></span>
      )}
      {/* <div className='tb'> Toss   Result :- {isTailMode ? "Tail" : "Head"}</div>
            <span className='tb'> {isTailMode ? selectedTeams[0] : selectedTeams[1]} won the Toss</span> */}
    </div>
  );
};

export default App;
