import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: '',
    filter: '',
  },
  reducers: {
    addContactAction: {
      prepare: contacts => {
        return {
          payload: {
            ...contacts,
            id: nanoid(),
          },
        };
      },
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    deleteContactAction: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    // setFilter: (state, action) => {
    //   state.filter = action.payload;
    // },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContactAction, deleteContactAction, setFilter } =
  contactsSlice.actions;
