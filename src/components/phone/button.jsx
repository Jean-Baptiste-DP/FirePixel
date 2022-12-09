const colordict = {on:'bg-emerald-800',off:'bg-dark',undefined:'bg-dark'};

export default function Button({onClick,text,state}) {

        return(
        
            <>
            <button className={`${colordict[state]} w-20 h-10 rounded-lg text-white font-bold text-2xl text-center`} onClick={onClick}>{text}</button>
            </>
            
            )

};