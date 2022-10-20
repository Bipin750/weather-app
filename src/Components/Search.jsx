import React, { useRef } from "react";

export default function Search(props) {
  const searchInput = useRef();
  return (
    <div className="flex shadow-xl">
      <input
        type="search"
        value={props.searchData}
        placeholder="Enter city name"
        className="border-bottom border-dark rounded w-full p-3 text-2xl bg-blue-100 outline-none"
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
      />
      <button onClick={props.searchWeather} className="btn bg-info   ">
        Search
      </button>
    </div>
  );
}
