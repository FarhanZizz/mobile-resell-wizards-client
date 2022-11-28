import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Main from './Layout/Main';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Blog from './Pages/Blog';
import Products from './Pages/Products';
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './Pages/Dashboard';
import MyProducts from './Pages/MyProducts';
import MyBuyers from './Pages/MyBuyers';
import AllBuyers from './Pages/AllBuyers';
import ReportedItems from './Pages/ReportedItems';
import DashboardDefault from './Pages/DashboardDefault';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/category/:id',
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/category/${params.id}`)
          },
          element: <PrivateRoute><Products></Products></PrivateRoute>,
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
              path: '/dashboard',
              element: <DashboardDefault></DashboardDefault>
            },
            {
              path: '/dashboard/myproducts',
              element: <MyProducts></MyProducts>
            },
            {
              path: '/dashboard/mybuyers',
              element: <MyBuyers></MyBuyers>
            },
            {
              path: '/dashboard/buyers',
              element: <AllBuyers></AllBuyers>
            },
            {
              path: '/dashboard/reporteditems',
              element: <ReportedItems></ReportedItems>
            },
          ]
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
