import React from 'react';
import css from '../ContactForm.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.filterContainer}>
    <label className={css.labelFilter}>Find contacts by name</label>
    <input
      className={css.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Filter;
