import BtnGray from "../../components/atom/BtnGray"
import Input from "../../components/atom/Input"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex">
            <div className="grow w-[100px] min-h-screen">
            <img src="/asset/images/img-login.jpg" className="min-h-screen object-cover object-center" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-[40vw] relative">
                <div className="w-[50%]">
                <p className="font-medium text-3xl mb-4 text-center">Register</p>
                <Input type="text" name="Name" />
                <Input type="email" name="Email" />
                <Input type="password" name="Password" />
                <BtnGray name="Register" type="submit" />
                <Link to="/login"><p className="text-red-400 text-sm pt-5 text-center">Sudah punya akun?</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Register