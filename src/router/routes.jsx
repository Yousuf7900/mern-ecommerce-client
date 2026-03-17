import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Collection from "../pages/Collection";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import PlaceOrder from "../pages/PlaceOrder";
import Orders from "../pages/Orders";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/collection',
                element: <Collection></Collection>
            },
            {
                path: '/product/:productId',
                element: <Product></Product>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/place-order',
                element: <PlaceOrder></PlaceOrder>
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]
    }
])
export default router;