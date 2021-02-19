
import Market from "../Components/Market";
import Layouts from "../Components/Layouts";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";




export default function index() {
    return (
        <Layouts title="Coin Market">
            <div className="bg-gray-200 dark:bg-indigo-background">
                <Navbar/>
                <Banner/>
            <Market />
            <Footer/>
        </div>
        </Layouts>
    )
}
