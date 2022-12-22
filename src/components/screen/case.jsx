const colordict = {0:'bg-emerald-500', 1 : 'bg-green-400', 3 : 'bg-yellow-300', 4 : 'bg-amber-500', 2 : 'bg-lime-200', 5 : 'bg-red-500', 6 : 'bg-rose-400', 7 : 'bg-cyan-300', 8 : 'bg-sky-500', 10 : 'bg-purple-500', 9 : 'bg-indigo-300', 11 : 'bg-amber-800', 12 : 'bg-black', 13 : 'bg-slate-400', 14 : 'bg-slate-200', 15 : 'bg-white'};
const borderdict = {0:'border-emerald-500', 1 : 'border-green-400', 3 : 'border-yellow-300', 4 : 'border-amber-500', 2 : 'border-lime-200', 5 : 'border-red-500', 6 : 'border-rose-400', 7 : 'border-cyan-300', 8 : 'border-sky-500', 10 : 'border-purple-500', 9 : 'border-indigo-300', 11 : 'border-amber-800', 12 : 'border-black', 13 : 'border-slate-400', 14 : 'border-slate-200', 15 : 'border-white', 16 : ''};

const gridHeight = 100
const gridWidth = 100

export default function Case({n,cursor,grid}) {

   
    let x = n % gridWidth;
    let y= ~~(n / gridWidth);
    let border = 16;

    cursor.forEach(element => {
        if (element.x==x && element.y==gridHeight-1-y && element.id != -1)
        {
            console.log('CURSOR FOUND AT (x,y,id)',x,y,element.id);
            border = borderdict[element.id]
        }
        
    });

    return(
    

        <>
        <div className={`${colordict[grid[gridHeight-1-y][x]]} w-4 h-4 ${border} ${border != '' ? 'border-2' : '' } text-xs text-white`}></div>
        </>
        
        )

};