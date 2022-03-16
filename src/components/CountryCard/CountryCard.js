import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className='country-card'>
      <h3>{name}</h3>
      <img alt='name' width="72" height="54" src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`} />
    </div>
  );
}