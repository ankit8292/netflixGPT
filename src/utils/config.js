import {createSlice} from "@reduxjs/toolkit";




const config=createSlice({
    name:"lang",
    initialState:{
        language:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
})

export const {changeLanguage} = config.actions;
export default config.reducer;