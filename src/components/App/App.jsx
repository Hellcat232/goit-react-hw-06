import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useEffect, useState } from "react";

// const base = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const App = () => {
  const [states, setState] = useState(() => {
    const saveWithLocalStorage = window.localStorage.getItem("local-save");
    if (saveWithLocalStorage !== null) {
      return JSON.parse(saveWithLocalStorage);
    } else {
      return base;
    }
  });
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    window.localStorage.setItem("local-save", JSON.stringify(states));
  }, [states]);

  const addContact = (add) => {
    setState((prevState) => [...prevState, add]);
  };

  const visibleContact = states.filter(
    (state) =>
      (state.name &&
        state.name.toLowerCase().includes(filtered.toLowerCase())) ||
      (typeof state.number === "string" && state.number.includes(filtered))
  );

  const deleteContact = (id) => {
    setState((prevState) => prevState.filter((state) => state.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAdd={addContact} />
      <SearchBox
        values={filtered}
        onFilter={(event) => setFiltered(event.target.value)}
      />
      <ContactList
        onDel={deleteContact}
        visible={visibleContact}
        state={states}
      />
    </div>
  );
};

export default App;
