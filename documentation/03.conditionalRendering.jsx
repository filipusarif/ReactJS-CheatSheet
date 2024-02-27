import {Link} from "react-router-dom"

const Form = (props) => {
    return <div className="bg-transparent border-slate-100 rounded-xl border-[1px] w-[40%] p-7 h-[50%]">
        <h1 className="mt-2 text-blue-500 font-bold text-2xl">{props.title}</h1>
        <p className="mt-1 font-medium text-xl">Welcome to {props.title} Page</p>
        {props.children}
        {/* <p>{props.question}<Link to={props.url}>{props.to}</Link></p>  */}
        {props.type === "login" ? "Don't Have an account?":"Have an account?"}
        {props.type == 'login' && (
            <Link to="/Register" >Register</Link>
        )}
        <Navigation to={props.type} />
    </div>
}

const Navigation = (props) => {
    if(props.to === 'login'){
        return (
            <Link to="/Register" >Register</Link>
        )
    }else if (props.to == 'register') {
        return (
            <Link to="/Login" >Login</Link>
        )
    }
}

export default Form