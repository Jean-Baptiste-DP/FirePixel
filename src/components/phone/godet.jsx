const colordict = {1 : 'bg-primary', 2 : 'bg-red-400', 3 : 'bg-white', 4 : '4', 5 : '5', 6 : '6', 7 : '7', 8 : '8', 9 : '9', 10 : '10', 11 : '11', 12 : '12', 13 : '13', 14 : '14', 15 : '15'};

export default function Godet({onClick,color,state}) {

        return(
        
            <>
            <button className={`${colordict[color]} w-8 h-8 rounded-lg text-white font-bold text-2xl text-center`} onClick={onClick}/>
            </>
            
            )

};