import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useState } from "react";

import styles from "./ContactForm.module.css";

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (!trimmedName || !trimmedNumber) {
      return;
    }

    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (isContactExist) {
      alert(`${trimmedName} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: trimmedName,
        number: trimmedNumber,
      })
    );

    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}