import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5001/myToys?sellerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

//   Delete

  const handleDelete = id => {
    const proceed = confirm('Are you sure you want to delete');
    if(proceed) {
        fetch(`http://localhost:5001/myToys/${id}`,
        {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted success');
                const remaining = myToys.filter(myToy => myToy._id !== id);
                setMyToys(remaining)
            }
        })
         }
    };

    // Update

    const handleConfirm = id => {
        const proceed = confirm('Are you sure you want to delete');
        if(proceed) {
            fetch(`http://localhost:5001/myToys/${id}`,
            {
                method : 'PATCH',
                headers : {
                    'content-type':'application/json'
                },
                body:JSON.stringify({status: 'confirm'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    alert('update success');
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    const updated = myToys.find(myToy => myToy._id === id);
                    updated.status = 'updated';
                    const newMyToys = [updated, ...remaining];
                    setMyToys(newMyToys);

                }

            })
             }

    }

  return (
    <div>
      <h2>My Toys</h2>
      <div className="overflow-x-auto w-full">
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
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysRow key={myToy._id} 
              myToy={myToy}
              handleDelete={handleDelete}
              handleConfirm={handleConfirm}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
