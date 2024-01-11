import React, { useEffect } from "react";
import axios from "axios";

export default function ContriesAPI(props) {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        props.setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  return <></>;
}
