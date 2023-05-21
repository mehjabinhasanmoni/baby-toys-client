import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ToysList = ({ subcategory, toys }) => {
    // Location Hooks
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="container mx-auto grid grid-cols-4 gap-20">
     
      {/* row */}

      {toys.map((toy) => (
      <div className="card w-96 glass ">
      <figure><img src={toy.toysPhoto} alt="Toy"/></figure>
      <div className="card-body">
        <h2 className="card-title">{toy.toysName}</h2>
        <p>Price : {toy.price}</p>
        <p>Ratings : {toy.ratings}</p>

        <div className="card-actions justify-end">
        <Link to={`/toy/${toy._id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
      ))}
    </div>
  );
};

export default ToysList;
