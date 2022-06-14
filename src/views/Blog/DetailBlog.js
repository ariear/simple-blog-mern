import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const DetailBlog = () => {
    let params = useParams()
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [author,setAuthor] = useState('')

    useEffect(() => {
        setLoading(true)
      axios.get(`http://localhost:3000/v1/blogs/posts/${params.slug}`)
        .then(response => {
            setData(response.data.data)
            setAuthor(response.data.data.author.name)
            setLoading(false)
        })
    }, [data, params, loading])
    

    return (
        <div>
        <div className="container mx-auto py-6">
            <img src={'http://localhost:3000/' + data.image} className="w-full h-[300px] object-cover object-center rounded-xl mb-3" alt="" />
            <p className="font-medium text-2xl">{data.title || 'title not found 404'}</p>
            <p className="text-gray-400 mb-4">Author - {author || ''}</p>
            <p className="font-medium">
            {data.body}
            </p>
        </div>
        </div>
    )
}

export default DetailBlog