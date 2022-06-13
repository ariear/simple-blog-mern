import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BtnGreen } from "../components/atom/BtnGreen"
import { useMainContext } from "../config/contexts/MainContext"
import CardBlog from "../components/CardBlog"
import { Paging } from "../components/Paging"

const Home = () => {
    const [getDataBlog,setGetDataBlog] = useState(null)
    const context = useMainContext()
    
    useEffect(() => {
      setGetDataBlog(context.allDataBlog)
    }, [context.allDataBlog])
    
    
    return (
        <div className="container mx-auto pt-10">
            <Link to="/blogs/create"><BtnGreen title="Create Blog" /></Link>
            <div className="grid grid-cols-3 container mx-auto gap-y-6 py-10 justify-items-center"> 
            {
                getDataBlog != null ?
                getDataBlog.map(e => 
                    <CardBlog key={e._id} data={e} />
                )
                    :
                <p>Loading</p>
            }
            </div>
            <Paging />
        </div>
    )
}

export default Home