import React, { useState } from "react";

function PlayerList({ players, selectedPlayers, onPlayerSelection }) {
    return (
        <div>
            <h2>Player List</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedPlayers.includes(player.id)}
                                onChange={() => onPlayerSelection(player.id)}
                            />
                            {player.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Team({ selectedPlayers, extras }) {
    const playing11 = selectedPlayers.slice(0, 11);
    const extraPlayers = selectedPlayers.slice(11);

    return (
        <div>
            <h2>Playing 11</h2>
            <ul>
                {playing11.map((playerId) => (
                    <li key={playerId}>{playerId}</li>
                ))}
            </ul>
            <h2>Extras</h2>
            <ul>
                {extraPlayers.map((playerId) => (
                    <li key={playerId}>{playerId}</li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    const players = [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
        { id: 3, name: "Player 3" },
        // Add more players here
    ];

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handlePlayerSelection = (playerId) => {
        if (selectedPlayers.includes(playerId)) {
            setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
        } else {
            setSelectedPlayers([...selectedPlayers, playerId]);
        }
    };

    return (
        <div>
            <h1>Create Your Team</h1>
            <PlayerList
                players={players}
                selectedPlayers={selectedPlayers}
                onPlayerSelection={handlePlayerSelection}
            />
            <Team selectedPlayers={selectedPlayers} extras={[]} />
        </div>
    );
}

export default App;
