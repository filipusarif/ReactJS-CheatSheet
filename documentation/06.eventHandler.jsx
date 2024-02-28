import FormMolecules from '../../Molecules/Form'
import ButtonForm from '../../Atoms/FormButton'

import CardProduct from "../Organisms/Product/CardProduct";
import TemplateProduct from "../Template/Product";
import Button from "../Atoms/FormButton";


// Set Items
const index = (props) => {
    const loginHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('username',event.target.username.value);
        localStorage.setItem('email',event.target.email.value);
        localStorage.setItem('password',event.target.password.value);
        window.location = '/products'
    }

    return <form
        className="mt-2 flex flex-col gap-3 justify-center"
        onSubmit={loginHandler}>
        <FormMolecules 
        id="usernameId" 
        name="username"
        type="text">
            Username
        </FormMolecules>
        <FormMolecules 
        id="emailId" 
        name="email"
        type="email">
            Email
        </FormMolecules>
        <FormMolecules 
        id="passwordId" 
        name="password"
        type="password">
            Password
        </FormMolecules>
        <ButtonForm type="submit">Send</ButtonForm>
    </form>
}

export default index


// Get Items
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
        id:2,
        image:"/asset/image.png",
        name:"Car 1",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsa, possimus! Provident, autem asperiores eos tempora
        excepturi nam soluta animi recusandae.`,
        price:"Rp 100.000",
    },
];

const email = localStorage.getItem('email')

const Product = () => {

    const logoutHandle = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }

    return (
        <>
            <div className="w-full h-[50px] bg-blue-600 flex items-center justify-end gap-10 px-10">{email}<Button onClick={logoutHandle}>logout</Button></div>
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
        </>
    )
}

// export default Product;