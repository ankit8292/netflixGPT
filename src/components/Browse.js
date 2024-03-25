import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer"
import usePopularMovies from "../hooks/usePopularVideo";
import useTrendingVideo from "../hooks/useTrendingVideo";
import useTopRatedVideo from "../hooks/useTopRatedVideo";
import usePopularTV from "../hooks/usePopularTV";
const Browse=()=>{
    // calling the custom hook for List of Now Playing Movies
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingVideo();
    useTopRatedVideo();
    usePopularTV();


    return <div> 
        <Header />
        <MainContainer />
        <SecondContainer />
        </div>
}

export default Browse;