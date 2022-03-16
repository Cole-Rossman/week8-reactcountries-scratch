import React from 'react';
import './Filter.css';

export default function Filter({ options, callback }) {
  return (
    <select className='continent-select' onChange={(e) => callback(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}