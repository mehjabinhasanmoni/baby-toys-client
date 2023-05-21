import useTitle from "../../../Hooks/useTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Services from "./Services/Services";



const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Services></Services>
            <About></About>
          
        </div>
    );
};

export default Home;