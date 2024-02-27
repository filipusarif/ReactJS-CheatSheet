import Form from "../Template/Form";
import FormRegister from '../Organisms/Form/register'

const index = () => {
    return (
    <section className=" h-screen w-screen flex items-center justify-center gap-2">
        <Form title="Register"
        question="Have an Account?" 
        to="Login" 
        url="/Login"
        type="register" >
            <FormRegister></FormRegister>
        </Form>
    </section>)
}

export default index