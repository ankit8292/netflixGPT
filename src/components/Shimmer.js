import React from "react";

const Shimmer=()=>{
    return(
     <>
        <h1 className="text-lg md:text-3xl py-4 text-white"></h1>
        <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex"></div>
        {Array(10).fill(0).map((n,i)=>(
        <div className="p-2 m-2 w-65 border border-white rounded-lg shadow-lg">
            {/* <div className="w-64 h-64 bg-gray-200 duration-2 animate-pulse"></div>   */}
            <div class="animate-pulse w-40 h-60 flex space-x-4">
                <div class="flex-1 space-y-6">
                <div class="h-2 bg-gray-200 mt-10 rounded"></div>
                <div class="h-2 bg-gray-200  mt-10 rounded"></div>
                <div class="h-2 bg-gray-200  mt-10 rounded"></div>
               
                </div>
            </div>
        </div>))}
        </div>
    </> )
}

export default Shimmer;