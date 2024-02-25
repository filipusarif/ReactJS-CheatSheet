import { RouterProvider, createBrowserRouter} from "react-router-dom"   //Main Route
import { useRouteError } from "react-router-dom"                        //Error Route
import {Link} from "react-router-dom"                                   //Link without Load
import ErrorPage from './components/Pages/errorPage.jsx'
import LoginPage from './components/Pages/loginPage.jsx'
import RegisterPage from './components/Pages/registerPage.jsx'


// Main Routing
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
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

// Error Route
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <section> 
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>{ error.statusText || error.message }</p>
            {/* direct without load */}
            <Link to="/login">login</Link> 
        </section>
    )
}
