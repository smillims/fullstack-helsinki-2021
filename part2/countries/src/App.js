import { useEffect, useState } from "react";
import OutputCountries from "./components/OutputCountries";

const App = () => {
  const [countriesTitle, setCountriesTitle] = useState("");
  const [collectionCountries, setCollectionCountries] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (countriesTitle) {
      setDataLoading(true);
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => {
          const countries = data.filter((item) =>
            item.name.toLowerCase().includes(countriesTitle.toLowerCase())
          );

          if (countries.length === 0) {
            const error = `Please input valid name`;
            throw Error(error);
          }

          setError(null);
          setCollectionCountries(countries);
        })
        .catch(setError)
        .finally(() => setDataLoading(false));
    }
  }, [countriesTitle]);

  const checkCountries = (event) => {
    setCountriesTitle(event.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="findCountriesInput">find countries: </label>
        <input type="text" id="findCountriesInput" onChange={(event) => checkCountries(event)} />
      </form>
      <div>
        <OutputCountries
          countriesTitle={countriesTitle}
          collectionCountries={collectionCountries}
          error={error}
          dataLoading={dataLoading}
        />
      </div>
    </>
  );
};

export default App;
