import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fecthData = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await fetch(url);
  //         if (!response.ok) {
  //           const text = await response.statusText;
  //           const code = await response.status;
  //           throw Error(`Error code is ${code} and Message is ${text}`);
  //         }
  //         const jsonResponse = await response.json();
  //         setData(jsonResponse);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fecthData();
  //   }, [url]);

  //   return { loading, data, error };

  // Using Axios
  useEffect(() => {
    if (url === null) return;
    (async function () {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { loading, data, error };
}

export default useFetch;
