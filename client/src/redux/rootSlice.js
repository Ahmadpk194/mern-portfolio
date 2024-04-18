import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false,
        isLoggedIn: false
    },
    reducers: {
        showLoading: (state, action) => {
            state.loading = true;
        },
        hideLoading: (state, action) => {
            state.loading = false;
        },
        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData: (state, action) => {
            state.reloadData = action.payload;
        }, 
        LogIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
});

export const { showLoading, hideLoading, setPortfolioData, ReloadData, LogIn } = rootSlice.actions;
export default rootSlice.reducer;
