import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer=()=>{
    const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);

    const movie=moviesData[9]; 
    if(movie==null) return;
    const { original_title, overview, id } =movie;
    return(
        // md:pt-0 ----> Media query for 768px 
        <div className="pt-[30%] bg-black md:pt-0">   
         <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieID={id} />  
        </div>
    )
}

export default MainContainer;