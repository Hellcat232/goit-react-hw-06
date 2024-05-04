import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
