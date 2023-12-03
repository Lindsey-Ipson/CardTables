import React, { useState } from "react";
import axios from "axios";

function useAxios ( url ) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const addData = async () => {
    try {
      const response = await axios.get(url);
      setData(data => [...data, response.data]);
    } catch (error) {
      setError(error);
    }
  };

  const clearData = () => {
    setData([]);
  };

  return [data, addData, clearData, error];
}

export default useAxios;