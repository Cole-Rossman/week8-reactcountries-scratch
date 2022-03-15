import React, { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import Filter from '../../components/Controls/Filter';
import { fetchCountries } from '../../services/countries';

import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setLoading(false);
      } catch (e) {
        setErrorMessage('An error has ocurred. Please refresh the page.');
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  
  return (
    <>
      <p className='error'>{errorMessage}</p>
      <div className='main'>

      </div>
    </>
  );
}
