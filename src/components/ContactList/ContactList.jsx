import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = ({ visible, onDel }) => {
  return (
    <ul className={css.contacts}>
      {visible.map((item) => {
        return (
          <li key={item.id}>
            <Contact onDelete={onDel} baseState={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
