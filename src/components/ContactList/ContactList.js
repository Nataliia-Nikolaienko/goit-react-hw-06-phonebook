import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from '../ContactForm.module.css';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import { getFilter } from '../../redux/filter/filterSelectors';

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts({ contacts, filter });

  return (
    <>
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
