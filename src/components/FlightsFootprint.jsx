import React, {useState} from "react";

function FlightsFootprint() {

    const [num, setNum] = useState(1);
    function handleChange(event) {
        // console.log(event.target.value);
        setNum(event.target.value);
    }

    const [flightFrom, setFlightFrom] = useState("DEL");
    function handleChangeFrom(event) {
        // console.log(event.target.value);
        setFlightFrom(event.target.value);
        
    }

    const [flightTo, setFlightTo] = useState("BOM");
    function handleChangeTo(event) {
        // console.log(event.target.value);
        setFlightTo(event.target.value);
    }

    const [flightClass, setFlightClass] = useState("economy");
    function handleChangeClass(event) {
        // console.log(event.target.value);
        setFlightClass(event.target.value);
    }

    const [roundTrip, setRoundTrip] = useState("Y");
    function handleChangeRoundTrip(event) {
        // console.log(event.target.value);
        setRoundTrip(event.target.value);
    }

    const [flightCarbon, setFlightCarbon] = useState(0);
    const [displayFlight, setDisplayFlight] = useState(false);
    function handleCalc(event) {
        event.preventDefault();
        sendFlightEstimateRequest();
        setTimeout(() => {
            setDisplayFlight(true)
        }, 1000);
    }

    // --------API--------

    function sendFlightEstimateRequest() {
        const payload = `iata_airport_from=${flightFrom}&iata_airport_to=${flightTo}&flight_class=${flightClass}&round_trip=${roundTrip}&number_of_passengers=${num}`;
    
        fetch("https://carbonsutra1.p.rapidapi.com/flight_estimate", {
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
            setFlightCarbon(data.data.co2e_kg);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    // ---------------------

    return(
        <div>
            <h1>Flights Footprint</h1>
            <form>
                <label htmlFor="num">No. of flights: </label>
                <input type="number" name="num" value={num} onChange={handleChange}/>&emsp;
                <label>Airport from: </label>
                <select className="airport" name="airportFrom" onChange={handleChangeFrom} value={flightFrom}>
                    <option value={"DEL"}>DEL Indira Gandhi International Airport</option>
                    <option value={"BOM"}>BOM Chhatrapati Shivaji International Airport</option>
                    <option value={"BLR"}>BLR Kempegowda International Airport</option>
                    <option value={"HYD"}>HYD Rajiv Gandhi International Airport</option>
                    <option value={"MAA"}>MAA Chennai International Airport</option>
                    <option value={"CCU"}>CCU Netaji Subhash Chandra Bose International Airport</option>
                    <option value={"AMD"}>AMD Sardar Vallabhbhai Patel International Airport</option>
                    <option value={"COK"}>COK Cochin International Airport</option>
                    <option value={"GOI"}>GOI Dabolim Airport</option>
                    <option value={"PNQ"}>PNQ Pune Airport / Lohagaon Air Force Station</option>
                </select>&emsp;
                <label>Airport To: </label>
                <select className="airport" name="airportTo" onChange={handleChangeTo} value={flightTo}>
                    <option value={"BOM"}>BOM Chhatrapati Shivaji International Airport</option>
                    <option value={"DEL"}>DEL Indira Gandhi International Airport</option>
                    <option value={"BLR"}>BLR Kempegowda International Airport</option>
                    <option value={"HYD"}>HYD Rajiv Gandhi International Airport</option>
                    <option value={"MAA"}>MAA Chennai International Airport</option>
                    <option value={"CCU"}>CCU Netaji Subhash Chandra Bose International Airport</option>
                    <option value={"AMD"}>AMD Sardar Vallabhbhai Patel International Airport</option>
                    <option value={"COK"}>COK Cochin International Airport</option>
                    <option value={"GOI"}>GOI Dabolim Airport</option>
                    <option value={"PNQ"}>PNQ Pune Airport / Lohagaon Air Force Station</option>
                </select><br /><br />
                <label>Flight Class: </label>
                <select name="flightClass" onChange={handleChangeClass} value={flightClass}>
                    <option value={"economy"}>Economy</option>
                    <option value={"premium"}>Premium</option>
                    <option value={"business"}>Business</option>
                    <option value={"first"}>First</option>
                </select>&emsp;
                <label>Round Trip: </label>
                <select name="roundTrip" onChange={handleChangeRoundTrip} value={roundTrip}>
                    <option value={"Y"}>Y</option>
                    <option value={"N"}>N</option>
                </select>&emsp;&emsp;&emsp;&emsp;&nbsp;
                <button onClick={handleCalc}>CALCULATE</button>
                <h1 id="flightEmissions">{displayFlight ? `Carbon Footprint: ${flightCarbon} kgs` : ""}</h1>
            </form>
        </div>
    );
}

export default FlightsFootprint;