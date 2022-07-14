
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      {props.countries.map((country) => (
        <Link to={`/${country.alpha3Code}`}>
          <h5>{country.name.common}</h5>
        </Link>
      ))}
    </div>
  );
}
export default CountriesList;
