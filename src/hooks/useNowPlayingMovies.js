import React, { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovieList } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

    //calling the Now playing movie list API
    const getNowPlayingMovieList= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1', API_options);
        const json= await data.json();
        //console.log(json);
        dispatch(addNowPlayingMovieList(json.results))

    }

    useEffect(()=>{
        getNowPlayingMovieList();
    },[])
}
export default useNowPlayingMovies;