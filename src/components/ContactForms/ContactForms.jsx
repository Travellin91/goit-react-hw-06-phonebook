import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import './contactforms.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

function ContactForms() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      Notiflix.Report.warning('Alert', `Contact with name "${name}" already exists!`, 'Ok');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form-label">
        Name
        <input
          className="contact-form-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="contact-form-label">
        Number
        <input
          className="contact-form-input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className="contact-form-button" type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForms;