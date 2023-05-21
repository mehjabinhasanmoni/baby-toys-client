import { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch('https://baby-toys-server-production.up.railway.app/allToys')
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);

  console.log(toy);

  return (
    <div className="gallery mt-5">
      

        {
          toy.map(toyImg => (

            toyImg.toysPhoto ? 
            <div className="gallery-item">
                  <img className="img-fluid" src={toyImg.toysPhoto} alt=" Toy Photo" />
            </div>
            :
            null
          ))
        }
      
    </div>
  );
};

export default Gallery;
