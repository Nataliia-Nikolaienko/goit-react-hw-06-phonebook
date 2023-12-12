import { useState } from 'react';
import initialState from '../initialState';
import css from '../ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setState({ ...initialState });
    e.target.reset();
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.nameInputContainer}>
        <label htmlFor="exampleInputTitle" className={css.label}>
          Name
        </label>
        <input
          className={css.input}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </div>
      <div className={css.telWrapper}>
        <label htmlFor="exampleInputTel" className={css.label}>
          Number
        </label>
        <input
          className={css.input}
          name="number"
          type="tel"
          id="exampleInputTel"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </div>
      <button type="submit" className={css.btnCreate}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
