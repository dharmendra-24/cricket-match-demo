import React, { Component } from 'react';

class TeamBuilder2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            extras: [],
            playerName: '',
        };
    }

    handlePlayerNameChange = (event) => {
        this.setState({ playerName: event.target.value });
    }

    addPlayer = () => {
        if (this.state.playerName.trim() === '') {
            alert('Please enter a player name.');
            return;
        }

        if (this.state.players.length < 11) {
            this.setState({
                players: [...this.state.players, this.state.playerName],
                playerName: '',
            });
        } else if (this.state.extras.length < 4) {
            this.setState({
                extras: [...this.state.extras, this.state.playerName],
                playerName: '',
            });
        } else {
            alert('You have already added 11 players and 4 extras.');
        }
    }

    render() {
        return (
            <div>
                <h1>Create Team 2</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter player name"
                        value={this.state.playerName}
                        onChange={this.handlePlayerNameChange}
                    />
                    <button onClick={this.addPlayer}>Add Player</button>
                </div>

                <div>
                    <h2>Playing 11:</h2>
                    <ul>
                        {this.state.players.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Extras:</h2>
                    <ul>
                        {this.state.extras.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TeamBuilder2;
