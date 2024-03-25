import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const isUser = useSelector((store) => store.user);

    //calling Auth when user click on Sign Out button
    const handleSignOut=()=>{
        signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
    }

//calling automatically OnAuthStateChanged function whenever user sign in/signup or sign out
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user)=>{
            if(user){
                const {uid, email, displayName, photoURL}=user;
                dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL, 
                }));
                navigate('/browse');
            }
            else{
                dispatch(removeUser());
                navigate("/")
            }
        });
        return ()=> unsubscribe();
    },[])


   
    return(
    
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img 
                className="w-44"
                src={LOGO}
                alt="logo"
            />
        {isUser && (
            <div className="flex p-2"> 
        <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={isUser?.photoURL}
          />
          
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button> 
          </div>)}

        
        
    </div>)
}

export default Header;