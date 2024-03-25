import React, { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedVideo=()=>{
    const dispatch=useDispatch();

    //calling the Now playing movie list API
    const getTopRatedVideoList= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-IN&page=1', API_options);
        const json= await data.json();
        //console.log(json);
        dispatch(addTopRatedMovies(json.results))

    }

    useEffect(()=>{
        getTopRatedVideoList();
    },[])
}
export default useTopRatedVideo;