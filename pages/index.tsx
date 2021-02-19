
import Market from "../Components/Market";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Head from "next/head";




export default function index() {
    return (
        <div>
        <Head>
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
