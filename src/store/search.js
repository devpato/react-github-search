const { createSlice } = require("@reduxjs/toolkit");

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searching: false,
        error: false
    },
    reducers: {
        searchUsers: state => ({...state, searching: true}),
        searchError: state => ({...state, error: true})
    }
  });