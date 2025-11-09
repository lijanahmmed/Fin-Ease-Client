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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
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
        Component: MyProfile,
      },
      {
        path: "*",
        Component: Errorpage,
      },
    ],
  },
]);

export default router;
