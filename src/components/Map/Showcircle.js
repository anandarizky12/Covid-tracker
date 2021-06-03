import React from 'react';
import numeral from 'numeral';
import {Circle,Popup} from "react-leaflet";
import './Map.css';
const casesTypeColors = {
    cases: {
      hex: "#f7b202",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 2000,
    },
  };

export const Showcircle=(data,casestype)=> 

    data.map((country) => (
        <Circle 
          center={[country.countryInfo.lat, country.countryInfo.long]}
          pathOptions={{color: casesTypeColors[casestype].hex,
         }}
       
          fillOpacity={0.4}
          radius={
            Math.sqrt(country[casestype]/10) * casesTypeColors[casestype].multiplier
          
          }
        >
          <Popup>
               <div className="info-container">
                <div
                    className="info-flag"
                    style={{ backgroundImage: `url(${country.countryInfo.flag})`,backgroundPosition: `center` }}
                />
                <div className="info-name">{country.country}</div>
                <div className="info-confirmed">
                    Cases: {numeral(country.cases).format("0,0")}
                </div>
                <div className="info-recovered">
                    Recovered: {numeral(country.recovered).format("0,0")}
                </div>
                <div className="info-deaths">
                    Deaths: {numeral(country.deaths).format("0,0")}
                </div>
                </div>
          </Popup>
        </Circle>
      ));



