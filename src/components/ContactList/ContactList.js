import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from '../ContactForm.module.css';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import { getFilter } from '../../redux/filter/filterSelectors';

const ContactList = ({ contacts }) => {
  // const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(getFilter);
  // const dispatch = useDispatch();
  const filteredContacts = getFilteredContacts({ contacts, filter });
  // console.log('contacts', contacts);
  return (
    <>
      <div className={css.formWrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
      </div>
      <div className={css.contactsWrapper}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <ul className={css.todoList}>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
