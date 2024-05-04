import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  console.log(filters);

  const filteredContacts = contacts.filter((contact) => {
    console.log(contact);
    return (
      contact.name.toLowerCase().includes(filters.toLowerCase()) ||
      contact.number.includes(filters)
    );
  });

  return (
    <ul className={css.contacts}>
      {filteredContacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact baseState={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
