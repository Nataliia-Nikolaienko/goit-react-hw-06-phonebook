import { useSelector, useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import { getFilterContacts } from './redux/contacts/contactsSelectors';
import { setFilterAction } from './redux/filter/filterSlice';
import { getFilter } from './redux/filter/filterSelectors';

import css from './components/ContactForm.module.css';

const App = () => {
  const contacts = useSelector(getFilterContacts);
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
      <ContactList contacts={contacts} />
      <div className={css.filterContainer}>
        <Filter
          value={filter}
          onChange={({ target }) => dispatch(setFilterAction(target.value))}
        />
      </div>
    </div>
  );
};

export default App;
