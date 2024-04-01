import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const SecondContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    //console.log(movies.nowPlayingMovies)
   // if((Object.keys(movies.nowPlayingMovies).length===0) || (Object.keys(movies.popularMovies).length===0) || ((Object.keys(movies.trendingMovies).length===0) || (Object.keys(movies.topRatedMovies).length===0) || ((Object.keys(movies.popularTVList).length===0)))) return;

    return(
        <>
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        {(Object.keys(movies.nowPlayingMovies).length===0) ? <Shimmer /> : (<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />)}
        { (Object.keys(movies.trendingMovies).length===0) ? <Shimmer /> : (<MovieList title={"Trending Movie"} movies={movies.trendingMovies} />)}
        { (Object.keys(movies.popularMovies).length===0) ?<Shimmer /> : (<MovieList title={"Popular Movie"} movies={movies.popularMovies} />)}
         {(Object.keys(movies.topRatedMovies).length===0)? <Shimmer /> : (<MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />)}
          {(Object.keys(movies.popularTVList).length===0) ? <Shimmer /> : (<MovieList title={"Popular TV"} movies={movies.popularTVList} />)}
        </div>
      </div>
    </>
    )
}

export default SecondContainer;