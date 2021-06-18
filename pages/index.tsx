
import Market from "../Components/Market";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Head from "next/head";




export default function index() {
    return (
        <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta property="og:title" content="COIN MARKET CAP" />
        <meta property="og:url" content="https://coin-market.netlify.app/" />
        <meta property="og:description" content="Live harga cryptocurrency lebih dari 100 coin dan terupdate harga per 3 detik. Crypto diantara lain Bitcoin , Ethereum , EOS , Dogecoin dan banyak lagi ." />
        <meta property="og:image" content="https://ia601500.us.archive.org/18/items/108600403-b-5c-2df-00-73c-9-11eb-8721-293cfacd-1762/108600403-b5c2df00-73c9-11eb-8721-293cfacd1762.png" />
        
        <meta property="og:image:url" content="https://archive.org" />
        <meta property="og:image:url" content="https://ia601500.us.archive.org/18/items/108600403-b-5c-2df-00-73c-9-11eb-8721-293cfacd-1762/108600403-b5c2df00-73c9-11eb-8721-293cfacd1762.png" />
             <title>Coin Market</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                </Head>
            <div className="bg-gray-200 dark:bg-indigo-background">
                <Navbar/>
                <Banner/>
            <Market />
            <Footer/>
        </div>
        </div>
    )
}
