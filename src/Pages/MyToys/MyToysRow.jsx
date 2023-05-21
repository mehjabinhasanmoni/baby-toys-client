import { Link } from "react-router-dom";

const MyToysRow = ({ myToy, handleDelete }) => {
  const { _id, toysName, toysPhoto, price, qty, description } = myToy;

  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-error btn-sm"
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
      </td>
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
            <Link to={`/updatetoy/${_id}`}>
            <button
                
                className="btn btn-success"
            >
                Update
            </button>
          </Link>
          
        </th>
      
    </tr>
  );
};

export default MyToysRow;
