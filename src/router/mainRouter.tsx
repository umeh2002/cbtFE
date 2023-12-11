import { createBrowserRouter } from "react-router-dom";
import Layout from "../block/Layout";
import Register from "../component/Register";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path:"/register",
    element:<Register/>
  }
]);
