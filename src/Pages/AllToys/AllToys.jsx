import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
 

  console.log('All Toys:', allToys);

  // const toyID = allToys.map(toy => {
  //   console.log(toy.toysName);
  // })

  return (
    <div>
       
      {/* Search Option */}

      <div className="mt-10 p-5 form-control container mx-auto">
        <div className=" container mx-auto  input-group flex justify-center">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
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
        </div>
      </div>
      <br />
      <br />

      {/* Tabular Form */}
     

      <div className="overflow-x-auto w-full">
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
           
           {allToys.map((toy,index) =>
             <tr key={index}>
            <td>
                <div className="mask mask-squircle w-12 h-12 border border-gray-700 ">
                    <img src={toy.toysPhoto} alt="" />
            
                </div>
             </td>   
            <td>{toy.sellerName?toy.sellerName : 'N/A'}</td>
            <td>{toy.toysName}</td>
            <td>{toy.subcategory}</td>
            <td>{toy.price}</td>
            <td>{toy.qty}</td>

            <th>
              <button className="btn btn-success">details</button>
            </th>
          </tr>
           
          )}
         
    
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
