import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <section> 
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>{ error.statusText || error.message }</p>
        </section>
    )
}

export default ErrorPage