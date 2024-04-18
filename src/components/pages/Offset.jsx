import React from "react";
import Navbar from "../Navbar";

function Offset() {
    return(
        <div>
            <Navbar active = "offset"/>
            <div className="offset-one">
                <img src="why_create_greenprint_hero.jpg" alt="offset" />
            </div>
            <div className="offset-two">
                <div className="in">
                    <h1><span className="txt-color">Offset</span> Your Carbon Footprint</h1>
                    <p>and <span className="txt-color">reshape</span> your climate impact</p>
                </div>
            </div>
            <div className="offset-three">
                <div className="left">
                    <div className="in">
                        <h1>What is <span className="txt-color">Carbon Offsetting</span>?</h1>
                        <p>Carbon offsetting is the process of funding projects that reduce or remove 
                            greenhouse gas emissions to compensate for one's own emissions, in order to 
                            achieve a net zero carbon footprint.</p>
                        <p>Each ton of carbon absorbed from the atmosphere constitutes a carbon credit or 
                            carbon offset. To make sure these credits are legit, they have to be approved 
                            by independent groups like Verra or Gold Standard. These groups make sure the 
                            project is actually making a positive impact on the environment and wouldn't have 
                            happened without the project. ClimateTrade also does extra work to make sure everything 
                            is legit, like using blockchain to keep track of the credits so they're not counted twice.</p>
                    </div>
                </div>
                <div className="right">
                    <img src="offsetting.jpeg" alt="what"/>
                </div>
            </div>
            <iframe title="offset" src="https://sustainabletravel.org/wp-content/plugins/sti_client/src/shortcode/shortcode.php?api_key=STIKEY_66182a1217f5b100745686&primary_color=%2332cd32&secondary_color=%23333333&light_primary_color=%23fefffe&sort_order=Flight%2CCar"></iframe>
        </div>
    );
}

export default Offset;