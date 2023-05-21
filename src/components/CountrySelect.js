import React from "react";
// import ListItem from './ListItem';

const CountrySelect = ({ countries, onCountrySelected }) => {
  //we have got 2 arries to break down to get each country's info and give to a key and index num
  const countryItems = countries.map((country, index) => {
    return (
      <option value={index} key={index}>
        {country.name.common}
        {country.flag}
      </option>
    );

    //   return <ListItem country={country} key={index}
    // //   counrt is an array, key is the index, index is index
    //     index={index}
    //   />
  });
  if (countries.length === 0) {
    return null;
  }

  const handleSelect = (event) => {
    onCountrySelected(event.target.value);
  };

  return (
    <div>
    Choose a country and take quiz: 
    {/* when i change the selection, I will call handleSelect function, it has value already */}
      <select onChange={handleSelect}>{countryItems}</select>
    </div>
  );
};

export default CountrySelect;
