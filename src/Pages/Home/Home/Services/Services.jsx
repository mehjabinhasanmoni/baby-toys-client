import "./Services.css";

const Services = () => {
    return (
        <div className=' mt-5 bg-[url("https://i.ibb.co/Gpjfnnr/servicebg.png")] bg-fixed bg-cover bg-no-repeat bg-center'>
            <div className="container mx-auto text-center p-10 m-10">
                    <p className="text-[#ff1276] text-xl tracking-[.25em] mb-3">The Products</p>
                    <p className="font-bold text-5xl">Our Services</p>
                <div className="services-list flex-col justify-center items-center gap-10 m-10 md:flex lg:flex">
                    <div className="support">
                        {/* Services - one */}
                        <div className="services-one flex justify-center items-center m-5 p-2 text-left ">

                            
                            <div className="list-image service-img">
                                <img src="https://i.ibb.co/3v20ybY/serviceimg-1.png" alt="" />
                            </div>
                            <div className="service-name">
                                <h5 className="text-xl mb-1 ml-5">Worldwide Delivery</h5>
                                <p className="text-gray-500 ml-5">On order over 5-7 days</p>
                            </div>
                        </div>

                        {/* Service  - two */}

                        <div className="services-two flex justify-center items-center  m-5 p-2 text-left">
                            <div className="list-image service-img">
                                <img src="https://i.ibb.co/gtzh00T/serviceimg-4.png" alt="" />
                            </div>
                            <div className="service-name">
                                <h5 className="text-xl mb-1 ml-5">Money back gurrenty</h5>
                                <p className="text-gray-500 ml-5">Send within 30 days</p>
                            </div>
                        </div>

                         {/* Service  - three */}

                         <div className="services-three flex justify-center items-center  m-5 p-2 text-left">
                            <div className="list-image service-img">
                                <img src="https://i.ibb.co/R0p7PWd/serviceimg-5.png" alt="" />
                            </div>
                            <div className="service-name">
                                <h5 className="text-xl mb-1 ml-5">24/7 support</h5>
                                <p className="text-gray-500 ml-5">Call us - 017xxxxxxxx</p>
                            </div>
                        </div>

                        
                    </div>
                    <div className="ani-image">
                        <img src="https://i.ibb.co/02WMpD4/services.png" alt="Services" />
                    </div>
                    <div className="voucher">

                        {/* Services - four */}
                        
                         <div className="services-four flex justify-center items-center  m-5 p-2 text-left">

                            
                            <div className="list-image service-img">
                                <img src="https://i.ibb.co/9WyfbBw/serviceimg-6.png" alt="" />
                            </div>
                            <div className="service-name">
                                <h5 className="text-xl mb-1 ml-5">Grate Savings</h5>
                                <p className="text-gray-500 ml-5">On order over 5-7 days</p>
                            </div>
                        </div>

                        {/* Services - five */}
                        
                        <div className="services-four flex justify-center items-center  m-5 p-2 text-left">

                            
                            <div className="list-image service-img">
                                <img src="https://i.ibb.co/R0p7PWd/serviceimg-5.png" alt="" />
                            </div>
                            <div className="service-name">
                                <h5 className="text-xl mb-1 ml-5">Gift voucher</h5>
                                <p className="text-gray-500 ml-5">Good gifts for good relations</p>
                            </div>
                        </div>


                        {/* Services - six */}
                        
                        <div className="services-four flex justify-center items-center  m-5 p-2 text-left">

                            
                            <div className="list-image service-img">
                                <img src="https://i.ibb.co/9WyfbBw/serviceimg-6.png" alt="" />
                            </div>
                            <div className="service-name">
                                <h5 className="text-xl mb-1 ml-5">Shopping Guide</h5>
                                <p className="text-gray-500 ml-5">Shopping guides here</p>
                            </div>
                         </div>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Services;