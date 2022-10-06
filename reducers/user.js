
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { token: null, username: null , firstname: null},
  };

export const usersSlice = createSlice({
    name: 'users',
   
     initialState,
        reducers: {
      login: (state, action) => {
        state.value.firstname = action.payload.firstname;
        state.value.token = action.payload.token;
        state.value.username = action.payload.username;
      },
    },
   });
   
   export const { login } = usersSlice.actions;
   export default usersSlice.reducer;