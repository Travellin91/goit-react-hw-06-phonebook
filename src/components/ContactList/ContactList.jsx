import React from 'react';
import PropTypes from 'prop-types';
import './contactlist.css';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

function ContactItem({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
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
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;