import "./App.css";
import { useEffect } from "react";
import {
  Home,
  Login,
  Register,
  Error,
  Products,
  SingleProduct,
  Cart,
  UserProfile,
  Checkout,
  Success,
  Orders,
  
} from "./Pages";
import {
  AdminCreateProduct,
  AdminPanel,
  AdminProductGrid,
  AdminProductList,
  AdminProducts,
  AdminOrders,
  SendSingleEmail,
  AdminSendEmailForAllUsers,
} from "./Pages/Admin";
import { AdminLayouts } from "./components/Admin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, ProtectedRoutes } from "./components";
import { useUserContext } from "./context/user_context";
import { useCartContext } from "./context/cart_context";
import { useOrderContext } from "./context/order_context";
import AdminAllUsers from "./Pages/Admin/AdminAllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <UserProfile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/checkout/success",
        element: <Success />,
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoutes>
            <Orders />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <AdminLayouts />,
    children: [
      {
        path: "/admin-panel",
        element: <AdminPanel />,
      },
      {
        path: "admin-panel/products",
        element: <AdminProducts />,
      },
      {
        path: "admin-panel/create-product",
        element: <AdminCreateProduct />,
      },
      {
        path: "admin-panel/products-list",
        element: <AdminProductList />,
      },
      {
        path: "admin-panel/products-grid",
        element: <AdminProductGrid />,
      },
      {
        path: "admin-panel/orders",
        element: <AdminOrders />,
      },
      {
        path: "admin-panel/users",
        element: <AdminAllUsers />,
      },
      {
        path: "admin-panel/send-single-email",
        element: <SendSingleEmail />,
      },
      {
        path: "admin-panel/send-all-users",
        element: <AdminSendEmailForAllUsers />,
      },
    ],
  },
]);

const App = () => {
  const { showCurrentUser, user, fetchAllUsers } = useUserContext();
  const { showMyCart, loadAllCountries } = useCartContext();
  const { fetchUserOrders, ftechAllOrders } = useOrderContext();

  useEffect(() => {
    showCurrentUser();
    showMyCart();
    loadAllCountries();
    fetchUserOrders();
    ftechAllOrders();
    fetchAllUsers();
    // eslint-disable-next-line
  }, [user.userId]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
