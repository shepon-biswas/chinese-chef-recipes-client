import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Recipes from "../pages/Recipes/Recipes";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                
            },
            {
                path:'contact',
                element: <Contact></Contact>
            },
            {
                path:'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'recipes/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader:({params}) => fetch(`https://chinese-chef-recipe-server.vercel.app/recipes/${params.id}`)

            }
            
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
])


export default router;