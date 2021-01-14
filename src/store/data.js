const { createSlice } = require("@reduxjs/toolkit");

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        users: [],
        user: null
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
  });

export const {setUsers, setUser} = dataSlice.actions;
export default dataSlice.reducer;