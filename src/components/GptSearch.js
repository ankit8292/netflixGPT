import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptmovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";


const GptSearch=()=>{
    
    return(
        <>
        <div className="absolute -z-10">
        <img 
            src={BG_URL}
            alt="logo"
        />
        </div>
        <div>
            <GptSearchBar />
            <GptmovieSuggestion />
        </div> 
        </>
    )
}

export default GptSearch;