import FormMolecules from '../../Molecules/Form'
import ButtonForm from '../../Atoms/FormButton'

const index = (props) => {
    return <form action="" className="mt-2 flex flex-col gap-3 justify-center">
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
        <ButtonForm>Send</ButtonForm>
    </form>
}

export default index