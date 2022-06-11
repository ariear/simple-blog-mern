import {
  Routes,
  Route,
} from "react-router-dom";
import MainNav from "./components/big/MainNav";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

const App = () => {  
  return (
    <Routes>
      <Route path="/*" element={<MainNav />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App