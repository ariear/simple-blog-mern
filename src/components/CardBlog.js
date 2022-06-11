const CardBlog = () => {
    return (
        <div className="border shadow w-[400px] rounded-lg p-4">
            <img src="/asset/images/img-login.jpg" className="w-full h-[200px] object-cover object-center rounded-lg mb-3" alt="" />
            <p className="font-semibold text-xl">Title Blog</p>
            <p className="text-gray-400">Author - <span>Arie</span></p>
            <p className="font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, alias. repudiandae praesentium et reprehenderit facilis fugit cupiditate incidunt veniam, perferendis provident saepe.
            </p>
        </div>
    )
}

export default CardBlog