import { searchUsers } from "../components/Api/UsersApi";
import { LOADING } from "../enums/loading";
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
        loading: LOADING.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state, action) => ({...state, loading: LOADING.PENDING}),
        [fetchUsers.fulfilled]: (state, action) => ({...action.payload, loading: LOADING.IDLE, error: null}),
        [fetchUsers.rejected]: (state, action) => {
            if (state.loading === LOADING.PENDING) {
              state.loading = LOADING.IDLE;
              state.error = action.error;
            }
        }
    }
});