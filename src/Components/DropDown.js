import Dropdown from "react-bootstrap/DropDown";
import React, { useEffect, useState } from "react";
import countriesJson from "../assets/countries";
import CountryCard from "../Components/CountryCard";
import ToggleDropdown from "../Components/ToggleDropdown";
import InputHook from "./InputHook";

function DropDown(props) {
  const [country, setCountry] = useState("Country Name");

  useEffect(() => {
    console.log(country);
  });

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <ToggleDropdown
          onInputChange={e => setCountry(e.target.value)}
          country={country}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="drop-menu">
        {countriesJson.map((obj, i) => {
          return (
            <CountryCard
              onClick={e => {
                console.log(e.target.textContent);
                setCountry(e.target.textContent);
              }}
              name={obj.name}
              key={i}
              pic={obj.code}
            />
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
