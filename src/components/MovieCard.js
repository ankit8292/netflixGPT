import { useEffect, useState } from "react";
import { IMG_CDN_URL, unavailableLandscape, unavailable, noPicture } from "../utils/constant";

const MovieCard = ({movieId, posterPath }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
 // const classes = useStyles();
  if (!posterPath) return null;
  const handleOpen=()=>{
    setOpen(true);
  }
 
  return (
    <>
    <div className="w-36 md:w-48 pr-4 transition ease-in-out delay-650  hover:scale-110 duration-300" >
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
    </>
  );
};
export default MovieCard;