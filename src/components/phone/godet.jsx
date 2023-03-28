// const colordict = {
//     0: "bg-emerald-500",
//     1: "bg-green-400",
//     3: "bg-yellow-300",
//     4: "bg-amber-500",
//     2: "bg-lime-200",
//     5: "bg-red-500",
//     6: "bg-rose-400",
//     7: "bg-cyan-300",
//     8: "bg-sky-500",
//     9: "bg-indigo-300",
//     10: "bg-purple-500",
//     11: "bg-amber-800",
//     12: "bg-black",
//     13: "bg-slate-400",
//     14: "bg-slate-200",
//     15: "bg-white",
// };

import React from "react";
import { ColorsContext } from "../../colorsContext";


const highlight = 'border-4 border-slate-100 shadow-lg shadow-gray-800'

export default function Godet({ onClick, color, selected }) {
    
    const colors = React.useContext(ColorsContext);
    return (
        <button className={`${colors[color].tailwind} w-10 aspect-square rounded-lg transition duration-100  ${selected ? highlight : ''}`} onClick={onClick} />
    );
}
