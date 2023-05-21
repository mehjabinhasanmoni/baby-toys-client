
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const UpdateToys = () => {
    useTitle('Update Toys');

    const toy = useLoaderData();
    const { _id, toysName, price, qty, description } = toy;

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const qty = form.qty.value;
        const price = form.price.value;
        const description = form.description.value;
    
        const updatedToy = {
            qty,
            price,
            description
        }

     // Data send
     fetch(`https://baby-toys-server-production.up.railway.app/myToys/${_id}`, {
        method : 'PUT',
        headers : {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Updated!',
                text: 'Toys Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      
        
    })
}


    return (
        
        <form onSubmit={handleUpdateToy}
       
        className="container mx-auto border-4 border-gray-600 shadow-lg shadow-gray-700 tracking-[.25em] m-5 p-10"
      >
        <h2 className="text-center font-bold text-3xl text-[#ff1276] m-5 p-5">
          Update Toy : {toysName}
        </h2>
   
 
  
        {/* Product Specification */}
        <div className="mt-2 flex gap-10">
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#ff1276]">
                Available Quantity
              </span>
            </label>
            <input
              type="text"
              name="qty"
              defaultValue={qty}
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
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
         
        </div>
  
        {/* Product Details Description */}
        <div className="">
          <textarea
          name="description"
            placeholder="Description"
            defaultValue={description}
            className="mt-5 textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
  
        <div className="form-control mt-6">
          <input className="btn btn-success" type="submit" value="Update Toys" />
        </div>
      </form>
    );
};

export default UpdateToys;