const Form = (props) => {
    return <div className="bg-transparent border-slate-100 rounded-xl border-[1px] w-[40%] p-7 h-[50%]">
        <h1 className="mt-2 text-blue-500 font-bold text-2xl">{props.title}</h1>
        <p className="mt-1 font-medium text-xl">Welcome to {props.title} Page</p>
        {props.children}
    </div>
}

export default Form