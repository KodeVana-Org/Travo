import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function NavBar() {

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <nav className="px-96 h-24 text-white text-center items-center flex justify-between bg-[#029D9D]">
      <span className="text-4xl font-abrill-fatface font-extrabold">
        Travo
      </span>
      <ul className="flex text-lg font-bold">
        <Link className="p-3 m-2 group" to={"/"}>
          <li>
            Home
            <div className="mt-1 h-0.5 w-4/5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
          </li>
        </Link>
        <li className="p-3 m-2 relative group">
          <p className="cursor-default">Categories</p>
          <div className="mt-1 h-0.5 w-4/5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
          <ul className="p-5 pt-0 left-0 top-16 w-fit text-left bg-[#029D9D] absolute opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-sm z-10">
            <Link className="hover:text-[#FCC603]" to={"/destinations"}>
              <li>
                Destinations
              </li>
            </Link>
            <Link className="hover:text-[#FCC603]" to={"/tours"}>
              <li>
                Tours
              </li>
            </Link>
          </ul>
        </li>
        <Link className="p-3 m-2 group" to={"/blogs"}>
          <li>
            Blogs
            <div className="mt-1 h-0.5 w-4/5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
          </li>
        </Link>
        <Link className="p-3 m-2 group" to={"/places"}>
          <li>
            New Arrival
            <div className="mt-1 h-0.5 w-4/5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
          </li>
        </Link>
        <Link className="p-3 m-2 group" to={"/about"}>
          <li>
            About Us
            <div className="mt-1 h-0.5 w-4/5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
          </li>
        </Link>
        <Link className="p-3 m-2 group" to={"/contact"}>
          <li>
            Contact Us
            <div className="mt-1 h-0.5 w-4/5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
          </li>
        </Link>
      </ul>
      {loggedIn ? (
        <Link to='/me'
          className="text-center py-2 items-center px-4 font-bold text-[#029D9D] text-lg hover:text-white bg-white border-2 border-white hover:bg-[#029D9D] rounded-md transition-all duration-200"
        >
          Me
        </Link>
      ) : (
        <Link
          className="px-8 py-2 font-bold text-[#029D9D] hover:text-white bg-white border-2 border-white hover:bg-[#029D9D] rounded-md transition-all duration-200"
          to={'/login'}
        >
          Sign In
        </Link>
      )}
    </nav>
  )
}