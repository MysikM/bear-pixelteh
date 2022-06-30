import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {URL_BEARS} from "../../data/data";

export const fetchBears = createAsyncThunk(
    'bears/fetch',
    async (category, thunkAPI) => {
                try{
                    const response = await fetch(`${URL_BEARS}${category ? '?food=' : ''}${category || ''}`);
                    const data = await response.json();
                    if(data?.message) {
                        throw new Error(data?.message);
                    }
                    return data;
                } catch (e) {
                    return thunkAPI.rejectWithValue(e);
                }
            }
);

export const fetchBearById = createAsyncThunk(
    'bearById/fetch',
    async (id, thunkAPI) => {
        try{
            const response = await fetch(`${URL_BEARS}/${id}`);
            const data = await response.json();
            if(data?.message) {
                throw new Error(data?.message);
            }
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
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
            state.error = null;
        },
        [fetchBears.fulfilled]: (state, action)=> {
            state.loading = false;
            state.error = null;
            state.bears = [...action.payload];
        },
        [fetchBears.rejected]: (state, action)=> {
            state.loading = false;
            state.error = action.payload.message;
        },
        [fetchBearById.pending]: (state, action)=> {
            state.loading = true;
            state.error = null;
        },
        [fetchBearById.fulfilled]: (state, action)=> {
            state.loading = false;
            state.error = null;
            state.bear = {...action.payload[0]};
        },
        [fetchBearById.rejected]: (state, action)=> {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
})



export default bearSlice.reducer