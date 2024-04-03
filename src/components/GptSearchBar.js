import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef, useState } from "react";
import openAi from "../utils/openAI";
import { API_options } from "../utils/constant";
import { addGPTMovieResults, removeMovieData } from "../utils/gptSlice";
import { CircularProgress, Stack } from "@mui/material";

const GptSearchBar=()=>{
    const dispatch=useDispatch();
    const langCheck=useSelector((store)=>store.lang.language);
    const getmoviesName=useSelector(store=>store.gpt.movieNames);
    const getMoviedetails=useSelector(store=>store.gpt.movieResults);
    const searchText=useRef(null);
    const [isLoading, setIsLoading]=useState(false);

    const searchMovieAPICall= async(movie)=>{
        const data= await fetch("https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_options);
        const json= await data.json();
        return json.results;
    }

    const handleGPTClick= async ()=>{
        if(searchText.current.value=="") return;
        if((Object.keys(getmoviesName).length!==0) || (Object.keys(getMoviedetails).length!==0)) {
            dispatch(removeMovieData())
        }
        const query=searchText.current.value;
        setIsLoading(true);
        const GptQuery="Act as a Movie Recommendation system and suggest some movies for the query : "  + query + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Ra-One, Dhamaal, Raaz, Hangama, De dana dan de";
        const GPTResults=await openAi.chat.completions.create({
            messages: [{ role: 'user', content: GptQuery }],
            model: 'gpt-3.5-turbo',
          });
          console.log(GPTResults.choices[0].message.content);
          const moviesNameData=GPTResults?.choices[0]?.message?.content?.split(",");
          const resultPromiseArray= moviesNameData.map(movie=>searchMovieAPICall(movie));
          const data=await Promise.all(resultPromiseArray);
          dispatch(addGPTMovieResults({movieNames: moviesNameData ,movieResult: data}));
          setIsLoading(false);
          searchText.current.value=""
    }
    return(
        <div className="pt-[45%] md:pt-[10%] flex justify-center">
            <form 
                className="w-full md:w-1/2 bg-black grid grid-cols-12" 
                onSubmit={(e)=>e.preventDefault()}
            >
                <input 
                    ref={searchText}
                    type="text" 
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langCheck].gptSearchPlaceholder}
                />
                <button 
                    className="py-2 m-4 px-4 col-span-3 bg-red-700 text-white rounded-lg"
                    onClick={handleGPTClick}
                >
                    {lang[langCheck].search}
                </button>
            </form>
            {isLoading && <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" display={"flex"} justifyContent={"center"} marginTop={"300px"} position={"absolute"} left={"0px"} right={"0px"} marginX={"auto"}>
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            </Stack>}
        </div>
    )
}

export default GptSearchBar;