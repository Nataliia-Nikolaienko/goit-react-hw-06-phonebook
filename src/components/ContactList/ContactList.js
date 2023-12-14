import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from '../ContactForm.module.css';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log('contacts', contacts);
  return (
    <>
      <div className={css.contactsWrapper}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <ul className={css.todoList}>
          {filterContacts.map(({ name, id, number }) => {
            return <Contact key={id} name={name} number={number} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
