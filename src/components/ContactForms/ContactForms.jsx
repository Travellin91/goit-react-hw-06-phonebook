import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contactsAction';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactForm = ({ items, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const loginInputNameId = nanoid();
  const loginInputNumberId = nanoid();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const addInputValue = (contact) =>
      contact.name === name || contact.number === number;

    if (items.some(addInputValue)) {
      alert('Contact is already in contacts');
      return;
    }

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginInputNameId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={loginInputNameId}
          value={name}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor={loginInputNumberId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={loginInputNumberId}
          value={number}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  items: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.contacts.items || [],
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(actions.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
