import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    console.log(movies.nowPlayingMovies)
    if((Object.keys(movies.nowPlayingMovies).length===0) || (Object.keys(movies.popularMovies).length===0) || ((Object.keys(movies.trendingMovies).length===0) || (Object.keys(movies.topRatedMovies).length===0) || ((Object.keys(movies.popularTVList).length===0)))) return;

    return(
        <>
       { movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending Movie"} movies={movies.trendingMovies} />
          <MovieList title={"Popular Movie"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Popular TV"} movies={movies.popularTVList} />
        </div>
      </div>)}
    </>
    )
}

export default SecondContainer;