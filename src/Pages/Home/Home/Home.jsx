import useTitle from "../../../Hooks/useTitle";
import Footer from "../../../Shared/Footer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";



const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
          
        </div>
    );
};

export default Home;