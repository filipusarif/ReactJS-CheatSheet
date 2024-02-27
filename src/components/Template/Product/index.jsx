const TemplateProduct = (props) =>{
    return (
        <div className="flex flex-wrap min-h-screen container mx-auto gap-5 p-10  justify-center text-white">
            {props.children}
        </div>
    )
}

export default TemplateProduct;