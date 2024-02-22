import LabelForm from '../../Atoms/FormInput/label'
import InputForm from '../../Atoms/FormInput/input'

const index = (props) => {
    return<div className="flex flex-col gap-2">
        <LabelForm id={props.id}>{props.children}</LabelForm>
        <InputForm id={props.id} name={props.name} type={props.type}/>
    </div>
}
export default index