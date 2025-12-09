import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";


const router = createBrowserRouter([
  {
    path:"/",
    element:<><Home/></>
  },
  {
    path:"/login",
    element:<><Login/></>
  },
  {
    path:"/signup",
    element:<><Signup/></>
  },
  {
    path: "*",
    element:<PageNotFound/>
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
