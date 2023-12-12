import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from '../ContactForm.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import { addContactAction } from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

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

  return (
    <>
      <div className={css.formWrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm addContact={addContact} />
      </div>
      <div className={css.contactsWrapper}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <ul className={css.todoList}>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
