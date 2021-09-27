import { useEffect, useState } from "react";
import InfoAboutOneCountry from "./InfoAboutOneCountry";

const OutputCountries = ({ countriesTitle, collectionCountries, error, dataLoading }) => {
  const [boolean, setBoolean] = useState(false);
  const [oneCountryData, setOneCountryData] = useState({});

  useEffect(() => {
    setBoolean(false);
  }, [countriesTitle]);

  if (!countriesTitle) {
    return <p>Please, type something to search field</p>;
  }

  if (error) {
    return <p>{typeof error === "object" ? error.toString() : error}</p>;
  }

  if (dataLoading) {
    return <p>Loading...</p>;
  }

  if (collectionCountries.length === 1) {
    const [country] = collectionCountries;
    return <InfoAboutOneCountry oneCountryData={country} />;
  }

  if (collectionCountries.length > 1) {
    const countriesName = collectionCountries.map((country) => {
      return (
        <div key={country.name}>
          <p style={{ display: "inline-block", margin: `5px 5px 5px 0` }}>{country.name}</p>
          <button
            onClick={() => {
              setOneCountryData(country);
              setBoolean(true);
            }}
          >
            show
          </button>
        </div>
      );
    });

    return <>{boolean ? <InfoAboutOneCountry oneCountryData={oneCountryData} /> : countriesName}</>;
  }

  if (collectionCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return null;
};

export default OutputCountries;
