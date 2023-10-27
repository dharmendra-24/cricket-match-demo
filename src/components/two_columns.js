import React from "react";
import "./CoinToss.css";

function TwoColumns({ leftComponent, rightComponent }) {
    return (
        <div className="two-columns-container">
            <div className="column">{leftComponent}</div>
            <div className="column">{rightComponent}</div>
        </div>
    );
}

export default TwoColumns;

