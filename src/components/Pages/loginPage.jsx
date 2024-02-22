import Form from "../Template/Form";
import FormOrganism from '../Organisms/Form/login'
const index = () => {
    return (
    <section className=" h-screen w-screen flex items-center justify-center gap-2">
        <Form title="Login">
            <FormOrganism></FormOrganism>
        </Form>
    </section>)
}

export default index