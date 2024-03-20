import React, { useState } from "react";
import Header from "./Header"

const Login=()=>{
    const [isSignIn, setIsSignIn]=useState(true);
    const toggleChange=()=>{
        setIsSignIn(!isSignIn);
    }
    return (
    <div>
        <Header />
        <div className="absolute">
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="logo"
            />
        </div>
        <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold py-4 text-3xl">{isSignIn ? "Sign In " : "Sign Up"}</h1>
            {!isSignIn && <input className="p-4 my-4 bg-gray-700 w-full rounded-lg" type="text" placeholder="Enter Your Name" />}
            <input className="p-4 my-4 bg-gray-700 w-full rounded-lg" type="text" placeholder="Email Address"  />
            <input className="p-4 my-4 bg-gray-700 w-full rounded-lg" type="password" placeholder="Password"   />
            <button className="p-4 my-6 bg-red-700 w-full">{isSignIn ? "Sign In " : "Sign Up"}</button>
            <p className="p-4 my-6 cursor-pointer" onClick={()=>toggleChange()}>{isSignIn ?  "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</p>
        </form>
    </div>)
}

export default Login;