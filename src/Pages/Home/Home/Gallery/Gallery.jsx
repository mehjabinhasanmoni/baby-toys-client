import "./Gallery.css";

const Gallery = ({ toys }) => {
  return (
    <div className="py-16 my-10">
      <p className="text-[#ff1276] text-5xl tracking-[.25em] mb-3 text-center">Gallery</p>
    
    <div className="container mx-auto gallery mt-5">
       
      {toys.map((toyImg) =>
        toyImg.toysPhoto ? (
          <div className="gallery-item">
            <img
              className="img-fluid"
              src={toyImg.toysPhoto}
              alt=" Toy Photo"
            />
          </div>
        ) : null
      )}
    </div>
    </div>
  );
};

export default Gallery;
