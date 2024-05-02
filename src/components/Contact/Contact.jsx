import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ baseState, onDelete }) => {
  return (
    <>
      <div className={css.item}>
        <div className={css.name}>
          <BsFillPersonFill />
          <p>{baseState.name}</p>
        </div>

        <div className={css.number}>
          <BsFillTelephoneFill />
          <p>{baseState.number}</p>
        </div>

        <button
          className={css["delete-btn"]}
          onClick={() => {
            onDelete(baseState.id);
          }}
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
