import React from "react";
import {Link} from "react-router-dom";

function Navbar(props) {
    var home, calc, reduce, offset;
    switch (props.active) {
        case "home": home = "active";
            break;
        case "calc": calc = "active";
            break;
        case "reduce": reduce = "active";
            break;
        case "offset": offset = "active";
            break;
        default: break;
    }
    return(
        <div class="topnav">
            <Link class={home} to="/">Home</Link>
            <Link class={calc} to="/calc">Carbon Footprint Calculator</Link>
            <Link class={reduce} to="/reduce">Reduce Yours</Link>
            <Link class={offset} to="/offset">Offset</Link>
        </div>
    );
}

export default Navbar;