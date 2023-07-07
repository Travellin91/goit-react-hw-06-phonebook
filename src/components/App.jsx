import React from 'react';
import './app.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactsSlice';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(addContact(newContact));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const setFilterValue = value => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1 className="app-title">Phonebook</h1>

      <Row>
        <Col md={6}>
          <ContactForms addContact={addNewContact} contacts={contacts} />
        </Col>
        <Col md={6}>
          <div className="contacts-section">
            <h2 className="contacts-heading">Contacts</h2>
            <Filter filter={filter} setFilter={setFilterValue} />
            <ContactList contacts={filteredContacts} deleteContact={removeContact} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
