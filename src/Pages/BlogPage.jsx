import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../componenets/AppContext";
import Header from "../componenets/Header";
import Footer from "../componenets/Footer";
import BlogDetails from "../componenets/BlogDetails";
import "./TagPage.css";

function BlogPage()
{
    const [blogs, setBlogs] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    const newUrl = "https://codehelp-apis.vercel.app/api/";


    async function GetApiDataOfBlogId()
    {
        setLoading(true);
        let url = `${newUrl}get-blog?blogId=${blogId}`;
        try {
            const fetchData = await fetch(url);
            const data = await fetchData.json();
            setBlogs(data.blog);
            setRelatedBlog(data.relatedBlogs);
        } catch (error) {
            console.log("Are yarr api fetch karne me hi dikkat aa rhi hai.. jra dekh kya dikkat hai..")
        }
        setLoading(false);
    }

    useEffect(()=>{
        if (blogId)
        {
            GetApiDataOfBlogId();
        }
    },[location.pathname])

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
            <div className='w-full flex flex-col justify-center items-center ml-[1110px]'>
            {
                loading? <div>Loading..</div>: blogs? 
                     <div>
                            <BlogDetails singlePost = {blogs}/>
                            <h1 className="w-[300px] font-bold text-[26px] ml-[200px] text-center mb-4 pt-2 pb-2 pl-3 pr-3 border  rounded-md ">Related Blogs</h1>
                        {
                            relatedBlog.map((related)=>(
                            <BlogDetails key = {related.id} singlePost = {related} />
                        ))
                        }
                        </div>
                        
                    : (<div>No Related Blog Found..</div>)
            }
            </div>
            
            <Footer/>
             
        </div>
    );
}

export default BlogPage;