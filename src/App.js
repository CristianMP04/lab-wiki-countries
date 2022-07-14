// src/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import {Routes, Route} from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import countries from './countries.json';

function App() {
  return <div className="App">
    <Navbar />
    <CountriesList countries={countries} />
    <Routes>
        <Route path="/:id" element={ <CountryDetails countries={countries}/> } />
    </Routes>
    
    
  </div>;
}
export default App;