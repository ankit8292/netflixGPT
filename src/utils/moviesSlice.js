import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        trailerVideo:{},
        popularMovies:{},
        trendingMovies:{},
        topRatedMovies:{},
        popularTVList:{},
    },
    reducers:{
        addNowPlayingMovieList:(state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies=action.payload;
        },
        addTrendingMovies:(state, action)=>{
            state.trendingMovies=action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies=action.payload;
        },
        addPopularTVList:(state, action)=>{
            state.popularTVList=action.payload;
        }
    }
});

export const {addNowPlayingMovieList, addTrailerVideo, addPopularMovies, addTrendingMovies,addTopRatedMovies, addPopularTVList}=moviesSlice.actions;

export default moviesSlice.reducer;