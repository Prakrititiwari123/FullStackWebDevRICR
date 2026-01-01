import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";
// import from axios;

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt,setFromAmt]=useState("");
  const [,set]=useState("");
  //   console.log(CountryData)
  const Convert=async()=>{
    if(!from || !to || !fromAmt)
    {
        toast.error("Some fields missing")
        return;
    }
    try {
        
    } catch (error) {
        
    }
  }


  return (
    <>
      <div className="bg-amber-50 h-screen p-5">
        <div className=" w-3xl bg-white rounded shadow border p-3 mx-auto space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex  gap-3">
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split(" ")[1]}/flat/64.png`}
                  alt=""
                />
              )}
              <select
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border p-3 rounded overflow-hidden w-full"
              >
                <option value="">--Select country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex  gap-3">
              {to && (
                <img
                  src={`https://flagsapi.com/${to.split(" ")[1]}/flat/64.png`}
                  alt=""
                />
              )}
              <select
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border p-3 rounded overflow-hidden w-full"
              >
                <option value="">--Select country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <label htmlFor="fromAmt">Amount</label>
            <input
              type="text"
              name="fromAmt"
              placeholder="Enter ur amount to convert"
              className="border rounded p-3 w-full"
            />
          </div>
          <div className="flex">
            <button className="bg-green-500 text-green-900  hover:bg-green-600 hover:text-white px-4 py-2  border rounded  hover:shadow" onClick={Convert}>Convert</button>
          <div className="border"></div>
          </div>
          <div className=" flex gap-3 items-center">
            <label htmlFor="toAmt">Converted Amount: XXXXXX</label>
            
          </div>
          <div className="border"></div>
        </div>
        
      </div>
    </>
  );
};

export default Currency;
