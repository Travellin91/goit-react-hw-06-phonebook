import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './filterSlice';

const persistConfig = {
key: 'root',
storage,
};

const contactsSlice = createSlice({
name: 'contacts',
initialState: [],
reducers: {
addContact: (state, action) => {
state.push(action.payload);
},
deleteContact: (state, action) => {
return state.filter((contact) => contact.id !== action.payload);
},
},
});

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

const rootReducer = {
contacts: persistedContactsReducer,
filter: filterReducer,
};

export const store = configureStore({
reducer: rootReducer,
});

export const persistor = persistStore(store);