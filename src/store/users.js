const { createSlice } = require("@reduxjs/toolkit");

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: null
    },
    reducers: {
        setUsers: state => ({...state, users: []}),
        setUser: state => ({...state,  user: "Pato"}),
    }
  })