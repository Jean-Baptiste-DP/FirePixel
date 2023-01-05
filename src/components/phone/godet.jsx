const colordict = {0:'bg-emerald-500', 1 : 'bg-green-400', 3 : 'bg-yellow-300', 4 : 'bg-amber-500', 2 : 'bg-lime-200', 5 : 'bg-red-500', 6 : 'bg-rose-400', 7 : 'bg-cyan-300', 8 : 'bg-sky-500', 10 : 'bg-purple-500', 9 : 'bg-indigo-300', 11 : 'bg-amber-800', 12 : 'bg-black', 13 : 'bg-slate-400', 14 : 'bg-slate-200', 15 : 'bg-white'};
const checkdict = {true : 'bg-green-300',false : 'bg-red-300'};
export default function Godet({onClick,color,pixelArt}) {

    if ( pixelArt == true || pixelArt == false) {
        return (

            <>
            <button className={`${checkdict[pixelArt]} w-8 h-8 rounded-lg text-white font-bold text-2xl text-center active:bg-emerald-700`} onClick={onClick}>{pixelArt ? '✔️' : '❌'}</button>
            </>

        )
    }
        return(
        
            <>
            <button className={`${colordict[color]} w-8 h-8 rounded-lg text-white font-bold text-2xl text-center active:bg-emerald-700`} onClick={onClick}/>
            </>
            
            )

};