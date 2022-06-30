import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {URL_BEARS} from "../../data/data";

export const fetchBears = createAsyncThunk(
    'bears/fetch',
    async (category) => {
                const response = await fetch(`${URL_BEARS}${category ? '?food=' : ''}${category || ''}`);
                const data = await response.json();
                return data;
            }
);

export const fetchBearById = createAsyncThunk(
    'bearById/fetch',
    async (id) => {
        const response = await fetch(`${URL_BEARS}/${id}`);
        const data = await response.json();
        console.log(data);
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
        [fetchBearById.pending]: (state, action)=> {
            state.loading = true;
        },
        [fetchBearById.fulfilled]: (state, action)=> {
            state.loading = false;
            state.bear = {...action.payload[0]};
        },
        [fetchBearById.rejected]: (state, action)=> {
            state.loading = false;
            state.error = action.payload
        },
    }
})



export default bearSlice.reducer