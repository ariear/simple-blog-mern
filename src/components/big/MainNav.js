import { Routes, Route, Outlet } from "react-router-dom";
import { MainContextProvider } from "../../config/contexts/MainContext";
import About from "../../views/About";
import Create from "../../views/Blog/Create";
import DetailBlog from "../../views/Blog/DetailBlog";
import Edit from "../../views/Blog/Edit";
import Home from "../../views/Home";
import MainNavComponent from "./MainNavComponent";

const MainNav = () => {
    return (
        <nav>
            <MainContextProvider>
            <MainNavComponent />
            <Outlet />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs/:slug" element={<DetailBlog />} />
                <Route path="/blogs/:slug/edit" element={<Edit />} />
                <Route path="/blogs/create" element={<Create />} />
            </Routes>
            </MainContextProvider>
        </nav>
    )
}

export default MainNav