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
import SingUP from './Pages/SingUp/SingUP';
import LogInPage from './Pages/LogInPage/LogInPage';
import AuthProvider from './FireBase/AuthProvider';
import PrivateRoute from './FireBase/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';
import AllUser from './Dashboard/Admin/AllUser';
import AddItem from './Dashboard/Admin/AddItem';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ManageItem from './Dashboard/Admin/ManageItem';
import MyBooking from './Dashboard/User/MyBooking';
import Services from './Pages/Service/Services';
import PrivetAdminRoute from './Dashboard/Admin/PrivetAdminRoute';
const queryClient = new QueryClient()

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
        path: 'serviceDetail/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER}singleService/${params.id}`)

      },
      {
        path: "bookingOrder/:id",
        element: <PrivateRoute><BookingOrder></BookingOrder></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER}singleService/${params.id}`)

      },
      {
        path:'services',
        element:<Services></Services>
      }
    ]
  },
  {
    path: 'singUp',
    element: <SingUP></SingUP>
  },
  {
    path: "logIn",
    element: <LogInPage></LogInPage>
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'allUser',
        element: <PrivetAdminRoute><AllUser></AllUser></PrivetAdminRoute>
      },
      {
        path: "addItem",
        element: <PrivetAdminRoute><AddItem></AddItem></PrivetAdminRoute>
      },
      {
        path: "manageService",
        element: <PrivetAdminRoute><ManageItem></ManageItem></PrivetAdminRoute>
      },
      {
        path:'myBooking',
        element:<MyBooking></MyBooking>
      },
      {
        path:'services',
        element:<Services></Services>
      }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="">
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </div>
)
