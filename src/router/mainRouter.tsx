import { createBrowserRouter } from "react-router-dom";
import Layout from "../block/Layout";
import Register from "../component/Register";
import Exam from "../pages/Exam";
import Question from "../pages/Question";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/exam-instruction",
    element:<Exam/>
  },
  {
    path:"/exam-questions",
    element:<Question/>
  },
]);
