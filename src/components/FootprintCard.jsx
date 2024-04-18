import React from "react";

function FootprintCard(props) {
    return(
        <div className="footprintCard">
            <img src={props.svg} alt="svg-icon"/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default FootprintCard;