
const CardProduct = (props) =>{
    return (
        <div className="w-[20%] h-[470px] bg-blue-900 rounded-2xl p-5 flex flex-col gap-2 justify-between " >    
            {props.children}
        </div>
    )
}

const Header = (props) =>{
    const {image} = props;
    return(
        <div><img src={image} alt="" /></div>
    )
}

const Body = (props) => {
    const {children, name} = props;
    return (
        <div className="flex flex-col h-full">
            <h1 className=" font-bold text-lg">{name}</h1>
            <p>{children}</p>
        </div>
    )
}

const Footer = (props) => {
    const { price } = props;
    return (
        <div className="text-right flex justify-between items-center">
            <p>{price}</p>
            <button className="bg-blue-950 p-2">add to cart</button>
        </div>
    )
}


CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct