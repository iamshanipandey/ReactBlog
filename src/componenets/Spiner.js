import React from "react";
import './spiner.css';

function Spiner()
{
    return(
        <div className="flex flex-col justify-center items-center h-[70vh]">
            <div className="spinner"></div>
            <h1 className="mt-10 ml-2 font-bold text-[24px]">Loading..</h1>
        </div>
    );
}

export default Spiner;