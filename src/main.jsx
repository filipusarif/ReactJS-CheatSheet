import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import ErrorPage from './components/Pages/errorPage.jsx'
import LoginPage from './components/Pages/loginPage.jsx'
import RegisterPage from './components/Pages/registerPage.jsx'
import Product from './components/Pages/products.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<div>hello</div>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/login",
    element: <LoginPage />,
  },
  {
    path:"/register",
    element: <RegisterPage />,
  },
  {
    path:"/products",
    element: <Product />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
