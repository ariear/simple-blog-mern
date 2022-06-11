export const BtnGray = (props) => {
    return (
        <button className="py-2 px-10 w-full text-white rounded-lg bg-gray-400 font-semibold" type={props.type}>{props.name}</button>
    )
}

export default BtnGray