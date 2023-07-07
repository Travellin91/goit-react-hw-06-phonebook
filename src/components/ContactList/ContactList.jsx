import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import './contactlist.css';

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className="contact-list">
      {Array.isArray(contacts) && contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
}

function ContactItem({ contact, handleDeleteContact }) {
  const handleDelete = () => {
    handleDeleteContact(contact.id);
  };

  return (
    <li className="contact-item">
      <span className="contact-name">{contact.name}</span>
      <span className="contact-number">{contact.number}</span>
      <button className="contact-delete-button" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
