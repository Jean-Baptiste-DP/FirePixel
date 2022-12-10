const colordict = {on:'bg-emerald-800',off:'bg-dark',undefined:'bg-dark'};

export default function Case({state}) {

    return(
    
        <>
        <div className={`${colordict[state]} w-8 h-8 border-white border-2`}></div>
        </>
        
        )

};