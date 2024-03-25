import React, { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularTVList } from "../utils/moviesSlice";

const usePopularTV=()=>{
    const dispatch=useDispatch();

    //calling the Now playing movie list API
    const getPopularTVList= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/tv/popular?language=en-IN&page=1', API_options);
        const json= await data.json();
        //console.log(json);
        dispatch(addPopularTVList(json.results))

    }

    useEffect(()=>{
        getPopularTVList();
    },[])
}
export default usePopularTV;