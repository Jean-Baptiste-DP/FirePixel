
/* TESTS AVEC LES CASES DANS UN UNIQUE COMPONENT*/

import React from 'react'

function cases(cursor,grid) {
    let Cases=[]



    for(let i=0;i<10000;i++){
           
        let x = i % 100;
        let y= ~~(i / 100);
        console.log(x,y)
        Cases.push(<div className={`${grid[x][y]} w-6 h-6 border-white border-2 text-white`} key={i}></div>)
    }
    

  return (
    <>
    {Cases}
    </>
  )
}

export default cases