import React from "react";
import Navbar from "../Navbar";
import {Link} from "react-router-dom";

function Home() {

    return(
        <div>
            <Navbar active = "home"/>
            <div className="home-one">
                <div className="left">
                    <div className="in">
                        <Link to="/reduce"><p>HOW TO HELP</p></Link>
                        <h1>Calculate Your Carbon Footprint</h1>
                    </div>
                </div>
                <div className="right">
                    <img src="tnc_90495476_Full.jpg" alt="trees"/>
                </div>
            </div>
            <div className="home-two">
                <div className="in">
                    <p>Use our interactive calculator to learn your carbon footprint and actions to take to reduce it.</p>
                </div>
            </div>
            <div className="home-three">
                <div className="left">
                    <img src="tnc_26930527_Full.jpg" alt="what"/>
                </div>
                <div className="right">
                    <div className="in">
                        <h1>What is a <span className="txt-color">carbon footprint</span>?</h1>
                        <p>A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) 
                            that are generated by our actions.</p>
                        <p>The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world. 
                            Globally, the average carbon footprint is closer to 4 tons. To have the best chance of avoiding a 2℃ rise in global temperatures, 
                            the average global carbon footprint per year needs to drop to under 2 tons by 2050.</p>
                        <p> Lowering individual carbon footprints from 16 tons to 2 tons doesn't happen overnight! By making small changes to our actions, 
                            like eating less meat, taking fewer connecting flights and line drying our clothes, we can start making a big difference.</p>
                    </div>
                </div>
            </div>
            
            <div className="home-four"></div>
            
        </div>
    );
}

export default Home;