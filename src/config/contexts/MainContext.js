import axios from "axios";
import { useContext, createContext, useState } from "react";

export const MainContext = createContext({})

export const useMainContext = () => {
    return useContext(MainContext)
}

export const MainContextProvider = ({children}) => {
    const [page,setPage] = useState(1)
    const [allDataBlog,setAllDataBlog] = useState()
    const [dataPage,setDataPage] = useState()
    const [totalPage,setTotalPage] = useState(null)

    const getAllDataBlog = () => {
        axios.get(`http://localhost:3000/v1/blogs/posts/?page=${page}&limit=6`)
            .then(response => {
                setAllDataBlog(response.data.data)
                setDataPage(response.data.page)
                setTotalPage(Math.ceil(response.data.total_data / response.data.limit))
            })
    }
    getAllDataBlog()

    const nextPaging = () => {
        setPage(page + 1)
    }
    const prevPaging = () => {
        setPage(page - 1)
    }

    const MainContextValue = {
        allDataBlog,
        nextPaging,
        prevPaging,
        dataPage,
        page,
        totalPage,
        getAllDataBlog
    }

    return <MainContext.Provider value={MainContextValue}>{children}</MainContext.Provider>
}