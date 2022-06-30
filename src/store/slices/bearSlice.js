import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {URL_BEARS} from "../../data/data";

export const fetchBears = createAsyncThunk(
    'bears/fetch',
    async () => {
                const response = await fetch(URL_BEARS);
                const data = await response.json();
                return data;
            }
)

const initialState = {
    bears: [],
    bear: {},
    loading: false,
    error: null,
};

const bearSlice = createSlice({
    name: 'bear',
    initialState,
    extraReducers: {
        [fetchBears.pending]: (state, action)=> {
            state.loading = true;
        },
        [fetchBears.fulfilled]: (state, action)=> {
            state.loading = false;
            state.bears = [...action.payload];
        },
        [fetchBears.rejected]: (state, action)=> {
            state.loading = false;
            state.error = action.payload
        },
    }
})



export default bearSlice.reducer