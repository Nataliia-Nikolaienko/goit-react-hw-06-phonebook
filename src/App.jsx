import { useSelector, useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { getFilteredContacts } from './redux/contacts/contactsSelectors';
import { setFilter } from './redux/filter/filterSlice';
import { getFilter } from './redux/filter/filterSelectors';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: '100vh',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'center',
        // flexWrap: 'wrap',
        gap: '20px',
        fontSize: 40,
        color: '#010101',
        padding: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div>
        <ContactForm />
        <Filter
          value={filter}
          onChange={({ target }) => dispatch(setFilter(target.value))}
        />
      </div>

      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
