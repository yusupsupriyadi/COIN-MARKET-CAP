import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false)

    const selectTheme = (value) => {
        localStorage.setItem('theme', value)
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        if (value === "dark") {
            document.querySelector('html').classList.remove('light')
        } else {
            document.querySelector('html').classList.remove('dark')
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
            <nav className="bg-gray-200 dark:bg-indigo-background py-5">
                <div className=" container mx-auto px-6 ">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                {/* Search input on desktop screen */}
                                <button onClick={() => selectTheme('light')} className="focus:outline-none w-7 h-7 bg-gray-200 rounded-full mr-2"></button>
                                <button onClick={() => selectTheme('dark')} className="focus:outline-none w-7 h-7 bg-indigo-background rounded-full"></button>
                             
                            </div>
                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
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
                                    <a href="https://www.coingecko.com/id/api" className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white" >API</a>
                                    <a href="https://yusupsupriyadi.000webhostapp.com" className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white" >MY Website</a>
                            </div>
                            <div className="flex items-center py-2 -mx-1 md:mx-0">
                            <a href="https://github.com/yusupsupriyadi/COIN-MARKET-CAP" className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-indigo-300 md:mx-2 md:w-auto">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )
}
