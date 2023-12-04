import React, { useState } from "react";
import axios from "axios";

function useAxios ( url ) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const addData = async (restOfUrl='') => {
    try {
      const response = await axios.get(`${url}${restOfUrl}`);
      
      setData(prevData => [...prevData, response.data]);
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