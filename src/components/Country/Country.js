import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, flags, capital, region } = props.country;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card border-info my-3">
        <img src={flags.png} className="card-img-top" alt="one" />
        <div className="card-body">
          <h5 className="card-title">{name.common}</h5>
          <p className="card-text">{name.official}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital: {capital?.[0]}</li>
          <li className="list-group-item">Region: {region}</li>
          <li className="list-group-item">Population: {population}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
