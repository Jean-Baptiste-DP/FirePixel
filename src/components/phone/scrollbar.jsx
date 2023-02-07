import React from 'react'
import Godet from './godet';

const Scrollbar = ({pixel,click}) => {

    const rows = [];
    for (let i = 0; i < 16; i++) {
        rows.push(<Godet color={i} onClick={() => click(i)} selected={pixel==i} key={i}/>);
    }

  return (
    <div className="w-full flex flex-col">
        <div className="flex color-palette overflow-x-auto rounded-lg px-4">
            <div className="flex flex-nowrap gap-2 p-3">
                     {rows}  
            </div>
        </div>
    </div>
  )
}

export default Scrollbar