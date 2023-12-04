import React, { useState } from "react";
import axios from "axios";

function useAxios ( url ) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const addData = async (restOfUrl = false) => {
    try {


      console.log('url', url)
      console.log('restOfUrl', restOfUrl)

      let response;
      if (restOfUrl) {
        console.log('passed restOfUrl')
        response = await axios.get(`${url}${restOfUrl}`);
      }
      else if (restOfUrl === false) {
        console.log('passed false')
        response = await axios.get(url);
      }
      
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
// function useAxios ( url ) {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   const addData = async (restOfUrl = '') => {
//     try {
//       const response = await axios.get(`${url}${restOfUrl}`);
//       setData(prevData => [...prevData, response.data]);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   const clearData = () => {
//     setData([]);
//   };

//   return [data, addData, clearData, error];
// }
// function useAxios ( url ) {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   const addData = async () => {
//     try {
//       const response = await axios.get(url);
//       setData(data => [...data, response.data]);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   const clearData = () => {
//     setData([]);
//   };

//   return [data, addData, clearData, error];
// }

export default useAxios;