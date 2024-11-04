import { useEffect, useState } from "react";
import dataMocked from "../data.json";

const URL_API = "http://localhost:3001";

// permet d'utiliser les données mocké
const MOCKED = true;

console.info(
  MOCKED ? "Les données sont mocker" : "Les données viennent du service"
);

const useFetch = (userId, endpoint, defaultData) => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (MOCKED) {
      setData(dataMocked[userId][endpoint].data);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    fetch(`${URL_API}/user/${userId}/${endpoint}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => json?.data)
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError("Échec de chargement des données");
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [userId, endpoint]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
