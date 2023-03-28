import React from "react";

//phone
// const namedict = {0:'Emerald', 1 : 'Green', 3 : 'Yellow', 4 : 'Amber', 2 : 'Lime', 5 : 'Red', 6 : 'Rose', 7 : 'Cyan', 8 : 'Sky', 10 : 'Purple', 9 : 'Indigo', 11 : 'Brown', 12 : 'Black', 13 : 'Dark Grey', 14 : 'Light Grey', 15 : 'White'};

//canvas
// const colorList = ['#10B981', '#4ADE80', '#D9F99D', '#FDE047', '#F59E0B', '#EF4444', '#FB7185', '#67E8F9', '#0EA5E9', '#A8B4FC', '#A855F7', '#92400E', '#000000', '#94A3B8', '#E2E8F0', '#FFFFFF'];

//godet
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

const colors = [
    {
        "id": 0,
        "name": "Emerald",
        "tailwind": "bg-emerald-500",
        "hexa": "#10B981"
    },
    {
        "id": 1,
        "name": "Green",
        "tailwind": "bg-green-400",
        "hexa": "#4ADE80"
    },
    {
        "id": 2,
        "name": "Lime",
        "tailwind": "bg-lime-200",
        "hexa": "#D9F99D"
    },
    {
        "id": 3,
        "name": "Yellow",
        "tailwind": "bg-yellow-300",
        "hexa": "#FDE047"
    },
    {
        "id": 4,
        "name": "Amber",
        "tailwind": "bg-amber-500",
        "hexa": "#F59E0B"
    },
    {
        "id": 5,
        "name": "Red",
        "tailwind": "bg-red-500",
        "hexa": "#EF4444"
    },
    {
        "id": 6,
        "name": "Rose",
        "tailwind": "bg-rose-400",
        "hexa": "#FB7185"
    },
    {
        "id": 7,
        "name": "Cyan",
        "tailwind": "bg-cyan-300",
        "hexa": "#67E8F9"
    },
    {
        "id": 8,
        "name": "Sky",
        "tailwind": "bg-sky-500",
        "hexa": "#0EA5E9"
    },
    {
        "id": 9,
        "name": "Indigo",
        "tailwind": "bg-indigo-300",
        "hexa": "#A8B4FC"
    },
    {
        "id": 10,
        "name": "Purple",
        "tailwind": "bg-purple-500",
        "hexa": "#A855F7"
    },
    {
        "id": 11,
        "name": "Brown",
        "tailwind": "bg-amber-800",
        "hexa": "#92400E"
    },
    {
        "id": 12,
        "name": "Black",
        "tailwind": "bg-black",
        "hexa": "#000000"
    },
    {
        "id": 13,
        "name": "Dark Grey",
        "tailwind": "bg-slate-400",
        "hexa": "#94A3B8"
    },
    {
        "id": 14,
        "name": "Light Grey",
        "tailwind": "bg-slate-200",
        "hexa": "#E2E8F0"
    },
    {
        "id": 15,
        "name": "White",
        "tailwind": "bg-white",
        "hexa": "#FFFFFF"
    }
]

export const ColorsContext = React.createContext(colors)

export const ColorsProvider = ({children}) => {
    return (
        <ColorsContext.Provider value={colors}>{children}</ColorsContext.Provider>
    )
}