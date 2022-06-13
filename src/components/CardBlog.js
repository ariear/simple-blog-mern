const CardBlog = (props) => {
    return (
        <div className="border shadow w-[400px] rounded-lg p-4">
            <img src={ `http://localhost:3000/${props.data.image}` || 'https://newcdn.mowplayer.com/689084892688/2021/06/28/thumbnails/hlragaixzspmsqpw.jpg'} className="w-full h-[200px] object-cover object-center rounded-lg mb-3" alt="" />
            <p className="font-semibold text-xl">{props.data.title}</p>
            <p className="text-gray-400">Author - <span>{props.data.author.name}</span></p>
            <p className="font-medium">
            {props.data.body}
            </p>
        </div>
    )
}

export default CardBlog