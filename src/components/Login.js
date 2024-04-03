import React, { useState,useRef } from "react";
import Header from "./Header"
import {checkValidData} from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_URL, IMAGE_AVTAR } from "../utils/constant";
import {CircularProgress,LinearProgress, Stack} from '@mui/material';
import Box from '@mui/material/Box';

const Login=()=>{
    const [isSignIn, setIsSignIn]=useState(true);
    const [errorMsg, setErrorMsg]=useState(null);
    const [isLoading, setIsLoading]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleButttonClick=()=>{
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMsg(message);
        if(message) return;
        setIsLoading(true);
        if(!isSignIn){   //for sign Up
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((response)=>{
                const user = response.user;
                setIsLoading(false);
                console.log(response);
                updateProfile(user, {
                    displayName:name.current.value,
                    photoURL:IMAGE_AVTAR
                }).then(()=>{
                    const {uid, email, displayName}=auth.currentUser;
                    dispatch(addUser({
                        displayName:displayName,
                        uid:uid,
                        email:email,
                        photoURL:IMAGE_AVTAR

                    }));
                    
                    navigate('/browse');
                })
                .catch((error)=>{
                    setIsLoading(false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage + "-" + errorCode);
                })
            })
            .catch((error)=>{
                setIsLoading(false);
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage + "-" + errorCode);
            });
        }
        else{            // for sign in
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((response)=>{
                setIsLoading(false);
               // const user = response.user;
                console.log(response)
                navigate("/browse")
            }).catch((error)=>{
                setIsLoading(false);
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage + "-" + errorCode);
            })
        }
    }
    const toggleChange=()=>{
        setIsSignIn(!isSignIn);
    }
    return (
    <div>
        <Header className="absolute"/>
      {isLoading ? (<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" display={"flex"} justifyContent={"center"} marginTop={"300px"} position={"absolute"} left={"0px"} right={"0px"} marginX={"auto"}>
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
    </Stack>):( 
        <>
<div class='w-full'>
      <div class='h-1.5 w-full bg-pink-100 overflow-hidden'>
        <div class='progress w-full h-full bg-pink-500 left-right'></div>
      </div>
</div>
        <div className="absolute ">
            <img 
                src={BG_URL}
                alt="logo"
                className="h-screen object-cover md:h-full"
            />
        </div>
        <form 
            className="absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" 
            onSubmit={(e)=>e.preventDefault()}
            >
            <h1 className="font-bold py-4 text-3xl">{isSignIn ? "Sign In " : "Sign Up"}</h1>
            {!isSignIn && <input className="p-4 my-4 bg-gray-700 w-full rounded-lg" ref={name} type="text" placeholder="Enter Your Name" />}
            <input 
                ref={email}
                className="p-4 my-4 bg-gray-700 w-full rounded-lg" 
                type="text" 
                placeholder="Email Address"  
            />
            <input 
                ref={password}
                className="p-4 my-4 bg-gray-700 w-full rounded-lg" 
                type="password" 
                placeholder="Password"  
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
            <button 
                className="p-4 my-6 bg-red-700 w-full" 
                onClick={handleButttonClick}>
                    {isSignIn ? "Sign In " : "Sign Up"}
            </button>
            <p className="p-4 my-6 cursor-pointer" 
                onClick={()=>toggleChange()}>
                    {isSignIn ?  "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</p>
        </form>
        </>
        )} 
    </div>)
}

export default Login;