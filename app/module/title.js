export default function Title(props) {
    return (
        <div className="w-full flex justify-center items-center fixed mt-12 z-50">
            <p className="sm:text-[6rem] text-[2.5rem] sm:mt-0 mt-4" style={{fontFamily:'gmarket'}}>{props.title}</p>
            <p className="sm:text-[2rem] text-[0.5rem] sm:-mt-[4vh]" style={{fontFamily:'gmarket'}}>{props.eng}</p>
        </div>
    )
}