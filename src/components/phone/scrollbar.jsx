import React from 'react'
import Godet from './godet';

const Scrollbar = () => {

    const rows = [];
    for (let i = 0; i < 16; i++) {
        rows.push(<Godet color={i} onClick={() => setPixel(i)} key={i}/>);
    }

  return (
    <div className="w-full flex flex-col">
        <div className="flex color-palette overflow-x-auto bg-[#686060]  rounded-lg mb-1">
            <div className="flex flex-nowrap gap-2 p-3">
                     {rows}  
            </div>
        </div>
    </div>
  )
}

export default Scrollbar