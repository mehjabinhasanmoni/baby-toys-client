import Footer from "../../../Shared/Footer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;