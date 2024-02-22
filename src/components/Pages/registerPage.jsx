import Form from "../Template/Form";
import FormRegister from '../Organisms/Form/register'

const index = () => {
    return (
    <section className=" h-screen w-screen flex items-center justify-center gap-2">
        <Form title="Register">
            <FormRegister></FormRegister>
        </Form>
    </section>)
}

export default index