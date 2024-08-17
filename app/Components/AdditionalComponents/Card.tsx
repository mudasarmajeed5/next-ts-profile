type CardProps = {
    title: string,
    description: string,
    ImageLink: string,

}
const Card: React.FC<CardProps> = ({ title, description, ImageLink }) => {
    return (
        <div className='w-full max-h-fit p-4 border-t-[--sky] bg-gradient-to-tl to-[--red] filter backdrop:blur-sm bg-transparent border-2 from-transparent py-2 border-transparent'>
            <div className="flex gap-2 justify-center items-center">
                <img className="hover:scale-105 transition-transform duration-300" src={ImageLink} width={100} height={100} alt="" />
                <div className="flex items-start flex-col gap-2">
                    <li className="list-none">{title}</li>
                    <li className="list-none text-[0.65rem]">{description}</li>
                    <button className="text-[0.75rem] rounded-md hover:bg-[--sky] hover:text-black border px-2 py-1 transition-colors duration-300 border-[--sky]">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Card