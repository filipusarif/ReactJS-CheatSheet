const Button = (props) => {
    const { type='button', onClick=()=>{} } = props;
    return <button 
    className="w-fit h-fit py-3 px-7 rounded-lg bg-blue-500"
    type={type}
    onClick={onClick}
    >
        {props.children}
    </button>;
};

export default Button