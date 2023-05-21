import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToys from "../Pages/SingleToys/SingleToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/MyToys/UpdateToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";



const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element : <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path : '/alltoys',
                element : <AllToys></AllToys>,
                loader : () => fetch('https://baby-toys-server-production.up.railway.app/allToys')
            },
            {
                path : '/toy/:id',
                element : <PrivateRoute><SingleToys></SingleToys></PrivateRoute>,
                loader : ({params}) => fetch(`https://baby-toys-server-production.up.railway.app/toy/${params.id}`)
                
            },
            {
                path : '/mytoys',
                element : <PrivateRoute><MyToys></MyToys></PrivateRoute>
                
            },
            {
                path : '/updatetoy/:id',
                element : <UpdateToys></UpdateToys>,
                loader : ({params}) => fetch(`https://baby-toys-server-production.up.railway.app/myToys/${params.id}`)
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
]);


export default router;