import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import{ RiEyeCloseLine } from 'react-icons/ri'
import { BsEyeFill } from 'react-icons/bs'
import Logo from '../images/Nav/logo.svg'
import Swal from 'sweetalert2'

const Auth = () =>{
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url:"http://localhost:4000/api/v1/admin/login",
      method:"POST",
      data:{email,password}
    })
    .then((data)=>{
      localStorage.setItem("token", data.data.token)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successful',
        text:"Welcome to Neabi Dynamics concept limited",
        showConfirmButton: false,
        timer: 1500
      })
      .then(()=>{navigate("/dashboard")})
    })
    .catch(err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sign in',
        text:"Sorry, we can’t find an account with this email address, please try again or create a new account.",
        showConfirmButton: false,
        timer: 1500
      })
      .then(()=>{window.location.reload()})
    })
  }
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return(
    <section className='w-screen'>
      <Link to="/">
        <div className="flex m-8">
            <img src={Logo} alt="Naebi's Logo" />
          <h1 className="mt-4 font-bold text-[16px] md:text-[24px]">Naebi Dynamic Concepts</h1>
        </div>
      </Link>

      {/*Sign-in form*/}
      <div className=" mx-auto items-center justify-center  border-2 rounded-[20px] shadow-xl h-fit mt-16  w-[80vw] md:h-[460px] md:w-[400px] ml-[10%] md:ml-[36%]">
        <h1 className="text-[#0B1C2E] text-[20px] md:text-[25px] text-center leading-8 pt-8">Sign in</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center ">
          <div className="flex flex-col pt-4 md:pt-8">
            <label for="email" className="text-[12px] md:text-[16px] leading-6 pb-1"> Email Address</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[60vw] md:w-[300px] h-1/2 md:h-[50px] px-6 py-2 " />
          </div>
          <div className="flex flex-col pt-4 md:pt-8">
            <label for="password" className="text-[12px] md:text-[16px] leading-6 pb-1"> Password</label>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e)=>{setPassword(e.target.value)}}  required className="relative bg-[#D9D9D9] border-2 rounded-lg border-[#979699] px-6 py-2 w-[60vw] md:w-[300px] h-1/2 md:h-[50px] " />
            <div className="b" onClick={togglePassword}>
              {showPassword ?
                <BsEyeFill className="absolute cursor-pointer text-[26px] md:text-[32px] top-16 right-[90px] md:right-[41%] md:top-[380px] pt-3 md:pt-2 md:mt-6"/> :
                <RiEyeCloseLine className="absolute cursor-pointer text-[26px] md:text-[32px] top-16 right-[90px] md:right-[41%] md:top-[380px]  pt-3 md:pt-2 md:mt-6"/>
            }
            </div>
          </div>
          <p className="text-[11px] md:text-[14px] text-[#525256] pt-2 pl-32 md:pl-48 transform duration-200 hover:scale-105"> Forgot Password?</p>

          {/* <Link to="/dashboard"> */}
            <button type="submit" className="bg-[#0B1C2E] text-white hover:text-[#0B1C2E] hover:bg-white hover:border-[#0B1C2E] hover:border-2 rounded-lg w-[60vw] md:w-[300px] h-[38px] md:h-[50px] mt-4 mb-8 md:mb-0">
                Sign In
            </button>
          {/* </Link> */}
        </form>
      </div>

      <p className="text-center mt-2">New here? <a href="/sign-out" className="hover:border-b-2 hover:border-[#0B1C2E]">Sign up</a></p>


    </section>
  )
}
export default Auth
