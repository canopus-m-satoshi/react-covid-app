import React from 'react';
import Results from '../components/Results';
import Selector from '../components/Selector';

import Title from '../components/Title';

const TopPage = (props) => {
  return (
    <div>
      <Title />
      <Selector
        countries={props.countriesJson}
        setCountry={props.setCountry}
        getCountryData={props.getCountryData}
      />
      <Results />
    </div>
  );
};

export default TopPage;
