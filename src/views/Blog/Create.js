import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UploadImg } from "../../components/atom/UploadImg"

const Create = () => {
    const [imgPreview,setimgPreview] = useState(null)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    let navigate = useNavigate();

    const onSubmit = () => {
        const posting = {
            title: title,
            body: body,
            image: imgPreview
        }

        axios.post('http://localhost:3000/v1/blogs',posting,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        navigate('/')
    }

    return (
        <div className="container mx-auto py-10">
            <p className="font-medium text-2xl mb-5">Create New Blog Post</p>
            <p className="font-medium text-lg mb-2">Title</p>
            <input type="text" placeholder="title here" className="border w-full border-gray-400 py-2 px-4 rounded-lg mb-5" value={title} onChange={(e) => setTitle(e.target.value)} />
            <UploadImg imgPreview={imgPreview} setimgPreview={setimgPreview} />
            <textarea cols="30" rows="10" className="border w-full rounded-xl p-5 my-5" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Isi blog"></textarea>
            <div className="flex justify-end">
            <button className="bg-[#39AEA9] w-max text-white py-3 px-6 rounded-full font-medium" onClick={() => onSubmit()}>Save</button>
            </div>
        </div>
    )
}

export default Create