const colordict = {on:'bg-emerald-800',off:'bg-dark',undefined:'bg-dark'};

export default function Case({case_number,enlightCase}) {

    if(case_number==enlightCase){
        return(
    
            <>
            <div className={`$bg-emerald-800 w-8 h-8 border-white border-2`}></div>
            </>
            
            )
    }
    return(
    
        <>
        <div className={`bg-dark w-8 h-8 border-white border-2`}></div>
        </>
        
        )

};