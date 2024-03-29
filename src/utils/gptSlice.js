import {createSlice} from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        ShowGptSearch:false,
        movieNames:{},
        movieResults:{}
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.ShowGptSearch=!(state.ShowGptSearch);
        },
        addGPTMovieResults:(state, action)=>{
            state.movieNames=action.payload.movieNames;
            state.movieResults=action.payload.movieResult
        },
        removeMovieData:(state)=>{
            state.movieNames={};
            state.movieResults={};
        }
    }
})

export const {toggleGPTSearch, addGPTMovieResults, removeMovieData} =gptSlice.actions;
export default gptSlice.reducer;