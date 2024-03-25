import React, { useState,useRef } from "react";
import Header from "./Header"
import {checkValidData} from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_URL } from "../utils/constant";

const Login=()=>{
    const [isSignIn, setIsSignIn]=useState(true);
    const [errorMsg, setErrorMsg]=useState(null);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleButttonClick=()=>{
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMsg(message);
        if(message) return;
        if(!isSignIn){   //for sign Up
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((response)=>{
                const user = response.user;
                console.log(response);
                updateProfile(user, {
                    displayName:name.current.value,
                    photoURL:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                }).then(()=>{
                    const {uid, email, displayName, photoURL}=auth.currentUser;
                    dispatch(addUser({
                        displayName:displayName,
                        uid:uid,
                        email:email,
                        photoURL:photoURL
                    }));
                    navigate('/browse');
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage + "-" + errorCode);
                })
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage + "-" + errorCode);
            });
        }
        else{            // for sign in
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((response)=>{
               // const user = response.user;
                console.log(response)
                navigate("/browse")
            }).catch((error)=>{
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
        <Header />
        <div className="absolute">
            <img 
                src={BG_URL}
                alt="logo"
            />
        </div>
        <form 
            className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" 
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
    </div>)
}

export default Login;