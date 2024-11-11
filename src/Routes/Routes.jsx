import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import GadgetCards from "../Components/GadgetCards";
import Details from "../Pages/Details";
import OnlineSupport from "../Pages/OnlineSupport";
import NotFoundPage from "../Pages/NotFoundPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <div className="font-sora"><MainLayout></MainLayout></div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../gadgets.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <GadgetCards></GadgetCards>,
                        loader: () => fetch('../gadgets.json'),
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/dashboard/cart',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/dashboard/wishlist',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/support',
                element: <OnlineSupport></OnlineSupport>,
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('../gadgets.json'),
            },
            { 
                path: '*', 
                element: <NotFoundPage></NotFoundPage> }
        ]
    }
])

export default routes