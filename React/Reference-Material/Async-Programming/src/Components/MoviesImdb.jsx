import React from "react";
import Data from "./Data";
import Error from "./Error";
import Loader from "./Loader";
import useFetch from "../CustomeHooks/useFetch";

const MoviesImdb = () => {
  const apiKey = `k_l1bfsd50`;
  const { data, loading, error } = useFetch(
    `https://imdb-api.com/en/API/Top250Movies/${apiKey}`
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

export default MoviesImdb;
