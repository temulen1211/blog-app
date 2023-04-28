import {
  createBrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom";

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Write from "./pages/Write"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/post/:id",
        element:<Single/>,
      },
      {
        path:"/Write",
        element:<Write/>,
      }
    ]
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={Router}/>
      </div>
    </div>
  );
}

export default App;
