import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { IMAGE_AVTAR, LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { removeMovieData, toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/config";


const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const ShowGptSearch=useSelector(store=>store.gpt.ShowGptSearch)
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

    const handleGptSearch=()=>{
        dispatch(toggleGPTSearch());
    }

    const toggleLanguage=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }
    if(ShowGptSearch){
        dispatch(removeMovieData());
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
                photoURL: IMAGE_AVTAR, 
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
                className=" w-44 mx-auto md:mx-0"
                src={LOGO}
                alt="logo"
            />
        {isUser && (
            <div className="flex p-2"> 

            {ShowGptSearch &&(<select className="p-2 m-2 bg-gray-900 text-white" onClick={(e)=>toggleLanguage(e)}>{
                SUPPORTED_LANGUAGES.map((lang)=>(
                    <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))
                }
            </select>)}
            <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearch}>{ ShowGptSearch ? "Home Page" : "GPT"} </button>
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