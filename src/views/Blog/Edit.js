import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UploadImg } from "../../components/atom/UploadImg"

const Edit = () => {
    const params = useParams()
    const [imgPreview,setimgPreview] = useState(null)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [edit,setEdit] = useState(true)

    let navigate = useNavigate();

    const onSubmit = () => {
        const posting = {
            title: title,
            body: body,
            image: imgPreview
        }
        console.log(posting);
        axios.put(`http://localhost:3000/v1/blogs/posts/${params.slug}/edit`,posting,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        navigate('/')
    }

    useEffect(() => {      
        axios.get(`http://localhost:3000/v1/blogs/posts/${params.slug}`)
            .then(response => {
                setTitle(response.data.data.title)
                setBody(response.data.data.body) 
                setimgPreview(`${response.data.data.image}`)  
            })
    }, [params.slug])
    

    return (
    <div className="container mx-auto py-10">
        <p className="font-medium text-2xl mb-5">Edit Post</p>
        <p className="font-medium text-lg mb-2">Title</p>
        <input type="text" placeholder="title here" className="border w-full border-gray-400 py-2 px-4 rounded-lg mb-5" value={title} onChange={(e) => setTitle(e.target.value)} />
        <UploadImg imgPreview={imgPreview} setimgPreview={setimgPreview} edit={edit} setEdit={setEdit} />
        <textarea cols="30" rows="10" className="border w-full rounded-xl p-5 my-5" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Isi blog"></textarea>
        <div className="flex justify-end">
        <button className="bg-[#39AEA9] w-max text-white py-3 px-6 rounded-full font-medium" onClick={() => onSubmit()}>Update</button>
        </div>
    </div>
    )
}

export default Edit