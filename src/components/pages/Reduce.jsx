import React from "react";
import Navbar from "../Navbar";
import Card from "../Card";
import reduce_person from "../reduce-person";
import reduce_company from "../reduce-company";

function generateCard(card) {
    return(
        <Card 
            key = {card.id}
            img = {card.img}
            name = {card.name}
            desc = {card.desc}
        />
    );
}

function Reduce() {
    return(
        <div>
            <Navbar active = "reduce"/>
            <div className="reduce-one">
                <img src="NH_SOAR_20201011_Monkman_NHGBS_D30050_resize_3200x1000.jpg" alt="take-action"/>
                <div className="in">
                    <h1>Take Action Now</h1>
                </div>
            </div>
            <div className="reduce-two">
                <h1>Here are some ways by which <span className="txt-color">you</span> can reduce your carbon footprint</h1>
            </div>
            <dl className="dictionary">
                {reduce_person.map(generateCard)}
            </dl>
            <div className="reduce-two">
                <h1>Here are some measures <span className="txt-color">companies</span> can adopt to reduce their carbon footprint</h1>
            </div>
            <dl className="dictionary">
                {reduce_company.map(generateCard)};
            </dl>
        </div>
    );
}

export default Reduce;