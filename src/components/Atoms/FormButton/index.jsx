const Button = (props) => {
    return <button className="w-fit h-fit py-3 px-7 rounded-lg bg-blue-500">
        {props.children}
    </button>;
};

export default Button