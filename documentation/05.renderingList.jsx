import CardProduct from "../Organisms/Product/CardProduct";
import TemplateProduct from "../Template/Product";


const products = [
    {
        id:1,
        image:"/asset/image.png",
        name:"Car 1",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa, possimus! Provident, autem asperiores eos tempora
        excepturi nam soluta animi recusandae.`,
        price:"Rp 100.000",
    },
    {
        id:1,
        image:"/asset/image.png",
        name:"Car 1",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa, possimus! Provident, autem asperiores eos tempora
        excepturi nam soluta animi recusandae.`,
        price:"Rp 100.000",
    },
];

const Product = () => {
    return (
        <section className="w-screen min-h-screen">
            <TemplateProduct>
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name} >
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </TemplateProduct>
        </section>
    )
}

export default Product;