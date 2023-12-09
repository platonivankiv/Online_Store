import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL, UPDATE_BASE_URL} from "../../utils/constants";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`);
            console.log(res)
            return res.data;

        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const updateCategoriesById = createAsyncThunk(
    "categories/updateCategoriesById",
    async (_, thunkAPI) => {

        const res1 = await axios(`${BASE_URL}/categories/1`)

        const res2 = await axios(`${BASE_URL}/categories/8`)

        return res1.data
        });

export const deleteCategoriesById = createAsyncThunk(
    "categories/deleteCategoriesById",
    async (_, thunkAPI) => {
        for (let i = 9; i <= 146; i++) {
            const res = await axios(`${BASE_URL}/categories/i`);
        }
    }
);


const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default categoriesSlice.reducer;