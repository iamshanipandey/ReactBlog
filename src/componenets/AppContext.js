import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [pages, setPages] = useState();
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function getApiData(pages = 1, tag= null , category){

        setLoading(true);
        let url = `${baseUrl}?page=${pages}`;
        if (tag)
        {
            url += `&tag=${tag}`;
        }
        if (category)
        {
            url += `&category=${category}`;
        }
        try{
            const fetchData = await fetch(url);
            const data = await fetchData.json();
            setTotalPages(data.totalPages);
            setPages(data.page);
            setPost(data.posts);
        }

        catch (error)
        {
            console.log("are yrr api fatch karne me erro aa gya thoda dekho kya dikkat hai..");
            setPages(1);
            setTotalPages(null);
            setPost([]);
        }
        setLoading(false);
    }

    function handleChangePage(pages){

        setPages(pages);
        navigate({search: `?page=${pages}`})
    }


    const value = 
    {
        post,
        setPost,
        pages,
        setPages,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        handleChangePage,
        getApiData
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}
