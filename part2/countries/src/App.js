import { useEffect, useState } from "react";
import OutputCountries from "./components/OutputCountries";

const App = () => {
  const [countriesTitle, setCountriesTitle] = useState("");
  const [collectionCountries, setCollectionCountries] = useState([]);

  useEffect(() => {
    if (countriesTitle !== "") {
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => {
          const countries = data.filter((item) =>
            item.name.toLowerCase().includes(countriesTitle.toLowerCase())
          )

          setCollectionCountries(countries);
        })
        .catch(error => console.log(error))
    }

    if (countriesTitle === "") {
      setCollectionCountries([]);
    }
  }, [countriesTitle]);


  const checkCountries = (event) => {
    setCountriesTitle(event.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="findCountriesInput">find countries: </label>
        <input type="text" id="findCountriesInput" onInput={(event) => checkCountries(event)} />
      </form>
      <div>
        <OutputCountries countriesTitle={countriesTitle} collectionCountries={collectionCountries} />
      </div>
    </>
  );
};

export default App;
