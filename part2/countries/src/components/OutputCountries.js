const OutputCountries = ({ countriesTitle, collectionCountries }) => {
  if (collectionCountries.length === 0) return <p>Please, input valid name</p>

  if (collectionCountries.length > 10) return <p>Too many matches, specify another filter</p>;

  if (collectionCountries.length === 2) {
    const searchingCountry = collectionCountries.find(
      (item) => item.name.toLowerCase() === countriesTitle.toLowerCase()
    );


    if (searchingCountry === undefined)
      return collectionCountries.map((country) => <p key={country.name}>{country.name}</p>);

    const { name, languages, capital, population, flag } = searchingCountry;

    return (
      <div key={name}>
        <h2>{name}</h2>
        <p>capital is {capital}</p>
        <p>population is {population}</p>
        <div>
          <h3>Language</h3>
          <ul>
            {languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
        </div>
        <img src={flag} alt="flag" style={{ maxWidth: 300 }} />
      </div>
    );
  }

  if (collectionCountries.length === 1)
    return collectionCountries.map((country) => {
      const { name, languages, capital, population, flag } = country;

      return (
        <div key={name}>
          <h2>{name}</h2>
          <p>capital is {capital}</p>
          <p>population is {population}</p>
          <div>
            <h3>Language</h3>
            <ul>
              {languages.map((language) => (
                <li key={language.name}>{language.name}</li>
              ))}
            </ul>
          </div>
          <img src={flag} alt="flag" style={{ maxWidth: 300 }} />
        </div>
      );
    });

  if (collectionCountries.length > 1)
    return collectionCountries.map((country) => <p key={country.area}>{country.name}</p>);

  return <p>Please, type something to search input</p>;
};

export default OutputCountries;
