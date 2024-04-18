import React, { useState } from "react";

function VehiclesFootprint() {

    const [type, setType] = useState("Car-Type-Mini");
    function handleType(event) {
        setType(event.target.value);
    }

    const [dist, setDist] = useState(0);
    function handleDist(event) {
        setDist(event.target.value);
    }

    const [unit, setUnit] = useState("km");
    function handleUnit(event) {
        setUnit(event.target.value);
    }

    const [vehicleCarbon, setVehicleCarbon] = useState(0);
    const [displayVehicle, setDisplayVehicle] = useState(false);
    function handleCalc(event) {
        event.preventDefault();
        sendVehicleEstimateRequest();
        setTimeout(() => {
            setDisplayVehicle(true)
        }, 1000);
    }

    function sendVehicleEstimateRequest() {
        const payload = `vehicle_type=${type}&distance_value=${dist}&distance_unit=${unit}`;
    
        fetch("https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_type", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx",
                "X-RapidAPI-Key": "4822497b4amsh82173e44eba23adp1c15e7jsnbae97eb1235c",
                "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com"
            },
            body: payload
        })
        .then(response => response.json())
        .then(data => {
            setVehicleCarbon(data.data.co2e_kg); // Do something with the response data
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    

    return(
        <div>
            <h1>Vehicles Footprint</h1>
            <form>
                <label htmlFor="type">Type of Vehicle: </label>
                <select name="type" onChange={handleType} value={type}>
                    <option value={"Car-Type-Mini"}>Car-Type-Mini</option>
                    <option value={"Car-Type-Supermini"}>Car-Type-Supermini</option>
                    <option value={"Car-Type-LowerMedium"}>Car-Type-LowerMedium</option>
                    <option value={"Car-Type-UpperMedium"}>Car-Type-UpperMedium</option>
                    <option value={"Car-Type-Executive"}>Car-Type-Executive</option>
                    <option value={"Car-Type-Luxury"}>Car-Type-Luxury</option>
                    <option value={"Car-Type-Sports"}>Car-Type-Sports</option>
                    <option value={"Car-Type-4x4"}>Car-Type-4x4</option>
                    <option value={"Car-Type-MPV"}>Car-Type-MPV</option>
                    <option value={"Car-Size-Small"}>Car-Size-Small</option>
                    <option value={"Car-Size-Medium"}>Car-Size-Medium</option>
                    <option value={"Car-Size-Large"}>Car-Size-Large</option>
                    <option value={"Car-Size-Average"}>Car-Size-Average</option>
                    <option value={"Motorbike-Size-Small"}>Motorbike-Size-Small</option>
                    <option value={"Motorbike-Size-Medium"}>Motorbike-Size-Medium</option>
                    <option value={"Motorbike-Size-Large"}>Motorbike-Size-Large</option>
                    <option value={"Motorbike-Size-Average"}>Motorbike-Size-Average</option>
                    <option value={"Bus-LocalAverage"}>Bus-LocalAverage</option>
                    <option value={"Bus-Coach"}>Bus-Coach</option>
                    <option value={"Taxi-Local"}>Taxi-Local</option>
                    <option value={"Train-National"}>Train-National</option>
                    <option value={"Train-Local"}>Train-Local</option>
                    <option value={"Train-Tram"}>Train-Tram</option>
                </select>&emsp;
                <label htmlFor="dist">Distance Travelled: </label>
                <input type="number" name="dist" onChange={handleDist} value={dist}/>&emsp;
                <label htmlFor="unit">Unit: </label>
                <select name="unit" onChange={handleUnit} value={unit}>
                    <option value={"km"}>kms</option>
                    <option value={"mi"}>miles</option>
                </select>&emsp;
                <button onClick={handleCalc}>CALCULATE</button>
                <h1 id="vehicleEmissions">{displayVehicle ? `Carbon Footprint: ${vehicleCarbon} kgs` : ""}</h1>
            </form>
        </div>
    );

}

export default VehiclesFootprint;