import { fetchUserDetails } from "../components/Api/UsersApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUserDetails = createAsyncThunk(
    'user/details',
    async (searchParam) => {
      const response = await fetchUserDetails(searchParam);
      return {
        ...response[0].data,
        starred: response[1].data,
        repos: response[2].data,
        organizations: response[3].data
      }
    }
  );

  export const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: {},
        loading: 'IDLE', //change to ENUM
        error: null
    },
    reducers: {},
    extraReducers: {
        [getUserDetails.pending]: (state, action) => ({...state, loading: 'PENDING'}),
        [getUserDetails.fulfilled]: (state, action) => {
            return  {
                ...action.payload ,
                loading: 'IDLE',
                error: null
            };
        },
        [getUserDetails.rejected]: (state, action) => {
            if (state.loading === 'PENDING') {
              state.loading = 'idle'
              state.error = action.error
            }
        }
    }
});