import React, { Component } from 'react';

class TeamBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team1: {
                players: [],
                extras: [],
            },
            team2: {
                players: [],
                extras: [],
            },
            playerName: '',
            currentTeam: 'team1',
            editingPlayerIndex: -1,
            editedPlayerName: '',
            matchStarted: false,
            tossResult: '',
            tossWinner: '',
            matches: [],
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

        const currentTeam = this.state[this.state.currentTeam];

        if (currentTeam.players.length < 11) {
            currentTeam.players.push(this.state.playerName);
        } else if (currentTeam.extras.length < 4) {
            currentTeam.extras.push(this.state.playerName);
        } else {
            alert('You have already added 11 players and 4 extras.');
            return;
        }

        this.setState({ playerName: '', [this.state.currentTeam]: currentTeam });
    }

    switchTeam = () => {
        const currentTeam = this.state.currentTeam === 'team1' ? 'team2' : 'team1';
        this.setState({ currentTeam, playerName: '' });
    }

    startEditingPlayer = (index) => {
        this.setState({ editingPlayerIndex: index, editedPlayerName: this.state[this.state.currentTeam].players[index] });
    }

    updatePlayer = () => {
        const currentTeam = this.state[this.state.currentTeam];
        currentTeam.players[this.state.editingPlayerIndex] = this.state.editedPlayerName;
        this.setState({ [this.state.currentTeam]: currentTeam, editingPlayerIndex: -1, editedPlayerName: '' });
    }

    cancelEditPlayer = () => {
        this.setState({ editingPlayerIndex: -1, editedPlayerName: '' });
    }

    formatPlayersList(players) {
        return players.map((player, index) => {
            const playerLabel = index === 0 ? `Playing ${player} ` : index === 1 ? `${player} ` : player;
            const editButton = index !== 0 ? (
                <button onClick={() => this.startEditingPlayer(index)}>Edit</button>
            ) : null;

            return (
                <div key={index}>
                    {playerLabel}
                    {editButton}
                </div>
            );
        });
    }

    startMatch = () => {
        this.toss();
    }

    toss = () => {
        const tossResult = Math.random() < 0.5 ? 'heads' : 'tails';
        const userChoice = prompt('Choose heads or tails:');
        const tossWinner = userChoice === tossResult ? this.state.currentTeam : this.state.currentTeam === 'team1' ? 'team2' : 'team1';

        const matchInfo = {
            tossResult,
            tossWinner,
            team1: { ...this.state.team1 },
            team2: { ...this.state.team2 },
        };

        this.setState({
            tossResult,
            tossWinner,
            matchStarted: true,
            currentTeam: tossWinner,
            matches: [...this.state.matches, matchInfo],
        });
    }

    resetMatch = () => {
        this.setState({
            team1: { players: [], extras: [] },
            team2: { players: [], extras: [] },
            playerName: '',
            currentTeam: 'team1',
            editingPlayerIndex: -1,
            editedPlayerName: '',
            matchStarted: false,
            tossResult: '',
            tossWinner: '',
        });
    }

    render() {
        const team1 = this.state.team1;
        const team2 = this.state.team2;

        const playing11Team1 = this.formatPlayersList(team1.players);
        const playing11Team2 = this.formatPlayersList(team2.players);

        const extrasTeam1 = team1.extras.map((player, index) => (
            <div key={index}>{player}</div>
        ));

        const extrasTeam2 = team2.extras.map((player, index) => (
            <div key={index}>{player}</div>
        ));

        return (
            <div>
                <h1>Create Cricket Match</h1>
                <div>
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
                        <h2>{this.state.currentTeam === 'team1' ? 'Team 1' : 'Team 2'}</h2>
                        <div className="playing11">
                            {this.state.currentTeam === 'team1' ? playing11Team1 : playing11Team2}
                        </div>
                        <h2>Extras:</h2>
                        <div className="extras">{this.state.currentTeam === 'team1' ? extrasTeam1 : extrasTeam2}</div>
                        <button onClick={this.switchTeam}>
                            {this.state.currentTeam === 'team1' ? 'Switch to Team 2' : 'Switch to Team 1'}
                        </button>
                    </div>
                    {this.state.matchStarted ? (
                        <div>
                            <h2>Toss Result: {this.state.tossResult}</h2>
                            <h2>Toss Winner: {this.state.tossWinner === 'team1' ? 'Team 1' : 'Team 2'}</h2>
                            <button onClick={this.resetMatch}>New Match</button>
                        </div>
                    ) : (
                        <button onClick={this.startMatch}>Start Match</button>
                    )}
                </div>
                <div>
                    <h1>Previous Matches</h1>
                    {this.state.matches.map((match, index) => (
                        <div key={index}>
                            <h2>Match {index + 1}</h2>
                            <p>Toss Result: {match.tossResult}</p>
                            <p>Toss Winner: {match.tossWinner === 'team1' ? 'Team 1' : 'Team 2'}</p>
                            <p>Team 1 Players: {this.formatPlayersList(match.team1.players)}</p>
                            <p>Extras: {this.formatPlayersList(match.team1.extras)}</p>
                            <p>Team 2 Players: {this.formatPlayersList(match.team2.players)}</p>
                            <p>Extras: {this.formatPlayersList(match.team2.extras)}</p>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default TeamBuilder;
