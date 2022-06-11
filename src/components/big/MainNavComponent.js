import { NavLink , Link} from "react-router-dom";

const MainNavComponent = () => {
    return (
        <nav className="flex items-center justify-between px-10 py-5 bg-[#39AEA9] text-white">
            <p className="font-medium text-2xl">MERN</p>
            <div className="flex items-center font-medium">
                <NavLink to="/" className={ (e) => e.isActive ? 'text-[#ffffff98] transition-all' : 'text-white' } ><p className="mr-5">Home</p></NavLink>
                <NavLink to="/about" className={(e) => e.isActive ? 'text-[#ffffff98] transition-all' : 'text-white' }><p className="mr-5">About</p></NavLink>
                <Link to="/login"><p className="py-2 px-7 rounded-lg bg-[#45ccc5]">Login</p></Link>
            </div>
        </nav>
    )
}

export default MainNavComponent