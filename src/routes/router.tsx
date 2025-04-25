import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout"
import Home from "@/pages/HomePage/Home";
import Register from "@/pages/Register/Register";
import Login from "@/pages/Login/Login";
import AboutUs from "@/pages/About/About";
import ProtectedRoute from "@/layout/ProtectedLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard/AdminDashboard";
import CreateProduct from "@/pages/Dashboard/AdminDashboard/CreateProduct";
import ViewProduct from "@/pages/Dashboard/AdminDashboard/ViewProduct";
import UpdateProduct from "@/pages/Dashboard/AdminDashboard/UpdateProduct";
import ViewOrders from "@/pages/Dashboard/AdminDashboard/ViewOrders";
import UserDashboard from "@/pages/Dashboard/UserDashboard/UserDashboard";
import ViewOrder from "@/pages/Dashboard/UserDashboard/ViewOrder";

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
    },
    {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "create-product",
            element: <CreateProduct />,
          },
          {
            path: "products",
            element: <ViewProduct />,
          },
          {
            path: "products/update/:productId",
            element: <UpdateProduct />,
          },
          {
            path: "orders",
            element: <ViewOrders />,
          },
        ],
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
          },
          {
            path: "orders",
            element: <ViewOrder />,
          },
        ],
      },
])