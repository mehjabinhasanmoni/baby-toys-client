import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <div>
            <div className="container mx-auto p-10 m-10 flex-col justify-center items-center gap-10 md:flex lg:flex">

                <div >
                    
                    <p className="text-[#ff1276] text-xl tracking-[.25em] mb-3">Know Everything</p>
                    <p className="font-bold text-5xl mb-7">About Us</p>
                    <p className="mb-4">Baby Toys is one of the best website where you can find diffent types of toys like Educational, Mathmatices, Engineering Tools, Robotices etc.<br/>
                    </p>
                    <p>We are try to given a very first delivery service for our cute customers and must be make sure that we also recive a return values whics is choice by baby.</p>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="about-img border-4 border-white shadow-2xl w-1/2 rounded">
                    <img className="w-full" src="https://i.ibb.co/47PbR7p/g5.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default About;