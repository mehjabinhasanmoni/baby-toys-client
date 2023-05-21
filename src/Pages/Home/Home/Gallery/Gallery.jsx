import "./Gallery.css";

const Gallery = ({ toys }) => {
  return (
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
  );
};

export default Gallery;
