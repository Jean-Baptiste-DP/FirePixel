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
    const nbPlayerMax = 16 // 16 est le nombre de personnes pouvant jouer en simultané, doit être changé si besoin

    var grid = new Array(gridHeight);

    for (var i = 0; i < gridHeight; i++) {
        grid[i] = new Array(gridWidth);
        for(var j=0; j< gridWidth; j++){
            grid[i][j]=15;
        }
    }


    // Cursor


    let cursor;
    if(type=="screen"){
        cursor = new Array(nbPlayerMax)
        for(let i=0;i<nbPlayerMax;i++){
            cursor[i] = {x:0,y:0,id:-1,used:false}
        }
    }else{
        cursor={x:0,y:0,id:-1}
    }

    // --- Websockets ---

    useEffect(() => {

      sendJsonMessage({
        req : "connection",
        type: type
      })
  
    },[]);

    function onReceivedSocket(message){
        let data = JSON.parse(message.data)

        // console.log("Socket received",data)
        
        if(data.req && data.req=="move" && data.x!=undefined && data.y!= undefined && data.id!=undefined){
            if(type=="screen"){
                cursor[data.id] = {x:data.x, y:data.y, id:data.id, used:true}
            }else{
                cursor = {x:data.x, y:data.y,id:data.id}
            }
        }else if(data.req && data.req=="chgColor" && data.x!=undefined && data.y!= undefined && data.color!=undefined){
            grid[data.y][data.x]=data.color
        }
    }

    return(
        <Component grid={grid} cursor={cursor} sendJsonMessage={sendJsonMessage}/>
    )
}