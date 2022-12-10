const colordict = {on:'bg-slate-300',off:'bg-dark',undefined:'bg-dark'};

export default function Button({onClick,text,state}) {

        return(
        
            <>
            <button className={`${colordict[state]} px-5 py-2 rounded-lg text-white font-bold text-xl text-center`} onClick={onClick}>{text}</button>
            </>
            
            )

};