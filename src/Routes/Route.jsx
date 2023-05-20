import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToys from "../Pages/SingleToys/SingleToys";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/addtoy',
                element : <AddToy></AddToy>
            },
            {
                path : '/alltoys',
                element : <AllToys></AllToys>,
                loader : () => fetch('http://localhost:5001/allToys')
            },
            {
                path : '/toy/:id',
                element : <PrivateRoute><SingleToys></SingleToys></PrivateRoute>
                
            },
        ]
    }
]);


export default router;