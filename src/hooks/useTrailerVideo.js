import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo=(movieID)=>{
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)

    const getTrailerVideo= async (movieID)=>{
        const data= await fetch(
            "https://api.themoviedb.org/3/movie/" +
                movieID +
            "/videos?language=en-US",
            API_options,
        );
        const json=await data.json();
        const filterMovie=json.results.filter((video)=>video.type==="Trailer");
        const trailerVideo=json.length ? filterMovie[0]:json.results[0];
        dispatch(addTrailerVideo(trailerVideo));
    }
    useEffect(()=>{
        getTrailerVideo(movieID);
    },[])

}

export default useTrailerVideo;