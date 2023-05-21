import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from 'sweetalert2';
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toggleSort, setToggleSort] = useState(false);

  useTitle('My Toys');

  

  useEffect(() => {
    const url = `https://baby-toys-server-production.up.railway.app/myToys?sellerEmail=${user?.email}&sort=${toggleSort?1:-1}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [toggleSort]);

//   Delete

  const handleDelete = id => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://baby-toys-server-production.up.railway.app/myToys/${id}`,
        {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
      }

                const remaining = myToys.filter(myToy => myToy._id !== id);
                setMyToys(remaining)
            
        })
         }
   

    



  return (
    <div className="container mx-auto">
      
      <div className="overflow-x-auto w-full">
        <div className=" m-10 flex justify-center items-center">
          <button onClick={() =>setToggleSort(!toggleSort)} className="btn btn-secondary">Sort by Price {toggleSort?'DEC' : 'ASC'}</button>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysRow key={myToy._id} 
              myToy={myToy}
              handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
