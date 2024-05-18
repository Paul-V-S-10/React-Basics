import { createBrowserRouter } from "react-router-dom";
import HomePage from "./User/Pages/HomePage";
import About from "./User/Pages/About";
import MainUser from "./User/MainUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainUser />,
    children: [
      {
        path: "/Home",
        element: <HomePage />
      },
      {
        path: "/About",
        element: <About />
      }
    ]
  },

]);