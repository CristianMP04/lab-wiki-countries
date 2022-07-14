import countries from '../countries.json'
import { Link } from 'react-router-dom'

function CountriesList() {
    return (
        <div>
            
            {countries
                .map((country) => (
                    <div>
                        <Link to={`/`}>
                            <div>
                                
                                <div>
                                    <h5>{country.alpha3Code}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

        </div>
    )
}
export default CountriesList