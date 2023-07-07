import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export const selectFilteredContacts = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase().trim();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export default contactsSlice.reducer;
