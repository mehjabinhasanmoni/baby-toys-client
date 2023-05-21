import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';
import useTitle from "../../Hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [isDisabled, setDisabled] = useState(true);
  useTitle('Add Toy');

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const subcategory = form.subcategory.value;
    const qty = form.qty.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    const toysEntry = {
        toysName : name,
        toysPhoto : photo,
        sellerName : userName,
        sellerEmail : userEmail,
        subcategory,
        qty,
        price,
        ratings,
        description
    }

    console.log(toysEntry);

    // Data send
    fetch('http://localhost:5001/toysCollection', {
        method : 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body: JSON.stringify(toysEntry)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Toys Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      
        
    })
  };

    



  return (
    <form
      onSubmit={handleAddToy}
      className="container mx-auto border-4 border-gray-600 shadow-lg shadow-gray-700 tracking-[.25em] m-5 p-10"
    >
      <h2 className="text-center font-bold text-3xl text-[#ff1276] m-5 p-5">
        Add Your Toy Here ..
      </h2>
      {/* Toy Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ff1276]">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ff1276]">Product Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
      </div>

      {/* Seller Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ff1276]">Seller Name</span>
          </label>
          <input
            type="text"
            name="seller-name"
            defaultValue={user?.displayName}
            placeholder="Seller Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ff1276]">Seller Email</span>
          </label>
          <input
            type="text"
            name="seller-email"
            defaultValue={user?.email}
            disabled={isDisabled}
            placeholder="Seller Email text-[#ff1276]"
            className="input input-bordered"
          />
        </div>
      </div>

      {/* Product Specification */}
      <div className="mt-2 flex gap-10">
        <div className="form-control grow">
          <select name="subcategory" className="select select-secondary w-full">
            <option disabled selected>
              Select Sub-Category
            </option>
            <option value="Science kits">Science kits</option>
            <option value="Math learning toys">Math learning toys</option>
            <option value="Engineering kits">Engineering kits</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ff1276]">
              Available Quantity
            </span>
          </label>
          <input
            type="text"
            name="qty"
            placeholder="Available Quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ff1276]">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#ff1276]">Ratings</span>
          </label>
          <input
            type="text"
            name="ratings"
            placeholder="Ratings"
            className="input input-bordered"
          />
        </div>
      </div>

      {/* Product Details Description */}
      <div className="">
        <textarea
        name="description"
          placeholder="Description"
          className="mt-5 textarea textarea-bordered textarea-lg w-full "
        ></textarea>
      </div>

      <div className="form-control mt-6">
        <input className="btn btn-success" type="submit" value="Add Toys" />
      </div>
    </form>
  );
};

export default AddToy;
