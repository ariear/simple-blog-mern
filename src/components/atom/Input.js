const Input = (props) => {
    return (
        <div className="mb-4">
            <p className="font-medium text-lg mb-2">{props.name}</p>
            <input type={props.type} placeholder={props.name} value={props.value} onChange={(e) => props.setValue(e.target.value)} className="border w-full border-gray-400 py-2 px-4 rounded-lg" />
        </div>
    )
}

export default Input