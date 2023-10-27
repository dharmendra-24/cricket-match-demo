//import React from "react";
import SubHeader from "../components/SubHeader";
import MatchCard from "../components/MatchCard";

import React, { useState } from "react";
import TwoColumns from "../components/two_columns";
import App from "../components/app";

import ParllelTeam from "../components/Parllel";
import TeamBuilder from "../components/cricketmatchmanager";
import Match_Page from "../components/Match_Page";
import CreateTeam from "../components/Match_Page";
const Home = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleTeamSubmit = (data) => {
    console.log("selectedPlayers ", selectedPlayers);
  };

  // Define your handlePlayerSelection function
  const handlePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  // Define your extra player data

  return (
    <div className="page">
      {/* <div id="fb-root" /> */}
      {/* <div
        id="page-wrapper"
        className="container"
        style={{ display: "inline-block" }}
      > */}
      {/* <div
          id="shosh"
          className="ad-unit shosh-embed"
          style={{
            height: "0px",
            width: "980px",
            textAlign: "center",
            display: "block",
          }}
          render_on_load="true"
        /> */}
      {/* <span
          id="skin_left"
          className="ad-unit"
          style={{
            overflow: "hidden",
            position: "fixed",
            top: 0,
            left: "calc(50% - 635px)",
            marginRight: "3px",
            zIndex: -99,
          }}
        /> */}

      {/* <SubHeader /> */}

      {/* <TwoColumns
          leftComponent={<App />}
          rightComponent={<App1 />}
        /> */}
      {/* <App />
        <App1 /> */}
      {/* <TeamBuilder /> */}
      {/* <TeamBuilder />
        <CricketMatchManager /> */}
      {/* <App /> */}
      <CreateTeam />
      {/* <MatchCard /> */}

      {/* </div> */}
    </div>
  );
};

export default Home;
