import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import BlogDetails from "./BlogDetails";
import Spiner from './Spiner';

function Blog(){

    const {post, loading} = useContext(AppContext);
    return(
        <div className='w-full flex flex-col justify-center items-center mt-28 mb-16'>
            {
               loading? (<Spiner/>):
                    post.length === 0? (<div>No Post Found..!</div>):(
                        post.map((singlePost)=>(
                           <BlogDetails key={singlePost.id} singlePost={singlePost} />
                        ))
                )
                
            }
            
        </div>
        
    );
}

export default Blog;