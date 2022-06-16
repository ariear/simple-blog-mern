import axios from "axios"
import { Link } from "react-router-dom"

const CardBlog = (props) => {
    const hapus = () => {
        axios.delete(`http://localhost:3000/v1/blogs/posts/${props.id}`)
            .then(response => {
                props.getAllData()
            })
    }
    return (
        <div className="border shadow w-[400px] rounded-lg p-4">
            <Link to={`/blogs/${props.id}`}>
            <img src={ `http://localhost:3000/${props.data.image}` || 'https://newcdn.mowplayer.com/689084892688/2021/06/28/thumbnails/hlragaixzspmsqpw.jpg'} className="w-full h-[200px] object-cover object-center rounded-lg mb-3" alt="" />
            </Link>
            <p className="font-semibold text-xl">{props.data.title}</p>
            <p className="text-gray-400">Author - <span>{props.data.author.name}</span></p>
            <p className="font-medium mb-5">
            {props.data.body}
            </p>
            <div className="flex items-center">
                <Link to={`/blogs/${props.id}/edit`}><p className="py-2 px-5 rounded-lg bg-yellow-400 mr-3">Edit</p></Link>
                <p className="py-2 px-5 rounded-lg bg-red-400 text-white cursor-pointer" onClick={() => hapus()}>Hapus</p>
            </div>
        </div>
    )
}

export default CardBlog