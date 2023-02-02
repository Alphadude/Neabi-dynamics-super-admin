import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import{ RiEyeCloseLine } from 'react-icons/ri'
import { BsEyeFill } from 'react-icons/bs'
import Logo from '../images/Nav/logo.svg'

const Auth = () =>{
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return(
    <section>
      <Link to="/">
        <div className="flex m-8">
            <img src={Logo} alt="Naebi's Logo" />
          <h1 className="mt-4 font-bold text-[16px] md:text-[24px]">Naebi Dynamic Concepts</h1>
        </div>
      </Link>

      {/*Sign-in form*/}
      <div className="mx-auto items-center justify-center  border-2 rounded-[20px] shadow-xl h-1/2 w-[80vw] md:h-[492px] md:w-[492px]">
        <h1 className="text-[#0B1C2E] text-[20px] md:text-[32px] text-center leading-8 pt-8">Sign in</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center ">
          <div className="flex flex-col pt-4 md:pt-8">
            <label for="email" className="text-[16px] md:text-[20px] leading-6 pb-1"> Email Address</label>
            <input type="text" className="bg-[#D9D9D9] border-2 rounded-lg border-[#979699] w-[60vw] md:w-[395px] h-1/2 md:h-[57px] px-6 py-2 " />
          </div>
          <div className="flex flex-col pt-4 md:pt-8">
            <label for="password" className="text-[16px] md:text-[20px] leading-6 pb-1"> Password</label>
            <input type={showPassword ? "text" : "password"} className="relative bg-[#D9D9D9] border-2 rounded-lg border-[#979699] px-6 py-2 w-[60vw] md:w-[395px] h-1/2 md:h-[57px] " />
            <div className="" onClick={togglePassword}>
              {showPassword ?
                <BsEyeFill className="absolute cursor-pointer text-[26px] md:text-[32px] top-80 right-[90px] md:right-[534px] md:top-96 pt-3 md:pt-2 "/> :
                <RiEyeCloseLine className="absolute cursor-pointer text-[26px] md:text-[32px] top-80 right-[90px] md:right-[534px] md:top-96  pt-3 md:pt-2 "/>
            }
            </div>
          </div>
          <p className="text-[12px] md:text-[20px] text-[#525256] pt-2 pl-32 md:pl-64 transform duration-200 hover:scale-105"> Forgot Password?</p>

          <Link to="/dashboard">
            <button type="submit" className="bg-[#0B1C2E] text-white hover:text-[#0B1C2E] hover:bg-white hover:border-[#0B1C2E] hover:border-2 rounded-lg w-[60vw] md:w-[395px] h-[38px] md:h-[57px] mt-4 mb-8 md:mb-0">
                Sign In
            </button>
          </Link>
        </form>

      </div>
      <p className="text-center mt-2">New here? <a href="/sign-out" className="hover:border-b-2 hover:border-[#0B1C2E]">Sign up</a></p>

    </section>
  )
}
export default Auth
