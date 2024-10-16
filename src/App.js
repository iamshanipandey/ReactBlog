import React, { useContext, useEffect } from "react";
import { AppContext } from "./componenets/AppContext";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import {useSearchParams, useLocation} from "react-router-dom"

function App() {
  const {getApiData} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams(); 
  const location = useLocation();


  useEffect(()=>{
    const pages = searchParams.get("page") ?? 1;
  
  if (location.pathname.includes("tags"))
  {
    const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
    getApiData(Number(pages), tag);
  }
  else if (location.pathname.includes("categories"))
  {
    const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
    getApiData(Number(pages), null, category);
  }
  else
  {
    getApiData(Number(pages));
  }
  },[location.pathname, location.search])

  return (
   <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
   </Routes>
  );
}

export default App;
