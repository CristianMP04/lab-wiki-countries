import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const { id } = useParams();
  const country = props.countries.find((elem) => {
    return elem.alpha3Code === id;
  });
  console.log(country);
  return (
    <div>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name}></img>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area {country.area} Km²</p>
      <h5>Borders</h5>
                            {country.borders.map((border) =>
                                <ul key={`${border}`}>
                                    <Link to={`/${border}`}>{border}</Link>
                                </ul>
                            )}
    </div>
  );
}

export default CountryDetails;
