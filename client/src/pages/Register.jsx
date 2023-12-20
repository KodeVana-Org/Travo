import { useEffect, useState } from "react";
import { Img } from 'react-image'
import logoSvg from "../assets/draw2.webp"
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import axios from "axios"

import Facebook from '../assets/icons/Facebook-Logo.png'
import Instagram from '../assets/icons/Instagram-Logo.png'
import Linkedin from '../assets/icons/LinkedIn-Logo.png'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (auth) {
      navigate("/")
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:6969/api/register', { name, email, password, })
      const responses = await response.data;
      if (responses) {
        const token = response.data.data;
        console.log(token);
        localStorage.setItem('token', token);
        window.location.reload();
        navigate('/');
      } else {
        console.log("see the response", response);
        alert("Invalid credentials")
      }

    } catch (error) {
      console.log('Login error : ', error)
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section className="h-screen mx-60">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src={logoSvg}
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              {/* <!--Sign in section--> */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign up with</p>

                {/* <!-- Facebook button--> */}
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full text-white"
                  >
                    {/* <!-- Facebook --> */}
                    <Img src={Facebook}
                      className="mx-auto h-7"
                    />
                  </button>

                {/* <!-- Instagram button --> */}
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full text-white"
                  >
                    <Img src={Instagram}
                      className="mx-auto h-7"
                    />
                  </button>

                {/* <!-- Linkedin button --> */}
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full text-white"
                  >
                    <Img src={Linkedin}
                      className="mx-auto h-7"
                    />
                  </button>
              </div>

              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              {/* <!-- Email input --> */}
              <input
                type="text"
                placeholder="Enter Name"
                size="lg"
                className="mb-6 px-4 py-2 w-full border-2 rounded-md"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter Email"
                size="lg"
                className="mb-6 px-4 py-2 w-full border-2 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* <!--Password input--> */}
              <div className="h-fit relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  autoComplete="off"
                  className="mb-6 px-4 py-2 h-fit w-full border-2 rounded-md"
                  onChange={(e) => setPassword(e.target.value)}
                  size="lg"
                />
                {showPassword ? (
                  <EyeOffIcon
                    className="w-6 h-6 absolute top-1/3 transform -translate-y-1/2 right-3 cursor-pointer text-gray-500"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeIcon
                    className="w-6 h-6 absolute top-1/3 transform -translate-y-1/2 right-3 cursor-pointer text-gray-500"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="mb-6 flex items-center justify-between">
                {/* <!-- Remember me checkbox --> */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!--Forgot password link--> */}
                <Link to={'#'}>Terms and conditions</Link>
              </div>

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                <button onClick={handleSubmit}
                  type="submit"
                  className="w-full rounded-md py-2 text-lg font-semibold text-[#029D9D] hover:text-white border-2 border-[#029D9D] transition-all duration-200 hover:bg-[#029D9D] outline-none"
                >
                  Register
                </button>

                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-2 font-medium">
                  Have an account ? {" "}
                  <Link to="/login"
                    href="#!"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
