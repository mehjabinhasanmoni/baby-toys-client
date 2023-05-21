import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
  useTitle("All Toys");
  const fechedToys = useLoaderData();
  const [allToys, setAllToys] = useState(fechedToys);
  const [search, setSearch] = useState("");
  console.log("allToys",allToys);

  const searchFunc=(item) => {
    const toysName = item.toysName;
    if (toysName && typeof toysName === "string") {
      return toysName.toLowerCase().includes(search.toLowerCase());
    }
  }
  const handleSearch = () => {
    const searchResults = fechedToys.filter(searchFunc);
    setAllToys(searchResults)
  };


  useEffect(()=>{
    if(!search){
      setAllToys(fechedToys)
    }
  },[search])

  

  

  return (
    <div>
      {/* Search Option */}

      <div className="mt-10 p-5 form-control container mx-auto">
        <div className=" container mx-auto  input-group flex justify-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
         
            <button
              className="btn btn-square btn-error"
              onClick={() => setSearch("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> 
            </button>
        
        </div>
      </div>
      <br />
      <br />

      {/* Tabular Form */}

      <div className="container mx-auto overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Photo</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Data show */}

            {allToys.map((toy, index) => (
              <tr key={index}>
                <td>
                  <div className="mask mask-squircle w-12 h-12 border border-gray-700 ">
                    <img src={toy.toysPhoto} alt="" />
                  </div>
                </td>
                <td>{toy.sellerName ? toy.sellerName : "N/A"}</td>
                <td>{toy.toysName}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.price}</td>
                <td>{toy.qty}</td>

                <th>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-success">details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
