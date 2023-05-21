import { useEffect, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";
import Services from "./Services/Services";



const Home = () => {
    useTitle('Home');
    const [toys,setToys]=useState([])
    useEffect(() => {
        fetch('https://baby-toys-server-production.up.railway.app/allToys')
          .then((res) => res.json())
          .then((data) => setToys(data))
          .catch(error=>console.log(error.message))
      }, []);

    return (
        <div>
            <Banner></Banner>
            <Gallery toys={toys}></Gallery>
            <Category toys={toys}></Category>
            <Services></Services>
            <About></About>
          
        </div>
    );
};

export default Home;