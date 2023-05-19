

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://demo.ishithemes.com/prestashop/PRS126/modules/ishislider/views/img/slide-1.png" className="w-full" />
          <div>
            <p className='absolute top-40 right-[400px] text-2xl leading-3 text-[#ff1276]'>MIND GAMES</p>
            <p className='absolute top-52 right-64 text-7xl font-bold'>Favourite Toys</p>
            <p className='bg-yellow-400 absolute top-80 right-[300px] text-xl p-3'>Up to 60% off to selected toys</p>
        </div>
          

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <div>
            <p className='absolute top-40 left-96 text-2xl leading-3 text-[#ff1276]'>MIND GAMES</p>
            <p className='absolute top-52 left-64 text-7xl font-bold'>Favourite Toys</p>
            <p className='bg-yellow-400 absolute top-80 left-[300px] text-xl p-3'>Up to 60% off to selected toys</p>
        </div>
          <img src="https://demo.ishithemes.com/prestashop/PRS126/modules/ishislider/views/img/slide-2.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://demo.ishithemes.com/prestashop/PRS126/modules/ishislider/views/img/slide-1.png" className="w-full" />
          <div>
            <p className='absolute top-40 right-[400px] text-2xl leading-3 text-[#ff1276]'>MIND GAMES</p>
            <p className='absolute top-52 right-64 text-7xl font-bold'>Favourite Toys</p>
            <p className='bg-yellow-400 absolute top-80 right-[300px] text-xl p-3'>Up to 60% off to selected toys</p>
        </div>
          <div>
            <p className='absolute top-40 right-[400px] text-2xl leading-3 text-[#ff1276]'>MIND GAMES</p>
            <p className='absolute top-52 right-64 text-7xl font-bold'>Favourite Toys</p>
            <p className='bg-yellow-400 absolute top-80 right-[300px] text-xl p-3'>Up to 60% off to selected toys</p>
        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
      </div>
    );
};

export default Banner;