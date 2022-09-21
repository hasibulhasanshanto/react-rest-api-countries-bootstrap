import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="countries">
      <div className="container">
        <div className="row">
          {countries.map((country, index) => (
            <Country country={country} key={index}></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
