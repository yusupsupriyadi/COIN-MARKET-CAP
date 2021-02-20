import React, { useEffect, useState } from 'react'
import Link from 'next/link';

function Navbar2() {
    const [ isOpen, setIsOpen ] = useState(false)


    const selectTheme = value => {
        localStorage.setItem("theme", value)
        document.querySelector("html").classList.add(localStorage.getItem("theme"))
        if (value === "dark") {
            document.querySelector("html").classList.remove("light")
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.removeItem('theme')
    }, []);

    return (

        
            <nav className="bg-white dark:bg-gray-800 shadow">
                <div className="container mx-auto px-6 ">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Link href="/">
                                    <a className="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">Ystudi</a>
                                </Link>
                                {/* Search input on desktop screen */}
                                <div className="mx-10 hidden md:block">
                                    <input type="text" className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-900 rounded-md placeholder-gray-500 dark:placeholder-gray-200 border border-transparent focus:outline-none focus:bg-white focus:ring focus:border-blue-400" placeholder="Search" aria-label="Search" />
                                </div>
                                <button onClick={() => selectTheme('light')} className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2"></button>
                                <button onClick={() => selectTheme('dark')} className="focus:outline-none w-4 h-4 bg-black rounded-full"></button>
                            </div>
                            {/* Mobile menu button */}
                            <div className="flex md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden lg:flex items-center`}>
                            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                <Link href="/">
                                    <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white" >Home</a>
                                </Link>
                                <Link href="Library">
                                    <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white">Library</a>
                                </Link>
                                <Link href="PaketMember">
                                    <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white" >Paket Member</a>
                                </Link>
                                <Link href="https://discord.com/">
                                    <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white" >Discord</a>
                                </Link>
                            </div>
                            <div className="flex items-center py-2 -mx-1 md:mx-0">
                                <Link href="auth/Login">
                                    <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a>
                                </Link>
                                <Link href="auth/Register">
                                    <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a>
                                </Link>
                            </div>
                            {/* Search input on mobile screen */}
                            <div className="mt-3 md:hidden">
                                <input type="text" className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline" placeholder="Search" aria-label="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        


    )
}

export default Navbar2
