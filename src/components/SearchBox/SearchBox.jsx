import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contactsSlice";

import styles from "./SearchBox.module.css";

export function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contacts by name

        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}