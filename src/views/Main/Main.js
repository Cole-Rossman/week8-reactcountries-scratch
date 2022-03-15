import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import Filter from '../../components/Controls/Filter';
import { fetchCountries } from '../../services/countries';

import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [continent, setContinent] = useState('All');

  const options = ['All', 'North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania', 'Antarctica'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        setLoading(false);
      } catch (e) {
        setErrorMessage('An error has ocurred. Please refresh the page.');
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    const filtered = countries.filter((country) => country.continent === continent || continent === 'All');
    const sorted = filtered.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    return sorted;
  };
  
  if (loading) return <span className="loader"></span>;
  
  return (
    <>
      <p className='error'>{errorMessage}</p>
      <Filter options={options} callback={setContinent} />
      <div className='countries-list'>
        {filterCountries().map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </>
  );
}
