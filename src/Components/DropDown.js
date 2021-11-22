import Dropdown from "react-bootstrap/DropDown";
import React, { useEffect, useState } from "react";
import countriesJson from "../assets/countries";
import CountryCard from "../Components/CountryCard";
import ToggleDropdown from "../Components/ToggleDropdown";
// import InputHook from "./InputHook";
const arrOfCountries = countriesJson.map(obj => obj);

function DropDown(props) {
  const [countryCard, setCountryCard] = useState("Country Name");
  const [countryList, setCountryList] = useState(arrOfCountries);

  useEffect(() => {
    const filtered = arrOfCountries.filter(obj => {
      if (!countryCard.trim()) return; // makes sure empty string doesn't trip out
      return obj.name.toLowerCase().includes(countryCard.toLowerCase());
    });
    setCountryList(filtered);
  }, [countryCard]); // countryList ?

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <ToggleDropdown
          onInputChange={e => setCountryCard(e.target.value)}
          country={countryCard}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="drop-menu">
        {countryList.map((obj, i) => {
          return (
            <CountryCard
              onClick={e => {
                console.log(e.target.textContent);
                setCountryCard(e.target.textContent);
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
