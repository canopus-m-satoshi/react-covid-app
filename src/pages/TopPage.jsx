import React from 'react';
import Results from '../components/Results';
import Selector from '../components/Selector';

import Title from '../components/Title';

const TopPage = (props) => {
  const { countriesJson, setCountry, getCountryData } = props;

  return (
    <div>
      <Title />
      <Selector
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
      <Results />
    </div>
  );
};

export default TopPage;
