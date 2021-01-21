import { searchUsers } from "../components/Api/UsersApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchUsers = createAsyncThunk(
    'search/users',
    async (searchParam) => {
      const response = await searchUsers(searchParam);
      return response
    }
  );

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        incomplete_results: false,
        total_count: 0,
        loading: 'IDLE', //change to ENUM
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state, action) => ({...state, loading: 'PENDING'}),
        [fetchUsers.fulfilled]: (state, action) => ({...action.payload, loading: 'IDLE', error: null}),
        [fetchUsers.rejected]: (state, action) => {
            if (state.loading === 'PENDING') {
              state.loading = 'idle'
              state.error = action.error
            }
        }
    }
});