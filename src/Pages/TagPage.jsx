import {React, useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../componenets/Header";
import BlogDetails from "../componenets/BlogDetails";
import { AppContext } from "../componenets/AppContext";
import './TagPage.css'
import Footer from "../componenets/Footer";

function TagPage()
{
    const navigate = useNavigate();
    const location = useLocation();
    const tagName = location.pathname.split("/").at(-1).replaceAll("-", " ");
    const {post} = useContext(AppContext);
    return(
        <div className='w-full flex flex-col justify-center items-center mb-16' >
            <Header/>
            <div>
                <button className="Btn"
                onClick={()=>navigate(-1)}>
                    Back 
                </button>
                <span>{`#${tagName}`} Related Posts</span>
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

export default TagPage;