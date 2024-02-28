import FormMolecules from '../../Molecules/Form'
import ButtonForm from '../../Atoms/FormButton'

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