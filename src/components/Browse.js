import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer"
import usePopularMovies from "../hooks/usePopularVideo";
import useTrendingVideo from "../hooks/useTrendingVideo";
import useTopRatedVideo from "../hooks/useTopRatedVideo";
import usePopularTV from "../hooks/usePopularTV";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse=()=>{
    const enableGPtSearch=useSelector((store)=>store.gpt.ShowGptSearch);
    // calling the custom hook for List of Now Playing Movies
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingVideo();
    useTopRatedVideo();
    usePopularTV();


    return <> 
        <Header />
        { enableGPtSearch ? (
            <GptSearch /> ) : (
        <>
            <MainContainer />
            <SecondContainer />
        </>    
        )}
        </>
}

export default Browse;