import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({singlePost})
{
    return(
        <div className='max-w-[35%] mb-8' >
            {
                <div >
                    <NavLink to={`/blog/${singlePost.id}`}>
                    <p className='text-[20px] font-bold mb-3 '>{singlePost.title}</p>
                    </NavLink>
                    <p>
                        By <span className='italic'>{singlePost.author}</span> on 
                        <NavLink to={`/categories/${singlePost.category.replaceAll(" ","-")}`}>
                        <span className='font-bold underline'>{singlePost.category}</span>
                        </NavLink>
                    </p>
                    <p className='mb-3'>Posted on {singlePost.date}</p>
                    <p>{singlePost.content}</p>
                    <div>
                        {
                            singlePost.tags.map((singleTag, index)=>(
                                <NavLink key={index} to={`/tags/${singleTag.replaceAll(" ", "-")}`}>
                                    <span className='mt-2 text-blue-700 text-[14px] font-semibold underline mr-2 ' >
                                        #{singleTag}
                                    </span>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default BlogDetails;