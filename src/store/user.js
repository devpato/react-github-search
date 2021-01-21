const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: '',
        loading: 'IDLE',
        error: null,
        userDetails: null
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
  
export default userSlice.reducer;