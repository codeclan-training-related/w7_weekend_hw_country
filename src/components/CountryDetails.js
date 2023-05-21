import React, { useState, useEffect } from "react";

const CountryDetail = ({ country, addNewNote }) => {
  const [answer, setAnswer] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [saved,setSaved]=useState(false)

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleClick = () => {
    setButtonClicked(true);
  };

  
  const handleSave=()=>{
    if (!saved)
        addNewNote();
      
       
  }

  const capital = country.capital.length !== 0 ? country.capital[0] : null;

  const checkAnswer = () => {
    if (buttonClicked && answer.toLowerCase() !== capital.toLowerCase()) {
      return `Not really. Answer is ${capital}.`;
    } else if (
      buttonClicked &&
      answer.toLowerCase() === capital.toLowerCase()
    ) {
      return "Correct!";
    }
  };

  useEffect(() => {
    setAnswer(""); // Reset the answer when a new country is selected
    setButtonClicked(false); // Reset the buttonClicked state
    setSaved(false)

  }, [country]); // Trigger the effect when the country prop changes

  return (
    <div className="country-detail">
      <>
        Where is the capital of {country.name.common}?
        <input type="text" value={answer} onChange={handleChange} />
        <button onClick={handleClick}>check</button>
        <p>{checkAnswer()}</p>
        {buttonClicked && <button onClick={handleSave}>Save</button>}
      </>
    </div>
  );
};

export default CountryDetail;
