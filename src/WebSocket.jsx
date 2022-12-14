import { useState } from 'react';
import {useEffect} from 'react';
import useWebSocket from 'react-use-websocket';

export default function WebSocket({Component,type}){
    const wsUrl = "ws://localhost:10406"
    const { sendJsonMessage } = useWebSocket(wsUrl,{onMessage:onReceivedSocket});

    // --- Variables ---

    //Grid

    const gridHeight = 100
    const gridWidth = 100
    const nbPlayerMax = 4 // 4 est le nombre de personnes pouvant jouer en simultané, doit être changé si besoin

    var pseudo_grid = new Array(gridHeight);

    for (var i = 0; i < gridHeight; i++) {
        pseudo_grid[i] = new Array(gridWidth);
        for(var j=0; j< gridWidth; j++){
            pseudo_grid[i][j]="bg-black"
        }
    }

    const [grid, changeGrid] = useState(pseudo_grid)


    // Cursor


    let pseudo_cursor;
    if(type=="screen"){
        pseudo_cursor = new Array(nbPlayerMax)
        for(let i=0;i<nbPlayerMax;i++){
            pseudo_cursor[i] = {x:0,y:0,color:"black",used:false}
        }
    }else{
        pseudo_cursor={x:0,y:0,color:"black"}
    }
    const [cursor, setCursor] = useState(pseudo_cursor);

    // --- Websockets ---

    useEffect(() => {

      sendJsonMessage({
        req : "connection",
        type: type
      })
  
    },[]);

    function onReceivedSocket(message){
        let data = JSON.parse(message.data)

        console.log("Socket received")
        console.log(data)
        
        if(data.req && data.req=="move" && data.x!=undefined && data.y!= undefined && data.color!=undefined && data.id!=undefined){
            if(type=="screen"){
                let pseudo_cursor=[...cursor]
                pseudo_cursor[data.id] = {x:data.x, y:data.y, color:data.color, used:true}
                setCursor(pseudo_cursor)
            }else{
                setCursor({x:data.x, y:data.y, color:data.color})
            }
        }else if(data.req && data.req=="chgColor" && data.x!=undefined && data.y!= undefined && data.color!=undefined){
            let pseudo_grid = [...grid]
            pseudo_grid[gridHeight-data.y-1][data.x]=data.color
            changeGrid(pseudo_grid)
        }
    }

    return(
        <Component grid={grid} cursor={cursor} sendJsonMessage={sendJsonMessage}/>
    )
}