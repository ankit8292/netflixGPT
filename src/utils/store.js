import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import config from "./config";
const store=configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:gptSlice,
        lang:config
    }
})

export  default store;


