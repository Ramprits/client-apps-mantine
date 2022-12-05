import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <span>Hello world!</span>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
