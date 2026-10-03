import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

import styles from "./Contact.module.css";

export function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <span>
        {contact.name}: {contact.number}
      </span>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};