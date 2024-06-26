import { useEffect, useState } from "react";
import { IMG_CDN_URL, noPicture } from "../utils/constant";

const MovieCard = ({movieId, posterPath }) => {
  const [content, setContent] = useState();
  if (!posterPath) return null;
 
  return (
    <>
    <div className="w-36 md:w-48 pr-4 transition ease-in-out delay-650  hover:scale-110 duration-300" >
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
    </>
  );
};
export default MovieCard;