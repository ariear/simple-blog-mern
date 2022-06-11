import { Routes, Route, Outlet } from "react-router-dom";
import About from "../../views/About";
import Create from "../../views/Blog/Create";
import DetailBlog from "../../views/Blog/DetailBlog";
import Home from "../../views/Home";
import MainNavComponent from "./MainNavComponent";

const MainNav = () => {
    return (
        <nav>
            <MainNavComponent />
            <Outlet />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs/:slug" element={<DetailBlog />} />
                <Route path="/blogs/create" element={<Create />} />
            </Routes>
        </nav>
    )
}

export default MainNav