import React, { useState } from 'react';
import axios from 'axios';

import countriesJson from './countries.json';
import TopPage from './pages/TopPage';

import './App.css';

function App() {
  const [country, setCountry] = useState('');
  const getCountryData = () => {
    axios
      .get(`https://api.covid19api.com/country/${country}`)
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
    </div>
  );
}

export default App;
