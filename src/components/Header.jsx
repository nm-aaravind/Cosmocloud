import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="w-full bg-blue-600 p-4 text-white">
        <div className="w-full mx-auto flex justify-between items-center">
            <Link to={"/"} className="sm:text-xl md:text-3xl font-light">
                MploiBase
            </Link>
            <Link to={"/add-employee"} className="bg-blue-800 sm:text-sm md:text-lg hover:bg-blue-900 text-white py-2 px-4 rounded focus:outline-none active:ring-2 active:ring-blue-300 transition duration-300">
                Add Employee
            </Link>
        </div>
    </header>
  )
}

export default Header