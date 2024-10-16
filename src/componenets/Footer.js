import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Footer(){
    const {pages, totalPages, handleChangePage} = useContext(AppContext);

    return(
        <div className="w-full h-16 border-t-2 border-gray-300  flex justify-center items-center fixed bottom-0 bg-white">
            <div className="w-[35%] flex justify-between items-center " >
                <div className="">
                    {
                        pages > 1 &&
                        <button className="py-2 px-4 bg-gray-300 rounded-md mx-3 " onClick={()=>handleChangePage(pages-1)}>Previous</button>
                    }
                    {
                        pages < totalPages &&
                        <button className="py-2 px-4 bg-gray-300 rounded-md mx-3 " onClick={()=>handleChangePage(pages+1)}>Next</button>
                    }
                </div>
                <div>{pages} of {totalPages}</div>
            </div>

            

        </div>
    )
}

export default Footer;