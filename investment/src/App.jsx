import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  let validInput = inputValue.duration >= 1;

  function handleChange(identifier, newValue) {
    setInputValue((prevInputValue) => {
      return {
        ...prevInputValue,
        [identifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input change={handleChange} userInput={inputValue} />
      {validInput && <Result userInput={inputValue}/>}
      {!validInput && <p className="center">Please enter valid a valid duration</p>}
    </>
  );
}

export default App;
