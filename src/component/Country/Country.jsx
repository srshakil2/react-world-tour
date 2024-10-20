import { useState } from "react";

export default function Country({ countrie, handelGoingCountry }) {
  const { name, flags, capital } = countrie;
  // console.log(countrie);
  // console.log(countrie.name);
  const [visited, setVisited] = useState(false);
  const handelVisit = () => {
    setVisited(!visited);
  };
  return (
    <div className="border-2 border-green-400 p-3 rounded-xl space-y-3">
      <h2 className="text-xl">Name : {name.common}</h2>
      <h4>Capital City : {capital}</h4>
      <img className=" h-[200px]" src={flags.png}></img>
      <div className="flex justify-between">
        <button onClick={handelVisit}>{visited ? "Visited" : "Visit"}</button>
        <h4 className=" font-bold">{visited && "I'm visited this country"}</h4>
      </div>
      <button onClick={() => handelGoingCountry(countrie)}>Going To</button>
    </div>
  );
}
