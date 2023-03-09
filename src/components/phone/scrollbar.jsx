import React from 'react'
import Godet from './godet';

const Scrollbar = ({pixel,click}) => {

    const rows = [];
    for (let i = 0; i < 16; i++) {
        rows.push(<Godet color={i} onClick={() => click(i)} selected={pixel==i} key={i}/>);
    }

  return (
    <>
        <div className="absolute pointer-events-none bg-gradient-to-l from-transparent to-gray-800 h-16 w-7 rounded-l-2xl "/>
        <div id='scroll' className="flex color-palette overflow-x-scroll rounded-lg px-1">
            <div className="flex flex-nowrap gap-1 px-3 py-3">
                {rows}  
            </div>
        </div>
        <div className="absolute right-0 pointer-events-none bg-gradient-to-r from-transparent to-gray-800 h-16 w-7 rounded-r-2xl "/>
    </>
  )
}

export default Scrollbar