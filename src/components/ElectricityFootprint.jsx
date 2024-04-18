import React, { useState } from "react";

function ElectricityFootprint() {

    const [country, setCountry] = useState("India");
    function handleCountry(event) {
        setCountry(event.target.value);
    }

    const [consumed, setConsumed] = useState(0);
    function handleConsumed(event) {
        setConsumed(event.target.value);
    }

    const [unit, setUnit] = useState("MWh");
    function handleUnit(event) {
        setUnit(event.target.value);
    }

    const [electricityCarbon, setElectricityCarbon] = useState(0);
    const [displayElectricity, setDisplayElectricity] = useState(false);
    function handleCalc(event) {
        event.preventDefault();
        sendElectricityEstimateRequest();
        setTimeout(() => {
            setDisplayElectricity(true)
        }, 1000);
    }


    function sendElectricityEstimateRequest() {
        const payload = `country_name=${country}&electricity_value=${consumed}&electricity_unit=${unit}`;
    
        fetch("https://carbonsutra1.p.rapidapi.com/electricity_estimate", {
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
            setElectricityCarbon(data.data.co2e_kg); // Do something with the response data
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    

    return(
        <div>
            <h1>Electricity Footprint</h1>
            <form>
                <label htmlFor="country">Country: </label>
                <select name="country" onChange={handleCountry} value={country}>
                    <option value={"Australia"}>Australia</option>
                    <option value={"Bangladesh"}>Bangladesh</option>
                    <option value={"Belgium"}>Belgium</option>
                    <option value={"Bulgaria"}>Bulgaria</option>
                    <option value={"Cambodia"}>Cambodia</option>
                    <option value={"Canada"}>Canada</option>
                    <option value={"China"}>China</option>
                    <option value={"Denmark"}>Denmark</option>
                    <option value={"Finland"}>Finland</option>
                    <option value={"France"}>France</option>
                    <option value={"Germany"}>Germany</option>
                    <option value={"Greece"}>Greece</option>
                    <option value={"Hong Kong"}>Hong Kong</option>
                    <option value={"Hungary"}>Hungary</option>
                    <option value={"India"}>India</option>
                    <option value={"Indonesia"}>Indonesia</option>
                    <option value={"Italy"}>Italy</option>
                    <option value={"Japan"}>Japan</option>
                    <option value={"Luxembourg"}>Luxembourg</option>
                    <option value={"Malaysia"}>Malaysia</option>
                    <option value={"Maldives"}>Maldives</option>
                    <option value={"Mongolia"}>Mongolia</option>
                    <option value={"Myanmar"}>Myanmar</option>
                    <option value={"Nepal"}>Nepal</option>
                    <option value={"Netherlands"}>Netherlands</option>
                    <option value={"New Zealand"}>New Zealand</option>
                    <option value={"North Korea"}>North Korea</option>
                    <option value={"Norway"}>Norway</option>
                    <option value={"Pakistan"}>Pakistan</option>
                    <option value={"Papua New Guinea"}>Papua New Guinea</option>
                    <option value={"Philippines"}>Philippines</option>
                    <option value={"Poland"}>Poland</option>
                    <option value={"Portugal"}>Portugal</option>
                    <option value={"Qatar"}>Qatar</option>
                    <option value={"Romania"}>Romania</option>
                    <option value={"Singapore"}>Singapore</option>
                    <option value={"South Korea"}>South Korea</option>
                    <option value={"Spain"}>Spain</option>
                    <option value={"Sri Lanka"}>Sri Lanka</option>
                    <option value={"Sweden"}>Sweden</option>
                    <option value={"Thailand"}>Thailand</option>
                    <option value={"UK"}>UK</option>
                    <option value={"USA"}>USA</option>
                </select>&emsp;
                <label htmlFor="consumed">Electricity consumed: </label>
                <input type="number" name="consumed" onChange={handleConsumed} value={consumed}/>&emsp;
                <label htmlFor="unit">Unit: </label>
                <select name="unit" onChange={handleUnit} value={unit}>
                    <option value={"kWh"}>kWh</option>
                    <option value={"MWh"}>MWh</option>
                </select>&emsp;
                <button onClick={handleCalc}>CALCULATE</button>
                <h1 id="electricityEmissions">{displayElectricity ? `Carbon Footprint : ${electricityCarbon} kgs` : ""}</h1>
            </form>
        </div>
    );
}

export default ElectricityFootprint;