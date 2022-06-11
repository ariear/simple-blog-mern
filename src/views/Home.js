import { Link } from "react-router-dom"
import { BtnGreen } from "../components/atom/BtnGreen"
import CardBlog from "../components/CardBlog"

const Home = () => {
    return (
        <div className="container mx-auto pt-10">
            <Link to="/blogs/create"><BtnGreen title="Create Blog" /></Link>
            <div className="grid grid-cols-3 container mx-auto gap-y-6 py-10 justify-items-center">
            <Link to="/blogs/satu">
            <CardBlog />
            </Link>
            <Link to="/blogs/dura">
            <CardBlog />
            </Link>
            <Link to="/blogs/tiga">
            <CardBlog />
            </Link>
            <Link to="/blogs/empat">
            <CardBlog />
            </Link>
            <Link to="/blogs/lima">
            <CardBlog />
            </Link>
            <Link to="/blogs/enam">
            <CardBlog />
            </Link>
            </div>
        </div>
    )
}

export default Home