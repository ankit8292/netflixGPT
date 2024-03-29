import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptmovieSuggestion=()=>{
    const getmoviesName=useSelector(store=>store.gpt.movieNames);
    const getMoviedetails=useSelector(store=>store.gpt.movieResults);
    if(Object.keys(getmoviesName).length===0) return
    return(
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            {getmoviesName && getmoviesName.map((movie,i)=>(
                <MovieList key={movie} title={movie} movies={getMoviedetails[i]}/>
            ))}
        </div>
    )
}


export default GptmovieSuggestion;