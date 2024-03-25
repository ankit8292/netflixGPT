import {createSlice} from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        ShowGptSearch:false,
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.ShowGptSearch=!(state.ShowGptSearch);
        }
    }
})

export const {toggleGPTSearch} =gptSlice.actions;
export default gptSlice.reducer;