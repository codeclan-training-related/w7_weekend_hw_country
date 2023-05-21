import React, { useState, useEffect } from "react";
import CountrySelect from "../components/CountrySelect";
import CountryDetails from "../components/CountryDetails";
// import Capital from "../components/Capital";


const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  //what is thi(s code for?
//   The useEffect hook is used to fetch the list of countries from the API and update the component state (countries) with the retrieved data. It is executed only once, immediately after the initial render, due to the empty dependency array [] passed as the second argument. The purpose of this useEffect is to fetch the data and set the initial state of countries.
  useEffect(() => {
    console.log('useeffect test')
    getCountries();
  }, []);

//   todo: interpret code below:
//   The getCountries function makes a GET request to the specified API endpoint and updates the component state with the received country data using the setCountries function.
 const getCountries = function () {
    fetch("https://restcountries.com/v3.1/all")
    //get respons and trun into javascript from json
      .then((res) => res.json())
    //   then oup data into function
      .then((countries) => setCountries(countries));
  };


//call onCountrySelected function with index->find the desired country->set it to country to u
// allocate the unique country with index number
  const onCountrySelected = function (index) {
    const country = countries[index];
    setSelectedCountry(country);
  };


  return (
    <div className="main-container">
     
      <CountrySelect
        countries={countries}
        onCountrySelected={onCountrySelected}
        //pass down the countries info and selected countries info/both prop
      />
      {selectedCountry ? <CountryDetails country={selectedCountry} /> : null}

      {/* <Capital country={selectedCountry}  onCountrySelected={onCountrySelected}/> */}
    </div>
  );
};

export default CountryContainer;
