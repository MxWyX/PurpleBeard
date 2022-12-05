import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../CustomeHooks/useFetch";
import Data from "./Data";
import Error from "./Error";
import Loader from "./Loader";

const WeatherContainer = () => {
  const city = `Northampton`;
  const apiKey = `fb8ccf6479bfb6396d3471c968b19e68`;
  const { data, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  return (
    <div>
      <h1>Async Programming</h1>
      {loading && <Loader />}
      {error && <Error message={error.message} />}
      {data ? <Data data={data} /> : ""}
    </div>
  );
};

export default WeatherContainer;
