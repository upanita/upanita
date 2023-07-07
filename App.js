import "./styles.css";
import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"]
  },
  {
    name: "Pak",
    value: "PK",
    cities: ["Lahore", "Karachi"]
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chitangong"]
  }
];

export default function App() {
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });
  return (
    <div className="App">
      <h1>Dropdown</h1>
      <select
        value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return <option value={index}>{item.name}</option>;
        })}
      </select>
      <select value={country}>
        {countries[country]?.cities.map((item, index) => {
          return <option value={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}
