import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ values, onFilter }) => {
  const searchBoxId = useId();
  console.log(values);
  return (
    <div className={css.searching}>
      <label htmlFor={searchBoxId}>
        Find contacts by name
        <input
          className={css.input}
          value={values}
          onChange={onFilter}
          type="text"
          id={searchBoxId}
        />
      </label>
    </div>
  );
};

export default SearchBox;
