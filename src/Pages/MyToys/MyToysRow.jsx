
const MyToysRow = ({myToy}) => {

    const {toysName, toysPhoto, price, qty, description} = myToy;
   
  return (
    <tr>
    <td>
        <div className="mask mask-squircle w-12 h-12 border border-gray-700 ">
            {toysPhoto && <img src={toysPhoto} alt="" />}
    
        </div>
     </td>   
    <td>{toysName}</td>
    <td>{price}</td>
    <td>{qty}</td>
    <td>{description}</td>
    

    <th>
    {/* <Link to ={`/toy/${toy._id}`}>
      <button className="btn btn-success">
        details
        </button>
      </Link> */}
    </th>
  </tr>
  );
};

export default MyToysRow;
