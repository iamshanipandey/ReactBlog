import React, { useContext } from "react";
import Header from "../componenets/Header";
import Footer from "../componenets/Footer";
import BlogDetails from "../componenets/BlogDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../componenets/AppContext";
import "./TagPage.css";

function CategoryPage()
{
    const {post} = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div className='w-full flex flex-col justify-center items-center mb-16'>
            <Header/>
            <div>
                <button className="Btn"
                onClick={()=> navigate(-1)}>
                    Back 
                </button>
                <span>{location.pathname.split("/").at(-1).replaceAll("-", " ")}</span>
            </div>
            {
                post.map((singlePost)=>(
                    <BlogDetails className="BlogDetails" singlePost={singlePost}/>
                ))
            }
            <Footer/>
        </div>
    );
}

export default CategoryPage;