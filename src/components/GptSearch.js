import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptmovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";


const GptSearch=()=>{
    
    return(
        <>
        <div className="fixed -z-10">
        <img 
            src={BG_URL}
            alt="logo"
            className="h-screen object-cover md:h-full"
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