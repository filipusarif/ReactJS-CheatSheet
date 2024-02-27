// Arrow function Component
const Button = (props) => {
    // Set Default Value, destruction properties
    const {children="...", color} = props;
    return <>
        <button className={`px-7 py-3 rounded-md ${color} text-slate-200`}>
            {children}
        </button>
    </>;
};

// Normal Function Component
function Button2(){
    return <>
        <button className={`px-7 py-3 rounded-md ${color} text-slate-200`}>
            {children}
        </button>
    </>
}
    
// Main Function
export default function index(){
    return (
    <section className="bg-blue-500 h-screen w-screen flex items-center justify-center gap-2">
        <Button color="bg-red-500">login</Button>
        <Button color="bg-green-500">Signin</Button>
        <Button color="bg-purple-500"></Button>
    </section>)
}