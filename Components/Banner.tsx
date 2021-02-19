import React from 'react'

function Banner() {
    return (
        
        <div className="text-gray-700 bg-gray-200 dark:bg-indigo-background  body-font">
            <div className="px-8 py-10 mx-auto lg:px-4">
                <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                    <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-5xl title-font">
                        COIN MARKET CAP
                    </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">Live harga cryptocurrency lebih dari 100 coin dan terupdate harga per 3 detik. Crypto diantara lain<span className="shadow-offset-blue text-blue-500 font-semibold"> Bitcoin</span> , <span className="shadow-offset-blue text-blue-500 font-semibold"> Ethereum</span> , <span className="shadow-offset-blue text-blue-500 font-semibold"> EOS</span> , <span className="shadow-offset-blue text-blue-500 font-semibold"> Dogecoin</span> dan banyak lagi .</p>
                </div>
                    <div className="flex lg:justify-center">
                            <a href="https://www.coingecko.com" className="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none">Market</a>
                            <a href="https://www.coingecko.com/en/exchanges" className="inline-flex items-center px-4 py-2 ml-4 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:shadow-outline focus:outline-none">Exchanges</a>
                    
                    
                    
                </div>
                </div></div>
    )
}

export default Banner
