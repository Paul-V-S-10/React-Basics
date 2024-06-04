import { createBrowserRouter } from "react-router-dom";
import HomePage from "./User/Pages/HomePage/HomePage";
import About from "./User/Pages/About/About";
import MainUser from "./User/MainUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainUser />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/About",
        element: <About />
      }
    ]
  },
  {
    
  }

]);