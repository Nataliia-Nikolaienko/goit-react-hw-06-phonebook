import { useDispatch } from 'react-redux';
import css from '../ContactForm.module.css';
import { deleteContactAction } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <li className={css.contactListItem}>
      <p className={css.name}>{name}</p>
      <p className={css.telefon}>{number}</p>
      <button onClick={() => deleteContact(id)} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
