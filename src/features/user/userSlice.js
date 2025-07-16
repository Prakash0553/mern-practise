import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, setUserToLocal } from "../local/local";

// Local storage ma user ko data xa ki nai vanera check garni kaam garxa
// Yedi data xaina vani user login vako xaina vanera bujhni

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()  //  user local storage ma xa ki nai vanera check garxa 
  },
  reducers: {

    setUser: (state, action) => {
      state.user = action.payload;
      setUserToLocal(state.user); // User locally add garxa local storage ma
    },                             // user ko state change garxa 

    removeUser: (state, action) => {
      state.user = null;            // state change garxa
      removeUserFromLocal();        // locally user lai remove garxa
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;