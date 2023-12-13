import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
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
      state = state.contacts.filter(contact => contact.id !== action.payload);
      // return {
      //   ...state,
      //   contacts: state.contacts.filter(
      //     contact => contact.id !== action.payload
      //   ),
      // };
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
