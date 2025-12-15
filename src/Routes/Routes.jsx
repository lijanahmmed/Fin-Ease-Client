import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddTransaction from "../Pages/AddTransaction";
import MyTransactions from "../Pages/MyTransactions";
import Reports from "../Pages/Reports";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Private/PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import Errorpage from "../Pages/Errorpage";
import UpdateTransaction from "../Pages/UpdateTransaction";
import Loading from "../Components/Loading";
import TransactionDetails from "../Pages/TransactionDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/add-transaction",
        element: (
          <PrivateRoute>
            <AddTransaction></AddTransaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-transactions",
        element: (
          <PrivateRoute>
            <MyTransactions></MyTransactions>
          </PrivateRoute>
        ),
      },
      {
        path: "/transactions-details/:id",
        element: (
          <PrivateRoute>
            <TransactionDetails></TransactionDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/reports",
        element: (
          <PrivateRoute>
            <Reports></Reports>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-transaction/:id",
        element: (
          <PrivateRoute>
            <UpdateTransaction></UpdateTransaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "*",
        Component: Errorpage,
      },
    ],
  },
]);

export default router;
