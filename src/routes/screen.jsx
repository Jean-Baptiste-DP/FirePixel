import { ExclamationTriangleIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'
import Case from "../components/screen/case"
import Cases from "../components/screen/cases"
import { useState,useEffect } from 'react';
import Canvas from "../components/screen/Canvas"

const colordict = {0:'bg-emerald-500', 1 : 'bg-green-400', 3 : 'bg-yellow-300', 4 : 'bg-amber-500', 2 : 'bg-lime-200', 5 : 'bg-red-500', 6 : 'bg-rose-400', 7 : 'bg-cyan-300', 8 : 'bg-sky-500', 10 : 'bg-purple-500', 9 : 'bg-indigo-300', 11 : 'bg-amber-800', 12 : 'bg-black', 13 : 'bg-slate-400', 14 : 'bg-slate-200', 15 : 'bg-white'};
const namedict = {0:'Emerald', 1 : 'Green', 3 : 'Yellow', 4 : 'Amber', 2 : 'Lime', 5 : 'Red', 6 : 'Rose', 7 : 'Cyan', 8 : 'Sky', 10 : 'Purple', 9 : 'Indigo', 11 : 'bg-amber-800', 12 : 'bg-black', 13 : 'bg-slate-400', 14 : 'bg-slate-200', 15 : 'bg-white'};

export default function Screen({grid,cursor,sendJsonMessage}) {

    const [localCursor,changecursor]=useState(cursor)
    useEffect(()=>{console.log("New cursor received : ",cursor);changecursor(cursor)},[cursor])
    useEffect(()=>{console.log("New grid received : ",grid)},[grid])

   let cases=[]
    for(let i=0;i<10000;i++){
        cases.push(<Case n={i} cursor={localCursor} grid={grid} key={i}/>)
    }


  return (
    <>
      <div className="block sm:hidden rounded-md bg-yellow-100 p-4 m-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Cette page n'est pas censée être consultée depuis un écran aussi petit !
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="w-full min-h-screen flex">
          <div className="w-1/5 bg-primary flex flex-col items-center justify-center">
            coucou
          </div>
          <div className="w-4/5 bg-secondary">
            <Canvas height={1000} width={1000}/>
          </div>
        </div>
      </div>
    </>
  );
}