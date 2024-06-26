import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl pt-12 pb-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieId ={movie.id} posterPath={movie.poster_path} />
          ))}
          
        </div>
      </div>
    </div>
  );
};
export default MovieList;