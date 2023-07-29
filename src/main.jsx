import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/HomePage/Main';
import Home from './Pages/HomePage/Home/Home';
import ServiceDetails from './Pages/HomePage/Home/Services/ServiceDetails';
import BookingOrder from './Pages/HomePage/Home/Services/BookingOrder';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'serviceDetail/:id',
        element:<ServiceDetails></ServiceDetails>,
        loader:({params})=>fetch(`${import.meta.env.VITE_SERVER}singleService/${params.id}`)

      },
      {
        path:"bookingOrder/:id",
        element:<BookingOrder></BookingOrder>,
        loader:({params})=>fetch(`${import.meta.env.VITE_SERVER}singleService/${params.id}`)

      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="">

    <RouterProvider router={router} />

  </div>
)
