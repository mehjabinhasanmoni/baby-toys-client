import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";



const SingleToys = () => {
    
    useTitle('Single Toy');
    const singleToyInfo = useLoaderData();
    const {  toysName, toysPhoto, sellerName, sellerEmail,
        qty, price, ratings, description } = singleToyInfo;

    return (
        <div className="bg-[url('https://i.ibb.co/Gpjfnnr/servicebg.png')] bg-fixed bg-cover bg-no-repeat bg-center">
            
           <div className="container mx-auto flex justify-center items-center gap-5 m-5 p-10">
                <div className="basis-1/4 toy-image">
                    <img src={toysPhoto} alt="" />
                </div>
                <div className=" basis-1/2 product-info text-left  w-64  p-5 ">
                    <h5 className="text-[#ff1276] text-5xl tracking-[.25em] mb-3 font-bold">{toysName}</h5>
                    <h5 className="text-xl mb-2"><span className="font-bold text-lg">Seller Name :</span> {sellerName? sellerName : 'N/A'}</h5>
                    <h5 className="text-xl mb-2"><span className="font-bold text-lg">Seller Email :</span> {sellerEmail}</h5>
                    <h5 className="text-xl mb-2"><span className="font-bold text-lg">Price :</span> {price} </h5>
                    <h5 className="text-xl mb-2"> <span className="font-bold text-lg">Ratings :</span> {ratings}</h5>
                    <h5 className="text-xl mb-2"><span className="font-bold text-lg">Available Quantity : </span>{qty} </h5>
                    <h5 className="text-xl mb-2"><span className="font-bold text-lg">Description :</span> {description}</h5>


                </div>
           </div>
        </div>
    );
};

export default SingleToys;