import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'center',
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
        <Filter />
      </div>
      <ContactList />
    </div>
  );
};

export default App;
