import Input from "../../components/atom/Input"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const register = () => {
        axios.post('http://localhost:3000/v1/auth/register', {
            name,
            email,
            password
        }).then(response => {
            if (response.status === 200) {
                navigate('/login')
            }
        })
    }

    return (
        <div className="flex">
            <div className="grow w-[100px] min-h-screen">
            <img src="/asset/images/img-login.jpg" className="min-h-screen object-cover object-center" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-[40vw] relative">
                <div className="w-[50%]">
                <p className="font-medium text-3xl mb-4 text-center">Register</p>
                <Input type="text" name="Name" value={name} setValue={setName} />
                <Input type="email" name="Email" value={email} setValue={setEmail} />
                <Input type="password" name="Password" value={password} setValue={setPassword} />
                <button className="py-2 px-10 w-full text-white rounded-lg bg-gray-400 font-semibold" type="submit" onClick={() => register() } >Register</button>
                <Link to="/login"><p className="text-red-400 text-sm pt-5 text-center">Sudah punya akun?</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Register