import { useSelector, useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { getFilteredContacts } from './redux/contacts/contactsSelectors';
import { setFilter } from './redux/filter/filterSlice';
import { getFilter } from './redux/filter/filterSelectors';

import css from './components/ContactForm.module.css';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: '100vh',
        maxWidth: '1000px',
        display: 'flex',
        justifyContent: 'space-evenly',
        fontSize: 40,
        color: '#010101',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <ContactForm />
      <ContactList contacts={contacts} />
      <div className={css.filterContainer}>
        <Filter
          value={filter}
          onChange={({ target }) => dispatch(setFilter(target.value))}
        />
      </div>
    </div>
  );
};

export default App;
