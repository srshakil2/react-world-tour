import { useState } from "react";
import Country from "../Country/Country";
import { useEffect } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  //
  const [goingCountry, setGoingCountry] = useState([]);
  const handelGoingCountry = (countrie) => {
    // console.log("testing going");
    setGoingCountry([...goingCountry, countrie]);
  };
  console.log(goingCountry);
  //
  //   console.log(countries);
  return (
    <div>
      <h2 className="text-center text-3xl p-4">
        Total countries: {countries.length}
      </h2>
      <div className="border-2 border-yellow-500 p-5 mb-3 ">
        <h4>Visited Country Is: {goingCountry.length}</h4>
        <div className=" grid grid-cols-5 gap-4 rounded-xl">
          {goingCountry.map((flagss) => {
            console.log(flagss);
            return <img src={flagss.flags.png} alt="" />;
          })}
        </div>
      </div>
      {/* visit countres */}
      <div className="border-2 border-purple-400 rounded-xl mb-3 p-4">
        <h3 className="text-xl font-semibold">Visited Countyr:</h3>
        <ul></ul>
      </div>
      <div className="grid grid-cols-3 gap-2 items-center ">
        {countries.map((countrie) => (
          <Country
            key={countrie.ccn3}
            countrie={countrie}
            handelGoingCountry={handelGoingCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
}
