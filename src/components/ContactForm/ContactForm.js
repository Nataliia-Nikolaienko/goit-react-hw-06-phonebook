import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import initialState from '../initialState';
import { addContactAction } from '../../redux/contacts/contactsSlice';

import css from '../ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const addContact = ({ name, number }) => {
    const nameContact = contacts.find(contact => contact.name === name);
    const numberContact = contacts.find(contact => contact.number === number);
    if (nameContact) {
      return alert(`${name} is already in contacts.`);
    } else if (numberContact) {
      return alert(`${number} is already in contacts.`);
    } else {
      dispatch(addContactAction({ name, number }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    // setState({ ...initialState });
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
