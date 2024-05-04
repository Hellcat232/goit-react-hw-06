import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ baseState }) => {
  // console.log(baseState);
  const dispatch = useDispatch();

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
            dispatch(deleteContact(baseState.id));
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
