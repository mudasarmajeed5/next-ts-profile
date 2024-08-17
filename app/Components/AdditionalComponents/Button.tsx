type ButtonProps = {
    text: string,
    ButtonStyle?: string
}
const Button: React.FC<ButtonProps> = ({ text, ButtonStyle }) => {
    return (
        <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${ButtonStyle}`}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {text}
            </span>
        </button>
    )
}

export default Button