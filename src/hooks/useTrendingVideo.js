import React, { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingVideo=()=>{
    const dispatch=useDispatch();

    //calling the Now playing movie list API
    const getTrendingVideoList= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-IN', API_options);
        const json= await data.json();
        console.log(json);
        dispatch(addTrendingMovies(json.results))

    }

    useEffect(()=>{
        getTrendingVideoList();
    },[])
}
export default useTrendingVideo;