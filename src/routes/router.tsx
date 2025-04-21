import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout"
import Home from "@/pages/HomePage/Home";
import Register from "@/pages/Register/Register";
import Login from "@/pages/Login/Login";
import AboutUs from "@/pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <AboutUs/>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    }
])