export default function Button({onClick,text}) {
    return(
    <>
    <button className='bg-dark w-20 h-10 rounded-lg text-white font-bold text-2xl text-center' onClick={onClick}>{text}</button>
    </>
    )
};