import React from "react";

function Card(props) {
    return(
        <div className="term">
            <dt>
                <span className="pic" role="img">
                    <img src = {props.img} alt="img"/>
                </span>
                <span>{props.name}</span>
            </dt>
            <dd>
               {props.desc}
            </dd>
        </div>
    );
}

export default Card;