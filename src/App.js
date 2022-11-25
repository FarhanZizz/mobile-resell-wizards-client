import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Blog from './Pages/Blog';
import Products from './Pages/Products';

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
          element: <Products></Products>,
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
    </div>
  );
}

export default App;
