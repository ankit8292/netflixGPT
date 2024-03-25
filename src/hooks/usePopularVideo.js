import React, { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    //calling the Now playing movie list API
    const getPopularMoviesList= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1', API_options);
        const json= await data.json();
        //console.log(json);
        dispatch(addPopularMovies(json.results))

    }

    useEffect(()=>{
        getPopularMoviesList();
    },[])
}
export default usePopularMovies;