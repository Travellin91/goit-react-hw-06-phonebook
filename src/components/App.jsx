import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact, deleteContact, setFilter, selectFilteredContacts } from '../redux/contactsSlice';


function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(addContact(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Container>
      <h1 className="app-title">Phonebook</h1>

      <Row>
        <Col md={6}>
          <ContactForms addContact={handleAddContact} />
        </Col>
        <Col md={6}>
          <div className="contacts-section">
            <h2 className="contacts-heading">Contacts</h2>
            <Filter filter={filter} setFilter={handleFilterChange} />
            <ContactList contacts={contacts} deleteContact={handleDeleteContact} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
